import React from "react";
import {Link} from 'react-router-dom';
import * as Abc from "../styled/HomePage.js";
import * as HiIcons from 'react-icons/hi';
import { DotsTriangle, FooterTopSvg, MailSvg, GithubSvg, CodepenSvg} from '../styled/Svgs.js';


const Testing = () => {

  function scrollToProjects() {
    const titleElement = document.getElementById('projectsScroll')
    titleElement.scrollIntoView({ behavior: 'smooth' })
    }

  function scrollToContact() {
    const titleElement = document.getElementById('contactScroll')
    titleElement.scrollIntoView({ behavior: 'smooth' })
    }

  return (
    <Abc.ContentWrapper>
      <Abc.Header>
        <nav className="container pl-4 pr-4 mx-auto flex flex-col sm:flex-row justify-between items-center py-8 mt-12 sm:mt-0">
          <div className="mb-4 sm:mb-0">
            <a href="/" className="active--exact active">
              <span style={{ fontSize: '35px', color:'#2d3748'}}>Victor</span><span style={{ fontSize: '35px', color: '#8600c8', fontWeight: 'bolder',}}>Nwanguma</span>
            </a>
          </div>
          <ul className="uppercase tracking-wide font-bold flex items-center space-x-8 sm:mr-20">
            <li>
              <Link
                to = "/resume"
                className="text-copy-primary hover:text-gray-600"
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                className="text-copy-primary hover:text-gray-600 cursor-pointer"
                onClick={scrollToProjects}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-copy-primary hover:text-gray-600 cursor-pointer"
                onClick={scrollToContact}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Abc.Header>

      <div className="flex-grow">
        <div className="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
          <div className="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
            <div className="leading-snug">
              Front-end <br className="sm:hidden"/> &amp; <br className="sm:hidden" /> Back-end <br/> Web Developer
            </div>
            <div className="text-purple leading-snug">Welcome to my website</div>
          </div>
          <div className="mt-8 sm:mt-0">
            <img
              src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/hero.svg"
              alt="hero"
              className="mx-auto sm:mx-0"
            />
          </div>
        </div>

        <div className="container-inner mx-auto">
          <p className="text-lg sm:text-xl">
            Greetings! I’m Victor. I spend my days designing and developing web
            applications, and helping others on{" "}
            <a href="https://laracasts.com">Laracasts</a>. I specialize in the{" "}
            <a href="https://laravel.com">Laravel PHP framework</a> on the
            backend, <a href="https://reactjs.org">React.js</a> on the frontend and{" "}
            <a href="https://tailwindcss.com">Tailwind CSS</a> for styling.
          </p>
          <div className="flex justify-between items-center py-16">
            <div className="w-full sm:w-1/2">
              <img
                src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/browser.svg"
                alt="browser"
                className="mx-auto sm:m-0"
              />
            </div>
            <div className="w-1/2 hidden sm:flex justify-end">
              <img
                src="https://res.cloudinary.com/dqzxpn5db/image/upload/v1554258271/andremadarang.com/mobile.svg"
                alt="mobile"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-hidden">
          <div className="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative" id="projectsScroll">
            <h2 className="font-bold mb-6">
              Here are some projects I've worked on:
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
              <div style={{ color: '#8600c8', fontSize: '30px',}}><HiIcons.HiBadgeCheck /></div>  
                <div className="ml-2"><div className="mb-1">Laravel Leave-Application App</div>
                <div className="text-base text-gray-600">
                  A Leave-Application App built with Laravel. Which enables staff of an organisation 
                  apply for leave be it, medical leave or vacation. It includes a dashboard for various departments and
                  personnels (Human Resources, HOD and Supervisors) in a organisation. where each personnel or department is involved in the 
                  stages to approval. {" "}
                  <a href="https://github.com/kachidk/LeaveApp">
                    GitHub Link
                  </a>{' '}
                  or <a href="https://leave-xix.herokuapp.com" target='_blank'>Live Link</a>.
                </div></div>
              </li>
              <li className="flex mb-6">
              <div style={{ color: '#8600c8', fontSize: '30px',}} ><HiIcons.HiBadgeCheck /></div> 
                <div className="ml-2"><div className="mb-1">Driver Booking App</div>
                <div className="text-base text-gray-600">
                  A driver booking system that lets users place bookings for
                  drivers within an organisation. An admin can also oversee all booking and manage
                  everything accordingly.{" "}
                  <a href="https://github.com/kachidk/DriverApp">
                    GitHub Link
                  </a>{' '}or 
                  <a href="https://driver-xix.herokuapp.com" target='_blank'>Live Link</a>.
                </div></div>
              </li>
              <li className="flex mb-6">
              <div style={{ color: '#8600c8', fontSize: '30px',}} ><HiIcons.HiBadgeCheck /></div>
              <div className="ml-2"><div className="mb-1">React Portfolio WebSite</div>
                <div className="text-base text-gray-600">
                  A modern portfolio website built with React.js and Tailwind.{" "}
                  <a href="https://github.com/kachidk/Resume">
                    GitHub Link
                  </a>{" "}
                  or{" "}
                  <a href="https://victor-xix.herokuapp.com">
                    Live Link
                  </a>
                  .
                </div></div>
                
              </li>
              <li className="flex mb-6">
              <div style={{ color: '#8600c8', fontSize: '30px',}} ><HiIcons.HiBadgeCheck /></div>   
                <div className="ml-2"><div className="mb-1">Dracko CSS</div>
                <div className="text-base text-gray-600">
                  A light-weight CSS framework. Initially built just for spacing, more features are to be added in the future. It started 
                  out as a minor project which is fast becoming a huge breakthrough.{" "}
                  <a href="https://github.com/kachidk/dracko-css" target='_blank'>
                    GitHub Link
                  </a>.
                </div></div>
              </li>
              <li className="flex mb-6">
              <div style={{ color: '#8600c8', fontSize: '30px',}}><HiIcons.HiBadgeCheck /></div>  
                <div className="ml-2"><div className="mb-1">Traditional Resume</div>
                <div className="text-base text-gray-600">
                  A traditional resume built with React.js and Tailwind,{" "}
                  <a href="/resume" className="">
                    click here for HTML version
                  </a>
                  , or{" "}
                  <a href="#">
                    here for PDF version
                  </a>
                </div></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-hidden">
          <div className="get-to-know-me container-inner mx-auto text-xl border-gray-500 border-b pb-16 mb-16 relative">
            <h2 className="font-bold mb-6">Get to know me:</h2>
            <div
              className="absolute left-0"
              style={{ top: "50px", transform: "translateX(-100%)", }}
            >
              <svg width="170px" height="170px">
                <use xlinkHref="#dots-triangle"></use>
              </svg>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQEsSH-HF4xeYw/profile-displayphoto-shrink_200_200/0/1606828105402?e=1615420800&v=beta&t=0Ek81IBoRBDUU9O7aPeVRof2rPJOW06pDYNp7EAW1tY"
                  alt="avatar"
                  className="w-32 h-32 rounded-full mb-8 lg:mb-0"
                />
              </div>
              <div className="flex-1 text-lg sm:text-xl ml-6">
                I had to throw in a picture of myself somewhere on this page. If
                you are interested in my origin story and how I got into
                computers &amp; programming, watch the video below.
              </div>
            </div>
            <div className="text-center text-2xl">Video coming soon...</div>
          </div>
        </div>

        <div className="contact-me container-inner mx-auto text-xl pb-4 mb-4" id="contactScroll">
          <h2 className="font-bold mb-6">Contact me:</h2>
          <div className="text-lg sm:text-xl mb-16">
            If you’re looking to get in contact with me for business inquiries
            or if you have a question, feel free to{" "}
            <a href="mailto:nwangumav@gmail.com">email me</a>. I’ll try to
            respond as soon as I can.
          </div>
        </div>

        
       <FooterTopSvg /> 
       
        <footer className="bg-background-purple1 text-white"><div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-8"><div className="mb-8 sm:mb-0">Copyright 2020. All rights reserved.</div><ul className="flex items-center space-x-8"><li><a href="mailto:nwangumav@gmail.com" className="text-white hover:text-gray-400"><MailSvg /></a></li><li><a href="https://github.com/kachidk" target="_blank" className="text-white hover:text-gray-400"><GithubSvg /> </a></li><li><a href="#" target="_blank" className="text-white hover:text-gray-400"><CodepenSvg /></a></li></ul></div></footer>
      </div>
        
     <div style={{ display: "none" }}><DotsTriangle /></div>
    </Abc.ContentWrapper>
  );
};

export default Testing;
