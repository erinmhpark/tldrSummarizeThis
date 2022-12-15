import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-1/2">
      <ul className="flex justify-end gap-8 sm:gap-8 w-full">
        <li>
          <Link
            className="decoration-slate-500 hover:underline hover:underline-offset-8"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="decoration-slate-500 hover:underline hover:underline-offset-8"
            href="/"
          >
            TL;DR
          </Link>
        </li>
        <li>
          <Link
            className="decoration-slate-500 hover:underline hover:underline-offset-8"
            href="/"
          >
            QnA
          </Link>
        </li>
      </ul>
    </nav>
  );
}
