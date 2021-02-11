import React from "react";
import {Link} from 'react-router-dom';
import * as Abc from "../styled/HomePage.js";
import { HiBadgeCheck } from 'react-icons/hi';
import { DotsTriangle, FooterTopSvg, MailSvg, GithubSvg, CodepenSvg} from '../styled/Svgs.js';


const Home = () => {

  function scrollToProjects() {
    const titleElement = document.getElementById('projectsScroll')
    titleElement.scrollIntoView({ behavior: 'smooth' })
    }

  function scrollToContact() {
     document.getElementById('contactScroll').scrollIntoView({ behavior: 'smooth' })
    }

  return (
    <Abc.ContentWrapper>
      <Abc.Header>
        <nav className="container flex flex-col items-center justify-between py-8 pl-4 pr-4 mx-auto mt-12 sm:flex-row sm:mt-0">
          <div className="mb-4 sm:mb-0">
            <a href="/" className="active--exact active">
              <span style={{ fontSize: '35px', color:'#2d3748'}}>Victor</span><span style={{ fontSize: '35px', color: '#8600c8', fontWeight: 'bolder',}}>Nwanguma</span>
            </a>
          </div>
          <ul className="flex items-center space-x-8 font-bold tracking-wide uppercase sm:mr-20">
            <li>
              <Link
                to = "/resume"
                className="text-copy-primary hover:text-gray-600"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-copy-primary hover:text-gray-600"
                to = "/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-copy-primary hover:text-gray-600"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Abc.Header>

      <div className="flex-grow">
        <div className="flex flex-col justify-between py-16 mx-auto hero container-inner sm:flex-row">
          <div className="w-full text-4xl font-bold text-center sm:w-3/5 sm:text-left">
            <div className="leading-snug">
              Front-end <br className="sm:hidden"/> &amp; <br className="sm:hidden" /> Back-end <br/> Web Developer
            </div>
            <div className="leading-snug text-purple">Welcome to my website</div>
          </div>
          <div className="mt-8 sm:mt-0">
            <img
              src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/hero.svg"
              alt="hero"
              className="mx-auto sm:mx-0"
            />
          </div>
        </div>

        <div className="mx-auto container-inner">
          <p className="text-lg sm:text-xl">
            Greetings! I’m Victor. I spend my days designing and developing web
            applications, and helping others on{" "}
            <a href="https://laracasts.com">Laracasts</a>. I specialize in the{" "}
            <a href="https://laravel.com">Laravel PHP framework</a> on the
            backend, <a href="https://vuejs.org">Vue.js</a> on the frontend and{" "}
            <a href="https://tailwindcss.com">Tailwind CSS</a> for styling.
          </p>
          <div className="flex items-center justify-between py-16">
            <div className="w-full sm:w-1/2">
              <img
                src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/browser.svg"
                alt="browser"
                className="mx-auto sm:m-0"
              />
            </div>
            <div className="justify-end hidden w-1/2 sm:flex">
              <img
                src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/mobile.svg"
                alt="mobile"
              />
            </div>
          </div>
        </div>

        
       <FooterTopSvg /> 
       
        <footer className="text-white bg-background-purple1"><div className="container flex flex-col items-center justify-between py-8 mx-auto sm:flex-row"><div className="mb-8 sm:mb-0">Copyright 2020. All rights reserved.</div><ul className="flex items-center space-x-8"><li><a href="mailto:nwangumav@gmail.com" className="text-white hover:text-gray-400"><MailSvg /></a></li><li><a href="https://github.com/kachidk" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400"><GithubSvg /> </a></li><li><a href="#" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400"><CodepenSvg /></a></li></ul></div></footer>
      </div>
        
     <div style={{ display: "none" }}><DotsTriangle /></div>
    </Abc.ContentWrapper>
  );
};

export default Home;
