"use client";

import React from "react";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div>{children}</div>;
};
