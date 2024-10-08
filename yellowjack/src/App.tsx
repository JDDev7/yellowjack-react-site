import Navbar from "@/scenes/navbar"
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/Home";
import { useEffect, useState } from "react";
import SectionSeparation from "./components/SectionSeparation";
import Eventos from "@/scenes/eventos";
import NuestraCarta from "./scenes/nuestraCarta";
import Contacto from "@/scenes/contacto";
import Footer from "@/components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Navbar>
     <Home setSelectedPage={setSelectedPage}></Home>
     <SectionSeparation titleSpan="Nuestra" title=" Carta"/>
     <NuestraCarta setSelectedPage={setSelectedPage}></NuestraCarta>
     <SectionSeparation titleSpan="E" title="ventos"/>
     <Eventos setSelectedPage={setSelectedPage}></Eventos>
     <SectionSeparation titleSpan="C" title="ontacto"></SectionSeparation>
     <Contacto setSelectedPage={setSelectedPage}></Contacto>
     <Footer></Footer>
    </>
  )
}

export default App
