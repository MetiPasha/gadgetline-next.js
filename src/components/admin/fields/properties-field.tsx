import { usePropertiesQuery } from "@/api/client-api/properties";
import type { IProperty } from "@/api/server-api/types";
import React, { useState } from "react";
import MultiAsyncListField from "./multi-async-list-field";

type PropertiesFieldProps = {
  name: string;
  defaultValue?: IProperty[];
};

export default function PropertiesField({
  defaultValue,
  name,
}: PropertiesFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = usePropertiesQuery(query);
  return (
    <MultiAsyncListField
      defaultValue={defaultValue}
      getOptionLabel={(o) => o.label}
      groupBy={(o) => o.type}
      isLoading={isLoading}
      label="ویژگی ها"
      name={name}
      options={data?.results ?? []}
      setQuery={setQuery}
    />
  );
}
