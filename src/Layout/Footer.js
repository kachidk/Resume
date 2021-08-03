import React from "react";
import { FooterTopSvg } from "../assets/svgs/Svgs.js";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <FooterTopSvg />
      <footer className="text-white bg-[#7300ab]">
        <div className="container flex flex-col items-center justify-between py-8 mx-auto sm:flex-row">
          <div className="mb-8 sm:mb-0">
            Copyright 2020. All rights reserved.
          </div>
          <ul className="flex items-center space-x-8">
            <li>
              <a
                href="mailto:nwangumav@gmail.com"
                className="text-white hover:text-gray-400"
              >
                <FiMail className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kachidk"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400"
              >
                <VscGithubInverted className="text-2xl" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
