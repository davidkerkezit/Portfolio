import React from "react";

const Menu = () => {
  return (
    <div className="p-2 flex justify-between border-solid border-b-[1px] md:justify-center border-black/10 bg-[rgba(195,20,49,0.25)] backdrop-blur-md items-center ">
      <p className="bg-[#A11033] px-2 font-headers  ">DK</p>

      <button
        id="menu-btn"
        class="z-30 block md:hidden focus:outline-none hamburger"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default Menu;
