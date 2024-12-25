import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const HeaderLinkWrapper = ({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className={`heading-link`}
      // className={({ isActive }) =>
      //   `${isActive ? "heading-link-active" : "heading-link-default"} heading-link`
      // }
    >
      {children}
    </Link>
  );
};

export default HeaderLinkWrapper;
