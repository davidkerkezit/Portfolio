import React from "react";
import Miracle from "../../assets/Clubs/miracle.jpg";
import Plus from "../../assets/Clubs/plus.jpg";
import Cristal from "../../assets/Clubs/cristal.jpg";
import Magacin from "../../assets/Clubs/magacin.jpg";
import Kucerda from "../../assets/Clubs/kucerda.jpg";
import Play from "../../assets/Clubs/play.jpg";
import TUR from "../../assets/Flags/tr.svg";
import GRE from "../../assets/Flags/gr.svg";
import RS from "../../assets/Flags/rs.svg";

function ResidentDJ() {
  const CLUBS = [
    {
      id: 1,
      name: "MIRACLE Beach Bar",
      image: Miracle,
      city: "Kusadasi",
      flag: TUR,
      href: "https://www.instagram.com/miraclekusadasi/",
    },
    {
      id: 2,
      name: "Club PLUS",
      image: Plus,
      city: "Zakyntos",
      flag: GRE,
      href: "https://www.tripadvisor.com/Attraction_Review-g658915-d6681041-Reviews-Plus_Club-Laganas_Zakynthos_Ionian_Islands.html",
    },
    {
      id: 3,
      name: "River Club CRISTAL",
      image: Cristal,
      city: "Novi Sad",
      flag: RS,
      href: "https://www.facebook.com/splavCRISTAL",
    },
    {
      id: 4,
      name: "Club MAGACIN",
      image: Magacin,
      city: "Novi Sad",
      flag: RS,
      href: "https://www.facebook.com/magacin.ns",
    },
    {
      id: 5,
      name: "Club KUCERDA",
      image: Kucerda,
      city: "Novi Sad",
      flag: RS,
      href: "https://www.facebook.com/noxsanctus.kucerda",
    },
    {
      id: 6,
      name: "Club PLAY",
      image: Play,
      city: "Becej",
      flag: RS,
      href: "https://www.instagram.com/playclub.becej/",
    },
  ];
  return (
    <section>
      <h5>Where I Performed</h5>
      <h2>Resident DJ</h2>
      <div className="container grid grid-col-1 gap-6 overflow-hidden  sm:grid-cols-2 md:grid-cols-3  ">
        {CLUBS.map((club) => (
          <div
            key={club.id}
            className="bg-[#2E0B35] border-2 border-solid border-[#951033] rounded-xl flex w-full items-center flex-col gap-4 duration-200 group"
          >
            <img
              src={club.image}
              alt="nightclub"
              className="grayscale-0 rounded-t-xl border-b-2 border-solid border-[#951033] sm:duration-200 sm:grayscale-[90%] sm:group-hover:grayscale-[0%]"
            />
            <div className="flex flex-col justify-center items-center gap-2">
              <h3>{club.name}</h3>
              <small>{club.city}</small>
              <img
                src={club.flag}
                alt="flag"
                className="w-[7%] scale-x-150 scale-y-100 lg:w-[5%] "
              />
            </div>
            <a
              href={club.href}
              className=" btn mb-8"
              target="_blank"
              rel="noreferrer"
            >
              Club Page
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResidentDJ;
