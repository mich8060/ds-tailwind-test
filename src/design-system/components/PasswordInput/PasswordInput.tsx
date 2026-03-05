import { useState } from "react";
import { TextInput } from "../TextInput";
import type { PasswordInputProps } from "./PasswordInput.types";

export function PasswordInput({
  showToggle = true,
  initiallyVisible = false,
  ...props
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(initiallyVisible);

  if (!showToggle) {
    return <TextInput type="password" {...props} />;
  }

  return (
    <TextInput
      type={isVisible ? "text" : "password"}
      icon={isVisible ? "EyeSlash" : "Eye"}
      onIconClick={() => setIsVisible((prev) => !prev)}
      {...props}
    />
  );
}
