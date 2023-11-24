"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const session = useSession();

  const unauthorizedPaths = [
    {
      id: 1,
      link: "signin",
    },
    {
      id: 2,
      link: "signup",
    },
  ];

  const authorizedPaths = [
    {
      id: 1,
      link: "pokedex",
    },
  ];

  const userAuthenticated = session.status === "authenticated";
  const paths = userAuthenticated ? authorizedPaths : unauthorizedPaths;
  return (
    <>
      <div
        className={`flex justify-between items-center w-full ${
          nav ? "h-full" : "h-20"
        } h-f px-4 text-white bg-black fixed nav`}
      >
        <div>
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <h1 className="text-5xl font-signature ml-2">
            <Link className="link-underline link-underline-black" href="/">
              Pokedex cum
            </Link>
          </h1>
        </div>

        <div className="flex  items-center">
          {userAuthenticated && <h1>user {session?.data?.user?.email}</h1>}
          <ul className="hidden md:flex">
            {paths.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline flex items-center"
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}

            {userAuthenticated && (
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign out
                </button>
              </li>
            )}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {unauthorizedPaths.map(({ id, link }) => (
              <Link
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                onClick={() => setNav(!nav)}
                href={link}
                key={id}
              >
                {link}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
