"use client";

import type { ReactNode } from "react";
import { openZaloWithMessage } from "@/lib/zalo";

type ZaloMessageButtonProps = {
  message: string;
  className?: string;
  children: ReactNode;
};

export function ZaloMessageButton({ message, className, children }: ZaloMessageButtonProps) {
  function handleClick() {
    void openZaloWithMessage(message);
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
