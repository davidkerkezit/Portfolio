import React from "react";
import track1 from "../../assets/Pack/50 Cent FT. Olivia - Candy Shop [Silque Remix] .mp3";
import track2 from "../../assets/Pack/Beyonce - Break My Soul [Jolyon Petch Remix] [Clean] 1A 123 [EdmMashup.com].mp3";
import track3 from "../../assets/Pack/Fedde Le Grand - Shake That Ass [Kutt Edit] [QH] [Clean] 2A 120 [EdmMashup.com].mp3";
import track4 from "../../assets/Pack/Ferrari VS. World, Hold On - James Hype VS. Fisher (L00K ARND MASHUP) [EdmMashup.com].mp3";
import track5 from "../../assets/Pack/Jack Back x GUZ x Ferreck Dawn - I’ve Been Missing You (Extended Mix) [www.slider.kz].mp3";
import banner1 from "../../assets/Pack/track1banner.jpg";
import banner2 from "../../assets/Pack/track2banner.jpeg";
import banner3 from "../../assets/Pack/track3banner.jpg";
import banner4 from "../../assets/Pack/track4banner.jpg";
import banner5 from "../../assets/Pack/track5banner.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import ReactAudioPlayer from "react-audio-player";

const TRACKS = [
  {
    id: 1,
    banner: banner1,
    name: "50 Cent FT. Olivia - Candy Shop [Silque Remix]",
    src: track1,
  },
  {
    id: 2,
    banner: banner2,
    name: "Beyonce - Break My Soul [Jolyon Petch Remix] ",
    src: track2,
  },
  {
    id: 3,
    banner: banner3,
    name: "Fedde Le Grand - Shake That Ass [Kutt Edit]",
    src: track3,
  },
  {
    id: 4,
    banner: banner4,
    name: "Ferrari VS. World, Hold On - James Hype VS. Fisher (L00K ARND MASHUP)",
    src: track4,
  },
  {
    id: 5,
    banner: banner5,
    name: "Jack Back x GUZ x Ferreck Dawn - I’ve Been Missing You (Extended Mix)",
    src: track5,
  },
];

function Services() {
  return (
    <div id="packs">
      <h5>Gift For DJs</h5>
      <h2>DJ David Kerkez Free Pack</h2>
      <div className="container flex flex-col gap-4 bg-[#2E0B35] border-[#951033]  border-solid border-[1px]  p-4 rounded-xl ">
        {TRACKS.map((track) => (
          <div
            key={track.id}
            className="flex flex-col gap-3 bg-black/30 py-2 px-4 justify-center items-center  border-white/20  border-solid border-[1px] rounded-xl duration-200 hover:bg-black/20 lg-grid  lg:grid-cols-10 lg:gap-3"
          >
            <div className="flex items-center gap-8 justify-center md:justify-start col-span-4 xl:col-span-5">
              <img
                src={track.banner}
                alt="banner"
                className="w-[10%] rounded-sm hidden md:block"
              />
              <h5 className="bg-transparent text-white">{track.name}</h5>
            </div>

            <ReactAudioPlayer
              src={track.src}
              controls
              className="w-full h-[2rem]  xl:col-span-4 "
              controlsList={"nodownload"}
            />
            <a
              href={track.src}
              download
              target="_blank"
              className="w-max px-3 text-base flex mx-auto  items-center gap-2 text-white border-[#951033]  border-solid border-[1px] text-center rounded-md   hover:text-bg hover:border-white lg:py-1 lg:col-span-1"
              rel="noreferrer"
            >
              <span className="lg:hidden xl:block font-text ">Download</span>{" "}
              <AiOutlineDownload className=" hidden xl:hidden" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
