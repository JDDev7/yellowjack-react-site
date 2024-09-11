import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Tab = {
  id: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelect: (tabId: string) => void;
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState(selectedTabId);

  const handleTabSelect = (tabId: string) => {
    setSelectedTab(tabId);
    onTabSelect(tabId);
  };

  return (
    <div className="tabs-container">
    <div className="tabs">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          className={`tab ${selectedTab === tab.id ? 'selected' : ''}  tab-underline`}
          onClick={() => handleTabSelect(tab.id)}
        >
          {tab.label}
          {selectedTab === tab.id && (
            <motion.div
              className="underline"
            />
          )}
        </motion.button>
      ))}
    </div>
  </div>
  );
};

export default Tabs;