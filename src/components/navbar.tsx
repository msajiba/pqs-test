import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex space-x-4">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/static" className="text-white hover:text-gray-300">
          Static
        </Link>
        <Link href="/dynamic" className="text-white hover:text-gray-300">
          Dynamic
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
