import React from "react";
import NavBar from "src/components/nav-bar";
import SessionProvider from "../SessionProvider";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const PokedexLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default PokedexLayout;
