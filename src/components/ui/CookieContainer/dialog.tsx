import React, { ReactNode, MouseEvent } from "react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  const handleOverlayClick = () => {
    onOpenChange(false);
  };

  const handleDialogClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // prevent closing when clicking inside dialog
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6"
        onClick={handleDialogClick}
      >
        {children}
      </div>
    </div>
  );
}
