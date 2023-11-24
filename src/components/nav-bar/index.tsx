"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();

  const { status } = useSession();
  return (
    <div>
      NavBar {status} <button onClick={() => signOut()}>signOut</button>
      <h1>lalala</h1>
      <button
        onClick={() => {
          router.push("/pokedex");
        }}
      >
        to pokedex
      </button>
    </div>
  );
};

export default NavBar;
