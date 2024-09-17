import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from '@/components/ProductCard';
import * as products from '@/shared/products';
const NonAlcoholView = () => {
    return (_jsxs("div", { className: 'non-alcohol-view', children: [_jsx(ProductCard, { productImg: products.nonAlcohol.agua.img, productName: products.nonAlcohol.agua.name, productDescription: products.nonAlcohol.agua.description, productPrice: products.nonAlcohol.agua.price }), _jsx(ProductCard, { productImg: products.nonAlcohol.cafe.img, productName: products.nonAlcohol.cafe.name, productDescription: products.nonAlcohol.cafe.description, productPrice: products.nonAlcohol.cafe.price }), _jsx(ProductCard, { productImg: products.nonAlcohol.refrescos.img, productName: products.nonAlcohol.refrescos.name, productDescription: products.nonAlcohol.refrescos.description, productPrice: products.nonAlcohol.refrescos.price })] }));
};
export default NonAlcoholView;
