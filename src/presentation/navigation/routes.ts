import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../screens/Home/Home";
import { Quotes } from "../screens/Quotes/Quotes";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

interface RoutesProps {
  id: string;
  path: string;
  layout: FC<Props>;
  label?: string;
  component: FC;
  exact: boolean;
}

export const routes: RoutesProps[] = [
  {
    id: "home-id",
    path: "/",
    layout: MainLayout,
    component: Home,
    label: "Inicio",
    exact: true,
  },
  {
    id: "quotes-id",
    path: "/quotes",
    layout: MainLayout,
    component: Quotes,
    label: "Citas",
    exact: true,
  },
];
