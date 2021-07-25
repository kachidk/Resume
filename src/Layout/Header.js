import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <HeaderWrapper>
        <nav className="container flex flex-col items-center justify-between px-4 py-8 mx-auto mt-12 sm:flex-row sm:mt-0">
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
              <NavLink
                to="/resume"
                className="cursor-pointer text-copy-primary"
                activeClassName="text-purple-800"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cursor-pointer text-copy-primary"
                activeClassName="text-purple-800"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cursor-pointer text-copy-primary"
                activeClassName="text-purple-800"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
    </div>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  border-top-width: 14px;
  min-height: 80px;
  border-color: #8600c8;
  margin-bottom: 75px;
`;
