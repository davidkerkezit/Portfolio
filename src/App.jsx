import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Wedding from "./components/wedding/Wedding";
import ResidentDJ from "./components/residentdj/ResidentDJ";
import Packs from "./components/packs/Packs";
import Reviews from "./components/reviews/Reviews";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <Nav />
      <About />
      <ResidentDJ />
      <Wedding />
      <Packs />
      <Reviews />
      <Contact />
    </>
  );
}

export default App;
