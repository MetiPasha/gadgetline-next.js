"use client";

import { ICategory } from "@/api/server-api/types";
import { Stack } from "@mui/material";
import AIForm from "./AIForm";
import { useActionState } from "react";
import { createOrUpdateSellerCategoryAction } from "@/actions/seller/seller-category";
import SellerCategoryField from "../fields/seller-fields/seller-category-field";
import SubmitButton from "../../SubmitButton";

type Props = {
  defaultValue?: ICategory;
};

export default function SellerCategoryForm({ defaultValue }: Props) {
  const [state, action] = useActionState(createOrUpdateSellerCategoryAction, {
    message: "",
    success: false,
  });

  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        {defaultValue?.id && (
          <input hidden name="id" defaultValue={defaultValue.id} />
        )}

        <SellerCategoryField
          error={!!state.errors?.parent}
          helperText={state.errors?.parent ?? ""}
          name="parent"
          defaultValue={defaultValue?.parent}
        />

        {/* <SellerPropertiesField
          name="properties"
          defaultValue={defaultValue?.properties}
        /> */}

        <AIForm
          schema={[
            {
              name: "titleFa",
              label: "نام فارسی",
              type: "string",
              defaultValue: defaultValue?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa ?? "",
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              type: "string",
              defaultValue: defaultValue?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn ?? "",
            },
            {
              name: "slug",
              label: "نشانک",
              type: "string",
              defaultValue: defaultValue?.slug,
              error: !!state.errors?.slug,
              helperText: state.errors?.slug ?? "",
            },
            {
              name: "returnReasonAlert",
              type: "textarea",
              label: "شرایط بازگشت",
              defaultValue: defaultValue?.returnReasonAlert,
              error: !!state.errors?.returnReasonAlert,
              helperText: state.errors?.returnReasonAlert ?? "",
            },
          ]}
        />
      </Stack>
      <SubmitButton variant="contained">ذخیره</SubmitButton>
    </form>
  );
}
