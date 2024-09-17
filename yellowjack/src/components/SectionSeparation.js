import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SectionSeparation = ({ title, titleSpan }) => {
    const renderTitle = title || ''; // Use an empty string if title is undefined
    return (_jsx("div", { className: "section-separation", children: _jsxs("h1", { className: "section-separation-title", children: [_jsx("span", { className: "separation-span-title", children: titleSpan }), `${renderTitle}`] }) }));
};
export default SectionSeparation;
