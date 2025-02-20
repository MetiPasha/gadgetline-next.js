import { IShopProducts, SellerInfo } from "@/api/server-api/types";
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type OrderItem = {
  product: IShopProducts;
  productSeller: SellerInfo;
  color: string;
};
export type OrderItemWithQuantity = OrderItem & { quantity: number };

export type CartState = {
  items: OrderItemWithQuantity[];
};

export type CartActions = {
  decrementItemCount: (
    sellerId: string,
    productId: string,
    color: string
  ) => void;
  incrementItemCount: (orderItem: OrderItemWithQuantity) => void;
  clearCart: () => void;
  removeItem: (sellerId: string, productId: string, color: string) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  items: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...initState,
        decrementItemCount: (sellerId, productId, color) =>
          set((state) => decrement(state, sellerId, productId, color)),
        incrementItemCount: (orderItem: OrderItemWithQuantity) =>
          set((state) => increment(state, orderItem)),
        clearCart: () => set({ items: [] }),
        removeItem: (sellerId, productId, color) =>
          set((state) => ({
            items: state.items.filter(
              (item) =>
                item.productSeller.id !== sellerId ||
                item.product.id !== productId ||
                item.color !== color
            ),
          })),
      }),
      {
        name: "cart-storage",
      }
    )
  );
};

function increment(
  state: CartState,
  orderItem: OrderItemWithQuantity
): CartState {
  const isExist = state.items.some(
    (item) =>
      item.productSeller.id === orderItem.productSeller.id &&
      item.product.id === orderItem.product.id &&
      item.color === orderItem.color
  );

  if (isExist) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.productSeller.id === orderItem.productSeller.id &&
        item.product.id === orderItem.product.id &&
        item.color === orderItem.color
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }

  return {
    ...state,
    items: [...state.items, { ...orderItem, quantity: orderItem.quantity }],
  };
}
function decrement(
  state: CartState,
  sellerId: string,
  productId: string,
  color: string
): CartState {
  const item = state.items.find(
    (item) =>
      item.productSeller.id === sellerId &&
      item.product.id === productId &&
      item.color === color
  );

  if (!item) {
    throw new Error("محصول در سبد خرید موجود نیست!");
  }

  const shouldRemove = item.quantity <= 1;

  if (shouldRemove) {
    return {
      ...state,
      items: state.items.filter(
        (item) =>
          item.productSeller.id !== sellerId ||
          item.product.id !== productId ||
          item.color !== color
      ),
    };
  }

  return {
    ...state,
    items: state.items.map((item) =>
      item.productSeller.id === sellerId &&
      item.product.id === productId &&
      item.color === color
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  };
}
