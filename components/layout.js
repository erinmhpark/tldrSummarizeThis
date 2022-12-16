import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <main className="py-3 px-0 gap-10 flex flex-col min-h-screen items-center text-white">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
