import React from "react";
import wedding_img from "../../assets/wedding.jpg";

function Exprerience() {
  return (
    <section id="experience">
      <h5>Something Completely Different</h5>
      <h2>Weeding DJ</h2>
      <div className=" w-[80%] sm:max-w-[400px] xl:max-w-[50%] md:max-w-[600px]  my-5 mx-auto flex relative justify-between bg-bg-variant border-lg border-2 rounded-3xl border-solid border-primary md:w-[60%]">
        <div className="flex flex-col text-center p-8 gap-4 w-full z-10 shadow-xl bg-black/50 rounded-3xl">
          <h3>Let Your Wedding Be Different</h3>
          <p className="text-sm sm:text-md md:text-base ">
            Our three-year experience in working on weddings can guarantee you a
            night to remember.An excellent combination of lighting and music
            will make the dancefloor always full of energy.Many satisfied
            newlyweds, many recommendations are a guarantee that we are an
            excellent choice for your wedding.
          </p>
        </div>
        <img
          src={wedding_img}
          alt=""
          className="absolute w-full h-full border-0 border-lg rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Exprerience;
