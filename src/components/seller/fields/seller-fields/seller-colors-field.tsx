"use client";
import { IColor } from "@/api/server-api/types";
import React, { useState } from "react";
import MultiAsyncListField from "../multi-async-list-field";
import { useSellerColorsQuery } from "@/api/seller-api/seller-client/seller-colors";

type ColorFieldProps = {
  name: string;
  defaultValue?: IColor[];
};

export default function ColorsField({ defaultValue, name }: ColorFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSellerColorsQuery(query);
  return (
    <MultiAsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.title}
      isLoading={isLoading}
      label="رنگ ها"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
