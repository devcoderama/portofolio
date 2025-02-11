import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="space-x-4">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/projects" className="hover:text-blue-500">
        Projects
      </Link>
      <Link href="/skills" className="hover:text-blue-500">
        Skills
      </Link>
      <Link href="/contact" className="hover:text-blue-500">
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
