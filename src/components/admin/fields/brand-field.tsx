"use client";
import type { IBrand } from "@/api/server-api/types";
import React from "react";
import AsyncListField from "./async-list-field";
import { useBrandsQuery } from "@/api/client-api/brand";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function BrandField({ name, defaultValue }: Props) {
  const { data, isLoading } = useBrandsQuery("");
  return (
    <AsyncListField
      defaultValue={defaultValue}
      getOptionLabel={(o) => o.titleFa}
      isLoading={isLoading}
      label="برند"
      name={name}
      options={data?.results ?? []}
      setQuery={() => {}}
    />
  );
}
