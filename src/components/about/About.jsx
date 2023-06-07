import React from "react";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";
import { FiMusic } from "react-icons/fi";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container grid text-start grid-cols-5 ">
        <div className="col-span-2 bg-primary-variant rounded-full w-[80%] aspect-square relative border-4 border-solid border-primary hidden md:inline">
          <img
            src={ME}
            alt="Me"
            className="absolute bg-primary rounded-full w-full aspect-square transform rotate-0 duration-200 shadow-xl  md:animate-cdAnimation object-cover "
          />
          <div className="absolute bg-bg border-2 border-solid border-primary z-10 w-[20%] items-center  rounded-full aspect-square m-auto left-0 right-0 top-0 bottom-0 " />
        </div>
        <div className="flex flex-col gap-4 justify-between col-span-5 items-center md:w-[90%] md:mx-auto md:gap-7 md:col-span-3 ">
          <div className="flex flex-col w-full gap-1 md:flex-row ">
            <article>
              <FaAward className="text-primary" />
              <h4>Experience</h4>
              <small className="text-light">11+ Years Working</small>
            </article>
            <article>
              <SiDiscogs className="text-primary" />
              <h4>Clubs</h4>
              <small className="text-light">300+ Worldwide</small>
            </article>
            <article>
              <FiMusic className="text-primary" />
              <h4>Big Events</h4>
              <small className="text-light">10+ Festivals </small>
            </article>
          </div>
          <p className="text-base font-light text-justify">
            Hi, my name is David Kerkez. I come from Novi Sad, Serbia. I am 28
            years old. I work as a DJ since 2010. I worked in clubs from Serbia,
            Turkey and Greece.I also work at festivals and wedding parties. I
            shared the stage with many famous singers and DJs.
          </p>
          <a
            className="btn "
            href="https://www.facebook.com/djdavidkerkez/"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
