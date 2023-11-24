"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
type Props = {};

const NavBar = (props: Props) => {
  const { status } = useSession();
  return <div>NavBar {status}</div>;
};

export default NavBar;
