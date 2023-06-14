import React from "react";

const Menu = () => {
  return (
    <div className="p-2 flex justify-between border-solid border-b-[1px] border-white/10">
      <div className="uppercase font-text leading-4">
        <p>DJ David</p>
        <p classNa>Kerkez</p>
      </div>
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
