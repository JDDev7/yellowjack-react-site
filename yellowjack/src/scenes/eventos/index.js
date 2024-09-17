import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ActionButton from '@/components/ActionButton';
import { appearFromBottom, appearFromTop } from '@/shared/animations';
import { SelectedPage } from '@/shared/types';
import YellowJackAddressView from '@/views/YellowJackAddressView';
import { motion } from 'framer-motion';
import { useState } from 'react';
const Eventos = ({ setSelectedPage }) => {
    const [currentView, setCurrentView] = useState('default');
    return (_jsxs("section", { id: "eventos", children: [currentView === 'default' && (_jsxs(motion.div, { className: 'eventos-container', onViewportEnter: () => setSelectedPage(SelectedPage.OurEvents), children: [_jsx(motion.div, { ...appearFromTop, className: 'eventos-imgs', children: _jsx("img", { src: "src/assets/eventos.webp", alt: "imagen-eventos" }) }), _jsxs(motion.div, { ...appearFromBottom, className: 'eventos-text', children: [_jsxs("h2", { className: 'eventos-title', children: [_jsx("span", { className: 'span-text-color', children: "Nuestros" }), " Eventos"] }), _jsx("p", { className: 'eventos-description', children: "Nuestros eventos siempre est\u00E1n pensados para que las personas se lo pasen en grande. Desde rutas moteras, triatlones, concursos de pulsos... Nunca te aburrir\u00E1s. Apoyados por el resto de locales de la ciudad, nos encargamos de que la gente que acude est\u00E9 cuidada. Copas, refrescos, comida, todo lo que puedas necesitar. Siempre solemos tener algun premio que sortear o utilizar en nuestros concursos,\u00A1Desde motos, premios en metalico, y m\u00E1s!" }), _jsx(ActionButton, { children: "\u00A1Ven al Yellow Jack!", onViewChange: () => setCurrentView('yellowJackAddress') })] })] })), currentView === 'yellowJackAddress' && (_jsx(YellowJackAddressView, {}))] }));
};
export default Eventos;
