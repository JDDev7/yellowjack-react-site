import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/Home";
import { useEffect, useState } from "react";
import SectionSeparation from "./components/SectionSeparation";
import Eventos from "@/scenes/eventos";
import NuestraCarta from "./scenes/nuestraCarta";
import Contacto from "@/scenes/contacto";
import Footer from "@/components/Footer";
function App() {
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0)
                setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { isTopOfPage: isTopOfPage, selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Home, { setSelectedPage: setSelectedPage }), _jsx(SectionSeparation, { titleSpan: "Nuestra", title: " Carta" }), _jsx(NuestraCarta, { setSelectedPage: setSelectedPage }), _jsx(SectionSeparation, { titleSpan: "E", title: "ventos" }), _jsx(Eventos, { setSelectedPage: setSelectedPage }), _jsx(SectionSeparation, { titleSpan: "C", title: "ontacto" }), _jsx(Contacto, { setSelectedPage: setSelectedPage }), _jsx(Footer, {})] }));
}
export default App;
