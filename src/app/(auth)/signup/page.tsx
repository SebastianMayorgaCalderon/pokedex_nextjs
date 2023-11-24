"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Input from "src/components/shared/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/config/firebase";

type Props = {};

const SignUpPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const valid = password.length >= 6 && confirmPassword === password;
  return (
    <form
      className="flex flex-col items-center justify-center space-y-5 w-1/4 w"
      onSubmit={(e) => {
        e.preventDefault();
        valid && signUp();
      }}
    >
      <h1>Sign Up</h1>

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

      <Input
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        type="submit"
        className={`rounded-md ${
          valid ? "bg-indigo-600 hover:bg-indigo-500" : "bg-slate-600"
        } px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPage;
