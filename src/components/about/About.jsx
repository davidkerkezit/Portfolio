import React from "react";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";
import { FiMusic } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function About() {
  const [Experience, ExperienceInView] = useInView({
    treshold: 0.5,
  });
  const [Clubs, ClubsInView] = useInView({
    treshold: 0.5,
  });
  const [Festivals, FestivalsInView] = useInView({
    treshold: 0.5,
  });
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container mt-10 mb-10 grid text-start grid-cols-5 ">
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
            <motion.article
              ref={Experience}
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <FaAward className="text-white" />
              <h4>Experience</h4>
              <div className="w-[7rem]  flex justify-between items-center">
                <small className="text-white    ">
                  {" "}
                  {ExperienceInView ? (
                    <CountUp
                      start={0}
                      end={11}
                      duration={3}
                      delay={0.6}
                      className="text-2xl font-bold  "
                    />
                  ) : null}
                </small>
                <small> + Years Working</small>
              </div>
            </motion.article>
            <motion.article
              ref={Clubs}
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <SiDiscogs className="text-white" />
              <h4>Clubs</h4>
              <div className="w-[7rem]  flex justify-between items-center">
                <small className="text-white   ">
                  {" "}
                  {ClubsInView ? (
                    <CountUp
                      start={0}
                      end={300}
                      duration={3}
                      delay={0.6}
                      className="text-2xl font-bold"
                    />
                  ) : null}
                </small>
                <small>+ Worldwide</small>
              </div>
            </motion.article>
            <motion.article
              ref={Festivals}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <FiMusic className="text-white" />
              <h4>Big Events</h4>
              <div className="w-[5rem]  flex justify-between items-center">
                <small className="text-white    ">
                  {" "}
                  {FestivalsInView ? (
                    <CountUp
                      start={0}
                      end={11}
                      duration={3}
                      delay={0.6}
                      className="text-2xl font-bold"
                    />
                  ) : null}
                </small>
                <small>+ Festivals</small>
              </div>
            </motion.article>
          </div>
          <p className="text-base font-text text-justify px-2">
            Hi, my name is David Kerkez. I come from Novi Sad, Serbia. I am 28
            years old. I work as a DJ since 2010. I worked in clubs from Serbia,
            Turkey and Greece.I also work at festivals and wedding parties. I
            shared the stage with many famous singers and DJs.
          </p>
          <a
            className="btn uppercase "
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
