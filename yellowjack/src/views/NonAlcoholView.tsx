import ProductCard from '@/components/ProductCard'
import React from 'react'

import * as products from '@/shared/products'


const NonAlcoholView = () => {
  return (
    <div className='non-alcohol-view'>

      <ProductCard productImg= {products.nonAlcohol.agua.img} productName= {products.nonAlcohol.agua.name} productDescription= {products.nonAlcohol.agua.description} productPrice= {products.nonAlcohol.agua.price}/>
      <ProductCard productImg= {products.nonAlcohol.cafe.img} productName= {products.nonAlcohol.cafe.name} productDescription= {products.nonAlcohol.cafe.description} productPrice= {products.nonAlcohol.cafe.price} />
      <ProductCard productImg= {products.nonAlcohol.refrescos.img} productName= {products.nonAlcohol.refrescos.name} productDescription= {products.nonAlcohol.refrescos.description} productPrice= {products.nonAlcohol.refrescos.price} />
      </div>
  )
  }

export default NonAlcoholView