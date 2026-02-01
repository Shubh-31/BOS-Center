import React, { ReactNode, MouseEvent } from "react";

interface DialogContentProps {
  className?: string;
  children: ReactNode;
}

export function DialogContent({
  className = "",
  children,
}: DialogContentProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // prevent closing when clicking inside content
  };

  return (
    <div
      className={`bg-white ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
