"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden sm:block text-lg font-semibold">Login</Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:block text-lg font-semibold">Write</Link>
          <p>Logout</p>
        </>
      )}

      {/* Hamburger Menu */}
      <div className="cursor-pointer md:hidden z-50" onClick={() => setOpen(!open)}>
        <div className="w-7 h-1 mb-1 bg-[var(--textColor)]"></div>
        <div className="w-7 h-1 mb-1 bg-[var(--textColor)]"></div>
        <div className="w-7 h-1 mb-1 bg-[var(--textColor)]"></div>
      </div>

      {/* Navbar Kedua (Mobile) */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-40 pt-[72px] bg-[var(--bg)] text-[var(--textColor)] gap-5">
          <Link href="/" className="text-3xl font-semibold">Home</Link>
          <Link href="/about" className="text-3xl font-semibold">About</Link>
          <Link href="/contact" className="text-3xl font-semibold">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className="text-3xl font-semibold">Login</Link>
          ) : (
            <>
              <Link href="/write" className="text-3xl font-semibold">Write</Link>
              <p className="text-3xl font-semibold">Logout</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
