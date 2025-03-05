"use client"
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <p>Logout</p>
        </>
      )}
      <div className="cursor-pointer">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {open && (
        <div className="">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <p>Logout</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
