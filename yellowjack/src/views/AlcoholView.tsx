import ProductCard from '@/components/ProductCard'
import React from 'react'

import * as products from '@/shared/products'



const AlcoholView = () => {
  return (
    <div className='view'>
      <ProductCard productImg={products.alcohol.botellaCerveza.img} productName={products.alcohol.botellaCerveza.name} productDescription={products.alcohol.botellaCerveza.description} productPrice={products.alcohol.botellaCerveza.price}/>
      <ProductCard productImg={products.alcohol.jarraCerveza.img} productName={products.alcohol.jarraCerveza.name} productDescription={products.alcohol.jarraCerveza.description} productPrice={products.alcohol.jarraCerveza.price}/>
      <ProductCard productImg={products.alcohol.mojito.img} productName={products.alcohol.mojito.name} productDescription={products.alcohol.mojito.description} productPrice={products.alcohol.mojito.price}/>
      <ProductCard productImg={products.alcohol.ronCola.img} productName={products.alcohol.ronCola.name} productDescription={products.alcohol.ronCola.description} productPrice={products.alcohol.ronCola.price}/>
      <ProductCard productImg={products.alcohol.whiskyCola.img} productName={products.alcohol.whiskyCola.name} productDescription={products.alcohol.whiskyCola.description} productPrice={products.alcohol.whiskyCola.price}/>
      <ProductCard productImg={products.alcohol.whisky.img} productName={products.alcohol.whisky.name} productDescription={products.alcohol.whisky.description} productPrice={products.alcohol.whisky.price}/>    
      </div>
  )
}

export default AlcoholView