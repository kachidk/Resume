import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex border-t-[14px] min-h-[80px] border-[#8600c8] mb-[75px]">
      <nav className="container flex flex-col items-center justify-between px-4 py-8 mt-12 mx-auhref sm:flex-row sm:mt-0">
        <div className="mb-4 sm:mb-0">
          <a href="/" className="active--exact active">
            <span style={{ fontSize: "35px", color: "#2d3748" }}>Victor</span>
            <span
              style={{
                fontSize: "35px",
                color: "#8600c8",
                fontWeight: "bolder",
              }}
            >
              Nwanguma
            </span>
          </a>
        </div>
        <ul className="flex items-center space-x-8 font-bold tracking-wide uppercase sm:mr-20">
          <li>
            <Link
              href="/Resume"
              className="cursor-pointer text-copy-primary"
              activeClassName="text-purple-800"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer text-copy-primary"
              activeClassName="text-purple-800"
              href="/Projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer text-copy-primary"
              activeClassName="text-purple-800"
              href="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
