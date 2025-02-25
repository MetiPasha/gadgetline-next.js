"use client";
import { useState } from "react";
import AsyncListField from "../async-list-field";
import { useSellerCategoriesQuery } from "@/api/seller-api/seller-client/seller-categories";
import { ICategory } from "@/api/server-api/types";

type Props = {
  name: string;
  defaultValue?: ICategory;
  error?: boolean;
  helperText?: string | string[];
  onChange?: (value: ICategory | null) => void;
};

export default function SellerCategoryField({
  name,
  defaultValue,
  error,
  helperText,
  onChange,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSellerCategoriesQuery(query);
  return (
    <AsyncListField
      error={error}
      onChange={onChange}
      helperText={helperText}
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      groupBy={(o) => o.parent?.titleFa ?? "root"}
      isLoading={isLoading}
      label="دسته بندی"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
