"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { IShopProducts } from "@/api/server-api/types"; // به فرض اینکه IShopProducts در این فایل هست

interface FavoriteContextType {
  favorites: IShopProducts[]; // استفاده از IShopProducts
  addToFavorites: (product: IShopProducts) => void; // استفاده از IShopProducts
  removeFromFavorites: (id: string) => void; // حذف با استفاده از id محصول
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<IShopProducts[]>([]);

  // خواندن اطلاعات از localStorage هنگام بارگذاری
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // ذخیره در localStorage هنگام تغییر علاقه‌مندی‌ها
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: IShopProducts) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

// هوک اختصاصی برای استفاده از کانتکست
export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites باید داخل FavoriteProvider استفاده شود");
  }
  return context;
};
