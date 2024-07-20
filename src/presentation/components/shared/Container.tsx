import React from "react";
import { styled } from "@mui/material";
import { BoxProps } from "@mui/material";
import { Box } from "@mui/material";

export const Body = styled(Box)<BoxProps>(({ theme }) => ({
  marginRight: 130,
  marginLeft: 130,
  [theme.breakpoints.down("xl")]: {
    marginRight: 90,
    marginLeft: 90,
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: 30,
    marginLeft: 30,
  },
}));

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <Body>{children}</Body>;
};
