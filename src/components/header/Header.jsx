import ME from "../../assets/me1.png";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <header id="home">
      <div className="container mt-10 items-center   relative flex flex-col xl:gap-6  ">
        <h1 className="font-headers text-3xl leading-3  uppercase animate-slideInFromTop">
          David Kerkez
        </h1>
        <div className=" flex flex-row ml-[10%] justify-start drop-shadow-xl   ">
          <span className="font-text uppercase font-medium mr-2 ">I Am a</span>
          <TypeAnimation
            sequence={[
              " Clubs DJ",
              2000,
              " Weddings DJ",
              2000,
              " Music Producer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className=" uppercase inline-block font-text font-semibold text-[#240b36]  w-[8rem]"
            repeat={Infinity}
          />
        </div>
        <div className="bg-white/70 w-screen absolute top-[12rem] h-[1rem]" />
        <div className="bg-[#940F33] relative group  overflow-hidden z-20 border-solid border-2 border-white  w-[50%] h-[18rem] rounded-[2rem] mt-4 animate-slideInFromBottom sm:w-[40%]  md:w-[30%] md:h-[22rem] lg:w-[25%] xl:w-[20%] xl:h-[26rem] ">
          <a
            href="#contact"
            className="absolute bottom-1 left-0 right-0 mx-auto bg-white/10 z-20 backdrop-blur-md text-white uppercase font-text  text-center border-solid group-hover:border-white/ border-transparent border-y-[1px] "
          >
            Book Now
          </a>
          <img
            src={ME}
            alt="me"
            className=" h-full object-cover group-hover:scale-110 duration-200  "
          />
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
