import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from '@/components/ProductCard';
import * as products from '@/shared/products';
const Comida = () => {
    return (_jsxs("div", { className: 'food-view', children: [_jsx(ProductCard, { productImg: products.comida.alitas.img, productName: products.comida.alitas.name, productDescription: products.comida.alitas.description, productPrice: products.comida.alitas.price }), _jsx(ProductCard, { productImg: products.comida.chuleton.img, productName: products.comida.chuleton.name, productDescription: products.comida.chuleton.description, productPrice: products.comida.chuleton.price }), _jsx(ProductCard, { productImg: products.comida.nachos.img, productName: products.comida.nachos.name, productDescription: products.comida.nachos.description, productPrice: products.comida.nachos.price }), _jsx(ProductCard, { productImg: products.comida.patatas.img, productName: products.comida.patatas.name, productDescription: products.comida.patatas.description, productPrice: products.comida.patatas.price })] }));
};
export default Comida;
