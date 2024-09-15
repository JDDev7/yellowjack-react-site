import React from 'react';

type Props = {
  children: React.ReactNode;
  onViewChange: () => void;
};

const ActionButton = ({ children, onViewChange }: Props) => {
  const handleClick = () => {
    onViewChange();
  };

  return (
    <button className="action-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ActionButton;