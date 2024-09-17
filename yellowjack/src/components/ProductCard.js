import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { appearFromBottom } from '@/shared/animations';
const ProductCard = ({ productName, productDescription, productPrice, productImg }) => {
    return (_jsxs(motion.div, { ...appearFromBottom, className: 'product-card', children: [_jsx("div", { className: 'product-img-container', children: _jsx("img", { src: productImg, alt: productName, className: 'product-img' }) }), _jsxs("div", { className: 'product-info', children: [_jsx("h3", { children: productName }), _jsx("p", { children: productDescription })] }), _jsx("div", { className: 'product-price', children: _jsxs("p", { children: ["$", productPrice] }) })] }));
};
export default ProductCard;
