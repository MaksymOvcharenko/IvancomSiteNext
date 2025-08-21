"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GtmPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "page_view", page_location: url });
  }, [pathname, searchParams]);

  return null;
}
