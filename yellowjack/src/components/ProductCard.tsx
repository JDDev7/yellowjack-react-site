import React from 'react'
import { motion } from 'framer-motion'
import { appearFromBottom } from '@/shared/animations';


type Props = {
  productImg: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

const ProductCard = ({ productName, productDescription, productPrice, productImg }: Props) => {
  return (
    <motion.div {...appearFromBottom} className='product-card'>
      <div className='product-img-container'>
        <img src={productImg} alt={productName} className='product-img' />
      </div>

      <div className='product-info'>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
      </div>
      <div className='product-price'>
        <p>${productPrice}</p>
      </div>
    </motion.div>
  )
}

export default ProductCard