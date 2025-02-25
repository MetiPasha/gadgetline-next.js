"use server";

import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { CategoryFormState, CategorySchemaZod } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import {
  createSellerCategory,
  deleteSellerCategory,
  updateSellerCategory,
} from "@/api/seller-api/categor";

export async function createOrUpdateSellerCategoryAction(
  state: CategoryFormState,
  formData: FormData
) {
  /// validate input
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = CategorySchemaZod.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateSellerCategory(id.toString(), validatedFields.data);
    } else {
      await createSellerCategory(validatedFields.data);
    }
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors as CategoryFormState["errors"],
      };
    } else {
      return {
        message: "failed with call api",
        success: false,
      };
    }
  }
  redirect("/seller/category");
}

export async function deleteSellerCategoryAction(id: string) {
  await ensureAuthenticated();
  try {
    await deleteSellerCategory(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/seller/category");
}
