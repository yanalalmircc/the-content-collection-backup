"use client";

import { usePathname } from "next/navigation";
import { Header, SignupHeader } from "./components";

export function HeaderSelector() {
  const pathname = usePathname();
  return pathname === "/signup" ? <SignupHeader /> : <Header />;
}
