import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { debounce } from "@mui/material/utils";

type Props<T extends { id: string }> = {
  name: string;
  defaultValue?: T;
  isLoading: boolean;
  options: T[];
  groupBy?: (option: T) => string;
  getOptionLabel: (option: T) => string;
  label: string;
  setQuery: (q: string) => void;
  error?: boolean;
  helperText?: string | string[];
  onChange?: (value: T | null) => void;
};

export default function AsyncListField<T extends { id: string }>({
  name,
  defaultValue,
  isLoading,
  options,
  groupBy,
  getOptionLabel,
  label,
  setQuery,
  error,
  helperText,
  onChange,
}: Props<T>) {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<T | null>(defaultValue ?? null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateQuery = useCallback(
    debounce((inputValue: string, value) => {
      setQuery(value ? "" : inputValue);
    }, 500),
    []
  );

  return (
    <>
      {value?.id && (
        <input
          defaultValue={value?.id}
          name={name} // This will be sent to the backend
          type="hidden"
        />
      )}
      <Autocomplete
        disablePortal
        fullWidth
        getOptionLabel={getOptionLabel}
        groupBy={groupBy}
        inputValue={inputValue}
        options={options}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            helperText={helperText}
            label={label}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              },
            }}
          />
        )}
        onChange={(event: unknown, newValue: T | null) => {
          setValue(newValue);
          onChange?.(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          updateQuery(newInputValue, value);
        }}
      />
    </>
  );
}
