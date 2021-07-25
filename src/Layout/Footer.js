import React from "react";
import { FooterTopSvg, MailSvg, GithubSvg } from "../assets/svgs/Svgs.js";

function Footer() {
  return (
    <div>
      <FooterTopSvg />
      <footer className="text-white bg-background-purple1">
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
                <MailSvg />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kachidk"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400"
              >
                <GithubSvg />{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
