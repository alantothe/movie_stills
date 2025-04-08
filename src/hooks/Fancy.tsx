"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type FancyboxProps = {
  delegate?: string;
  options?: Partial<OptionsType>;
  children?: ReactNode;
};

function Fancybox({
  delegate = "[data-fancybox]",
  options = {},
  children,
}: FancyboxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
}

export default Fancybox;
