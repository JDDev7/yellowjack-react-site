import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import YellowJackMap from '@/assets/map.webp';
import ActionButton from '@/components/ActionButton';
import Eventos from '@/scenes/eventos';
import { motion } from 'framer-motion';
import { slowTransition } from '@/shared/animations';
// The YellowJackAddressView component
const YellowJackAddressView = () => {
    // State to keep track of the current view
    const [currentView, setCurrentView] = useState('default');
    return (_jsxs("div", { children: [currentView === 'default' && (_jsxs("div", { className: 'yellowjack-address-container', children: [_jsxs(motion.div, { ...slowTransition, className: 'yellowjack-address-title', children: [_jsx("h1", { children: "Encuentranos en:" }), _jsx(MapPinIcon, { className: 'yellowjack-address-icon' })] }), _jsx(motion.div, { ...slowTransition, className: 'yellowjack-address-text', children: _jsx("p", { children: "Panorama Drive, Oeste, Sandy Shores, en el cruce hacia la Ruta 68" }) }), _jsx(motion.div, { ...slowTransition, className: 'map-image-container', children: _jsx("img", { src: YellowJackMap, alt: "yellow-jack-map" }) }), _jsx(motion.div, { ...slowTransition, className: 'yellowjack-address-button', children: _jsx(ActionButton, { children: "Volver a Eventos", onViewChange: () => setCurrentView('eventos') }) })] })), currentView === 'eventos' && (_jsx(Eventos, { setSelectedPage: () => { } }))] }));
};
export default YellowJackAddressView;
