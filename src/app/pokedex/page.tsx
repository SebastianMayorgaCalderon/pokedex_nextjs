"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const PokedexPage = (props: Props) => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  return (
    <div className="p-8">
      <h1>Pokedex {session?.data?.user?.email}</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default PokedexPage;
