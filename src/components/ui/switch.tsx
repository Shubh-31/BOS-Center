import React, { useState } from "react";

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Switch({
  id,
  checked,
  onCheckedChange,
  disabled = false,
  className = "",
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState<boolean>(!!checked);

  const toggle = () => {
    if (disabled) return;
    const newValue = !internalChecked;
    setInternalChecked(newValue);
    onCheckedChange?.(newValue);
  };

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={internalChecked}
      onClick={toggle}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        internalChecked ? "bg-green-400" : "bg-neutral-300 dark:bg-neutral-700"
      } ${
        disabled ? "opacity-100 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
          internalChecked
            ? "translate-x-6 bg-neutral-300" // ✅ Lighter thumb when ON
            : "translate-x-1 bg-blue-200" // ✅ White thumb when OFF
        }`}
      />
    </button>
  );
}
