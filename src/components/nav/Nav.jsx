import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav className="fixed left-0 right-0 mx-auto gap-1 w-max bottom-8 p-2 bg-black/5  rounded-[10rem]  justify-center z-20 backdrop-blur-lg hidden md:flex   ">
      <a
        href="#home"
        onClick={() => setActive("#")}
        className={
          active === "#" ? "nav_icons bg-primary text-white" : "nav_icons"
        }
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={
          active === "about" ? "nav_icons bg-primary text-white" : "nav_icons"
        }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#packs"
        onClick={() => setActive("packs")}
        className={
          active === "packs" ? "nav_icons bg-primary text-white" : "nav_icons"
        }
      >
        <GoPackage />
      </a>
      <a
        href="#reviews"
        onClick={() => setActive("reviews")}
        className={
          active === "reviews" ? "nav_icons bg-primary text-white" : "nav_icons"
        }
      >
        <FaRegStar />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={
          active === "contact" ? "nav_icons bg-primary text-white" : "nav_icons"
        }
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
