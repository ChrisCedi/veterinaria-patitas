import { Link, useLocation } from "react-router-dom";

interface Props {
  label: string;
  path: string;
}
export const LinkHeader = ({ label, path }: Props) => {
  const location = useLocation();

  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        marginRight: 12,
        color: location.pathname === path ? "orange" : "white",
        fontWeight: 600,
      }}
    >
      {label}
    </Link>
  );
};
