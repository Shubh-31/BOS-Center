import React, { ReactNode } from "react";

interface DialogDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function DialogDescription({
  children,
  className = "",
}: DialogDescriptionProps) {
  return (
    <p
      className={`text-sm text-neutral-600 dark:text-neutral-400 ${className}`}
    >
      {children}
    </p>
  );
}
