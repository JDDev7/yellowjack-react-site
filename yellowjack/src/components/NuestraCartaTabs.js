import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
const Tabs = ({ tabs, selectedTabId, onTabSelect }) => {
    const [selectedTab, setSelectedTab] = useState(selectedTabId);
    const handleTabSelect = (tabId) => {
        setSelectedTab(tabId);
        onTabSelect(tabId);
    };
    return (_jsx("div", { className: "tabs-container", children: _jsx("div", { className: "tabs", children: tabs.map((tab) => (_jsxs(motion.button, { className: `tab ${selectedTab === tab.id ? 'selected' : ''}  tab-underline`, onClick: () => handleTabSelect(tab.id), children: [tab.label, selectedTab === tab.id && (_jsx(motion.div, { className: "underline" }))] }, tab.id))) }) }));
};
export default Tabs;
