import React from "react";
import { Header } from "../components/shared/Header/Header";

interface Props {
  children: React.ReactNode;
}
export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
