import { TextInput } from "../TextInput";
import type { SearchInputProps } from "./SearchInput.types";

export function SearchInput(props: SearchInputProps) {
  return (
    <TextInput
      type="search"
      icon="MagnifyingGlass"
      iconPosition="left"
      placeholder={props.placeholder ?? "Search"}
      {...props}
    />
  );
}
