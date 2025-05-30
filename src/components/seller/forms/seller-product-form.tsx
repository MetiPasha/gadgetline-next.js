"use client";

import { ICategory, IShopProducts } from "@/api/server-api/types";
import {
  Alert,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useActionState, useState } from "react";
import AIForm from "./AIForm";
import SubmitButton from "./SubmitButton";
import SingleUpload from "@/components/upload/single-upload";
import { createOrUpdateSellerProductAction } from "@/actions/seller/seller-product";
import SellerCategoryField from "../fields/seller-fields/seller-category-field";
import SellerBadgeField from "../fields/seller-fields/seller-badge-field";
import SellerColorsField from "../fields/seller-fields/seller-colors-field";
import SellerBrandField from "../fields/seller-fields/seller-brand-field";

type ProductFormProps = {
  defaultValue?: IShopProducts;
};

function SellerProductForm({ defaultValue }: ProductFormProps) {
  const [state, action] = useActionState(createOrUpdateSellerProductAction, {
    message: "",
    success: false,
  });
  const [category, setCategory] = useState<ICategory | null>(
    defaultValue?.category ?? null
  );
  return (
    <form action={action}>
      {defaultValue?.id && (
        <input hidden name="id" defaultValue={defaultValue.id} />
      )}
      {state.message && <Alert severity="warning">{state.message}</Alert>}
      <Stack spacing={2} mt={2}>
        <Stack gap={2} direction="row">
          <SingleUpload
            name="images.main"
            defaultValue={defaultValue?.images.main}
          />
          <SingleUpload
            multi
            name="images.list"
            defaultValue={defaultValue?.images.list}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <SellerCategoryField
            onChange={setCategory}
            name="category"
            defaultValue={defaultValue?.category}
          />
          <SellerBrandField name="brand" defaultValue={defaultValue?.brand} />
        </Stack>
        <Stack direction="row" gap={2}>
          <SellerBadgeField
            name="badges"
            defaultValue={
              defaultValue?.badges ? [defaultValue.badges] : undefined
            }
          />
          <SellerColorsField
            name="colors"
            defaultValue={defaultValue?.colors}
          />
        </Stack>
        <AIForm
          schema={[
            {
              name: "code",
              type: "number",
              label: "کد کالا",
              defaultValue: defaultValue?.code,
              error: !!state.errors,
              helperText: state.errors?.code,
            },
            {
              name: "titleFa",
              label: "نام فارسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa,
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn,
            },
            {
              name: "review",
              label: "بررسی",
              type: "textarea",
              defaultValue: defaultValue?.review,
              error: !!state.errors?.review,
              helperText: state.errors?.review,
            },
            {
              name: "expert_review",
              label: "بررسی تخصصی",
              type: "textarea",
              defaultValue: defaultValue?.expert_review,
              error: !!state.errors?.expert_review,
              helperText: state.errors?.expert_review,
            },
          ]}
        />
        <Divider />
        <Typography>ویژگی ها</Typography>
        {category?.properties.map((item, i) => (
          <Stack gap={1} key={item.id || i}>
            <input
              hidden
              name={`specifications.${i}.name`}
              defaultValue={item.name}
            />
            <input
              hidden
              name={`specifications.${i}.title`}
              defaultValue={item.label}
            />
            <Box>
              {item.options?.length ? (
                <TextField
                  select
                  fullWidth
                  defaultValue={
                    defaultValue?.specifications.find(
                      (i) => i.name === item.name
                    )?.value ?? ""
                  }
                  label={item.label}
                  name={`specifications.${i}.value`}
                >
                  <MenuItem value="">لطفا یک مورد را انتخاب کنید</MenuItem>
                  {item.options.map((o) => (
                    <MenuItem value={o.value} key={o.id}>
                      {o.value}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  fullWidth
                  label={item.label}
                  defaultValue={
                    defaultValue?.specifications.find(
                      (i) => i.name === item.name
                    )?.value
                  }
                  name={`specifications.${i}.value`}
                />
              )}

              <FormControlLabel
                control={<Checkbox name={`specifications.${i}.isDefault`} />}
                label={"آیا در اول صفحه نمایش داده شود؟"}
              />
            </Box>
          </Stack>
        ))}
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}

export default SellerProductForm;
