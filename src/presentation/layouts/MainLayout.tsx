import React from "react";

interface Props {
  children: React.ReactNode;
}
export const MainLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};
