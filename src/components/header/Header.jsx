import ME from "../../assets/me1.png";

function Header() {
  return (
    <header id="home">
      <div className="container items-center gap-4 relative flex flex-col xl:gap-6  ">
        <h5>Hello I'm</h5>
        <h1 className="font-popins animate-slideInFromTop">David Kerkez</h1>
        <h5 className="text-light">DJ / Music Producer</h5>
        <a href="#contact" className="btn">
          Book Now
        </a>
        <div className="bg-gradient-to-b from-primary to-transparent w-[50%] h-[18rem] rounded-t-full mt-4 animate-slideInFromBottom sm:w-[40%]  md:w-[30%] md:h-[22rem] lg:w-[25%] xl:w-[20%] xl:h-[26rem] ">
          <img src={ME} alt="me" className=" h-full object-cover  " />
        </div>
        <a
          href="#contact"
          className="absolute cursor-pointer vertical right-1 bottom-2 hidden md:block "
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
