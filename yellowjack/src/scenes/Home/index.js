import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import useMediaQuery from '@/hooks/useMediaQuery';
import { appearFromLeft, appearFromRight } from "@/shared/animations";
import logo from "@/assets/logo.webp";
import { SelectedPage } from "@/shared/types";
import header from "@/assets/header.webp";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";
const Home = ({ setSelectedPage }) => {
    return (_jsx("section", { id: "inicio", className: "home-section", children: _jsxs(motion.div, { className: "hero-container", onViewportEnter: () => setSelectedPage(SelectedPage.Home), children: [_jsxs(motion.div, { ...appearFromLeft, className: "left-side", children: [_jsx("img", { src: logo, alt: "logo-hero-section", className: "logo-hero" }), _jsxs("div", { className: "blackboard", children: [_jsx("div", { className: "title-container", children: _jsxs("h1", { children: [_jsx("span", { className: "span-text-color", children: "Prueba" }), " nuestro chulet\u00F3n de 1kg"] }) }), _jsx("div", { className: "hero-text-container", children: _jsx("p", { children: "La octava maravilla de Sandy Shores. Un plato que no podr\u00E1s encontrar en ninguna otra parte de la isla. Hecho al punto que te guste, con salsa, especias de la casa y guarnici\u00F3n a elecci\u00F3n." }) })] })] }), _jsx(motion.div, { className: "right-side", ...appearFromRight, children: _jsx("img", { src: header, alt: "chuleton-header" }) })] }) }));
};
export default Home;
