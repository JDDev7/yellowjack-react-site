import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import NuestraCartaTabs from '@/components/NuestraCartaTabs';
import AlcoholView from '@/views/AlcoholView';
import NonAlcoholView from '@/views/NonAlcoholView';
import ComidaView from '@/views/Comida';
const tabs = [
    { id: 'alcohol', label: 'Alcohol' },
    { id: 'nonalcohol', label: 'Sin Alcohol' },
    { id: 'comida', label: 'Comida' },
];
const NuestraCarta = ({ setSelectedPage }) => {
    const [selectedTabId, setSelectedTabId] = React.useState(tabs[0].id);
    let ViewComponent;
    switch (selectedTabId) {
        case 'alcohol':
            ViewComponent = AlcoholView;
            break;
        case 'nonalcohol':
            ViewComponent = NonAlcoholView;
            break;
        case 'comida':
            ViewComponent = ComidaView;
            break;
        default:
            ViewComponent = AlcoholView;
            break;
    }
    const handleTabSelect = (tabId) => {
        setSelectedTabId(tabId);
    };
    return (_jsx("section", { id: "nuestracarta", children: _jsx(motion.div, { className: "our-products-container", onViewportEnter: () => setSelectedPage(SelectedPage.OurProducts), children: _jsxs("div", { className: 'our-products', children: [_jsx(NuestraCartaTabs, { tabs: tabs, selectedTabId: selectedTabId, onTabSelect: handleTabSelect }), ViewComponent && _jsx(ViewComponent, {})] }) }) }));
};
export default NuestraCarta;
