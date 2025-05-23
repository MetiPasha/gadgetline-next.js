import type { IBadge } from "@/api/server-api/types";
import React, { useState } from "react";
import MultiAsyncListField from "./multi-async-list-field";
import { useBadgesQuery } from "@/api/client-api/badges";

type BadgeFieldProps = {
  name: string;
  defaultValue?: IBadge[];
};

export default function BadgeField({ defaultValue, name }: BadgeFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useBadgesQuery(query);
  return (
    <MultiAsyncListField
      defaultValue={defaultValue}
      getOptionLabel={(o) => o.title}
      isLoading={isLoading}
      label="برچسب ها"
      name={name}
      options={data?.results ?? []}
      setQuery={setQuery}
    />
  );
}
