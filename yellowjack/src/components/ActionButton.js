import { jsx as _jsx } from "react/jsx-runtime";
const ActionButton = ({ children, onViewChange }) => {
    const handleClick = () => {
        onViewChange();
    };
    return (_jsx("button", { className: "action-button", onClick: handleClick, children: children }));
};
export default ActionButton;
