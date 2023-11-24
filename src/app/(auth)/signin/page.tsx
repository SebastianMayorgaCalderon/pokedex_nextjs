"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Input from "src/components/shared/input";

type Props = {};

const SignInPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInHandler = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <form
      className="flex flex-col items-center space-y-5 w-1/4 w justify-center"
      onSubmit={signInHandler}
    >
      <h1>Login</h1>

      <Input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInPage;
