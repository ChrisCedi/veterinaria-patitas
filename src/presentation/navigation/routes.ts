import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../screens/Home/Home";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

interface RoutesProps {
  id: string;
  path: string;
  layout: FC<Props>;
  component: FC;
  exact: boolean;
}

export const routes: RoutesProps[] = [
  {
    id: "home-id",
    path: "/",
    layout: MainLayout,
    component: Home,
    exact: true,
  },
];
