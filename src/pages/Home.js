import React from "react";
import styled from "styled-components";
import { DotsTriangle } from "../assets/svgs/Svgs.js";

function Home() {
  return (
    <ContentWrapper>
      <div className="flex-grow">
        <div className="flex flex-col justify-between py-16 mx-auto hero container-inner sm:flex-row">
          <div className="w-full text-4xl font-bold text-center sm:w-3/5 sm:text-left">
            <div className="leading-snug">
              Front-end <br className="sm:hidden" /> &amp;{" "}
              <br className="sm:hidden" /> Back-end <br /> Web Developer
            </div>
            <div className="leading-snug text-purple">
              Welcome to my website
            </div>
          </div>
          <div className="mt-8 sm:mt-0">
            <img
              src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/hero.svg"
              alt=""
              className="mx-auto sm:mx-0"
            />
          </div>
        </div>

        <div className="mx-auto container-inner">
          <p className="text-lg sm:text-xl">
            Greetings! I’m Victor. I spend my time designing and developing web
            applications, and helping others on{" "}
            <a href="https://laracasts.com">Laracasts</a>. I specialize in the{" "}
            <a href="https://laravel.com">Laravel PHP framework</a> on the
            backend, <a href="https://reactjs.org">React.js</a> on the frontend
            and <a href="https://tailwindcss.com">Tailwind CSS</a> for styling.
          </p>
          <div className="flex items-center justify-between py-16">
            <div className="w-full sm:w-1/2">
              <img
                src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/browser.svg"
                alt=""
                className="mx-auto sm:m-0"
              />
            </div>
            <div className="justify-end hidden w-1/2 sm:flex">
              <img
                src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/mobile.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <DotsTriangle />
      </div>
    </ContentWrapper>
  );
}

export default Home;

const ContentWrapper = styled.div`
  transition: background-color 0.25s;
  display: flex;
  flex-direction: column;
  line-height: 1.625;
  background-color: #fff;
  color: #2d3748;
`;
