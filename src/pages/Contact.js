import React from "react";
import { DotsTriangle } from "../assets/svgs/Svgs.js";
import Image from "next/image";
import blackPic from "../assets/images/black.jpg";

function Contact() {
  return (
    <>
      <div className="container-inner">
        <section>
          <div className="overflow-x-hidden">
            <div className="relative pb-16 mx-auto mb-16 text-xl border-t border-b border-gray-500 get-to-know-me container-inner">
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
              <h2 className="mt-8 mb-6 font-bold">Get to know me:</h2>
              <div className="flex flex-col items-center justify-between mb-16 sm:flex-row">
                <div>
                  <Image
                    src={blackPic}
                    alt=""
                    height={128}
                    width={128}
                    className="mb-8 rounded-full lg:mb-0"
                  />
                </div>
                <div className="flex-1 ml-6 text-lg sm:text-xl">
                  I had to throw in a picture of myself somewhere on this page.
                  If you are interested in my origin story and how I got into
                  computers &amp; programming, watch the video below.
                </div>
              </div>
              <div className="text-2xl text-center">Video coming soon...</div>
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
        <section>
          <div
            className="pb-4 mx-auto mb-4 text-xl contact-me container-inner"
            id="contactScroll"
          >
            <h2 className="mb-6 font-bold">Contact me:</h2>
            <div className="mb-16 text-lg sm:text-xl">
              If you’re looking to get in contact with me for business inquiries
              or if you have a question, feel free to{" "}
              <a href="mailto:nwangumav@gmail.com">email me</a>. I’ll try to
              respond as soon as I can.
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

export default Contact;
