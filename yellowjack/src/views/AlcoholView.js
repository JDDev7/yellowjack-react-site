import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from '@/components/ProductCard';
import * as products from '@/shared/products';
const AlcoholView = () => {
    return (_jsxs("div", { className: 'view', children: [_jsx(ProductCard, { productImg: products.alcohol.botellaCerveza.img, productName: products.alcohol.botellaCerveza.name, productDescription: products.alcohol.botellaCerveza.description, productPrice: products.alcohol.botellaCerveza.price }), _jsx(ProductCard, { productImg: products.alcohol.jarraCerveza.img, productName: products.alcohol.jarraCerveza.name, productDescription: products.alcohol.jarraCerveza.description, productPrice: products.alcohol.jarraCerveza.price }), _jsx(ProductCard, { productImg: products.alcohol.mojito.img, productName: products.alcohol.mojito.name, productDescription: products.alcohol.mojito.description, productPrice: products.alcohol.mojito.price }), _jsx(ProductCard, { productImg: products.alcohol.ronCola.img, productName: products.alcohol.ronCola.name, productDescription: products.alcohol.ronCola.description, productPrice: products.alcohol.ronCola.price }), _jsx(ProductCard, { productImg: products.alcohol.whiskyCola.img, productName: products.alcohol.whiskyCola.name, productDescription: products.alcohol.whiskyCola.description, productPrice: products.alcohol.whiskyCola.price }), _jsx(ProductCard, { productImg: products.alcohol.whisky.img, productName: products.alcohol.whisky.name, productDescription: products.alcohol.whisky.description, productPrice: products.alcohol.whisky.price })] }));
};
export default AlcoholView;
