import ProductCard from '@/components/ProductCard'
import React from 'react'

import * as products from '@/shared/products'


const Comida = () => {
  return (
    <div className='food-view'>

      <ProductCard productImg= {products.comida.alitas.img} productName= {products.comida.alitas.name} productDescription= {products.comida.alitas.description} productPrice= {products.comida.alitas.price} />
      <ProductCard productImg= {products.comida.chuleton.img} productName= {products.comida.chuleton.name} productDescription= {products.comida.chuleton.description} productPrice= {products.comida.chuleton.price} />
      <ProductCard productImg= {products.comida.nachos.img} productName= {products.comida.nachos.name} productDescription= {products.comida.nachos.description} productPrice= {products.comida.nachos.price} />
      <ProductCard productImg= {products.comida.patatas.img} productName= {products.comida.patatas.name} productDescription= {products.comida.patatas.description} productPrice= {products.comida.patatas.price} />
      </div>
  )
  }

export default Comida