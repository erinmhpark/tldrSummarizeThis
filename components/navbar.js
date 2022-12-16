import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="font-semibold leading-tight mt-8">
      <ul className="flex gap-8 items-center justify-center">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "underline underline-offset-4 decoration-white"
                : ""
            }
          >
            TL;DR
          </Link>
        </li>
        <li>
          <Link
            href="/q&a"
            className={
              pathname === "/q&a"
                ? "underline underline-offset-4 decoration-white"
                : ""
            }
          >
            Q&A
          </Link>
        </li>
      </ul>
    </nav>
  );
}
