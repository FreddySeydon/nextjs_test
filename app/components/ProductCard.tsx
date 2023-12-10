import React from 'react'
import AddToCart from './AddToCart'
// import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-teal-300 text-white text-xl hover:bg-teal-500 cursor-pointer'>
      <AddToCart />
    </div>
  )
}

export default ProductCard
