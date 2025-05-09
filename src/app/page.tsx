import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import ItineraIo from "./components/ItineraIo";
import AboutMe from "./components/AboutMe";
import ItineraIODark from "./components/ItineraIODark";
import Hackaton from "./components/Hackaton";

export default function Home() {
  return (
  <div>
    <HeaderComponent/>
    <AboutMe/>
    <ItineraIODark/>
    <Hackaton/>
  </div>
  );
}
