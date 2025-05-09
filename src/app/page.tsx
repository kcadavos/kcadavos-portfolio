
import HeaderComponent from "./components/HeaderComponent";
import AboutMe from "./components/AboutMe";
import ItineraIODark from "./components/ItineraIODark";
import Hackaton from "./components/Hackaton";
import Contact from "./components/Contact";

export default function Home() {
  return (
  <div>
    <HeaderComponent/>
    <AboutMe/>
    <ItineraIODark/>
    <Hackaton/>
    <Contact/>
  </div>
  );
}
