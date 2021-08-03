import React from "react";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";
import { DotsTriangle } from "../assets/svgs/Svgs.js";

export default function Projects() {
  return (
    <>
      <div className="container-inner">
        <section>
          <div className="overflow-x-hidden">
            <div className="relative py-16 mx-auto mb-16 text-xl border-t border-b border-gray-500 projects container-inner">
              <h2 className="mb-6 font-bold">
                Here are some projects I&apos;ve worked on:
              </h2>
              <div
                className="absolute right-0"
                style={{
                  top: "50px",
                  transform: "translate(100%) rotate(180deg)",
                }}
              >
                <svg width="170px" height="170px">
                  <use xlinkHref="#dots-triangle"></use>
                </svg>
              </div>
              <ul className="text-lg sm:text-xl">
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">Laravel Leave-Application App</div>
                    <div className="text-base text-gray-600">
                      A Leave-Application App built with Laravel. Which enables
                      staff of an organisation apply for leave be it, medical
                      leave or vacation. It includes a dashboard for various
                      departments and personnels (Human Resources, HOD and
                      Supervisors) in a organisation. where each personnel or
                      department is involved in the stages to approval.{" "}
                      <a href="https://github.com/kachidk/LeaveApp">
                        GitHub Link
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://leave-xix.herokuapp.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Link
                      </a>
                      .
                    </div>
                  </div>
                </li>
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">Driver Booking App</div>
                    <div className="text-base text-gray-600">
                      A driver booking system that lets users place bookings for
                      drivers within an organisation. An admin can also oversee
                      all booking and manage everything accordingly.{" "}
                      <a href="https://github.com/kachidk/DriverApp">
                        GitHub Link
                      </a>{" "}
                      or
                      <a
                        href="https://driver-xix.herokuapp.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Link
                      </a>
                      .
                    </div>
                  </div>
                </li>
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">React Portfolio WebSite</div>
                    <div className="text-base text-gray-600">
                      A modern portfolio website built with React.js and
                      Tailwind.{" "}
                      <a href="https://github.com/kachidk/Resume">
                        GitHub Link
                      </a>{" "}
                      or{" "}
                      <a href="https://victor-xix.herokuapp.com">Live Link</a>.
                    </div>
                  </div>
                </li>
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">Dracko CSS</div>
                    <div className="text-base text-gray-600">
                      A light-weight CSS framework. Initially built just for
                      spacing, more features are to be added in the future. It
                      started out as a minor project which is fast becoming a
                      huge breakthrough.{" "}
                      <a
                        href="https://github.com/kachidk/dracko-css"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Link
                      </a>
                      .
                    </div>
                  </div>
                </li>
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">Traditional Resume</div>
                    <div className="text-base text-gray-600">
                      A traditional resume built with React.js and Tailwind,{" "}
                      <Link href="/resume" className="">
                        click here for HTML version
                      </Link>
                      , or <a href="/projects">here for PDF version</a>
                    </div>
                  </div>
                </li>
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">Metro Sports</div>
                    <div className="text-base text-gray-600">
                      A sports app built with React.js{" "}
                      <a href="https://metro-x.web.app" className="">
                        Live Link.
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex mb-6">
                  <div style={{ color: "#8600c8", fontSize: "30px" }}>
                    <HiBadgeCheck />
                  </div>
                  <div className="ml-2">
                    <div className="mb-1">Pixel movies</div>
                    <div className="text-base text-gray-600">
                      A Movie app displaying details about movies{" "}
                      <a href="https://pixel-m.web.app" className="">
                        Live Link.
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                className="absolute bottom-0 left-0"
                style={{ bottom: "50px", transform: "translateX(-100%)" }}
              >
                <svg width="170px" height="170px">
                  <use xlinkHref="#dots-triangle"></use>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ display: "none" }}>
        <DotsTriangle />
      </div>
    </>
  );
}
