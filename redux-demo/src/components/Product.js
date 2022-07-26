import React from 'react'

export default function Product({data, addToCartHandler, removeToCartHandler}) {
  return (
    <div className="cart-wrapper">
        <div className="img-wrapper item">
        <img
            src="https://www.techgenesis.net/wp-content/uploads/2021/04/iphone-12-pro-max.jpg"
            alt="iphone12"
        />
        </div>
        <div className="text-wrapper item">
        <span>I-Phone 12</span>
        <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
        <button onClick={()=> addToCartHandler({id: data.id, productName: data.title, src: data.image, price: data.price}) }>Add to cart</button>
        <button onClick={()=> removeToCartHandler(data.id)}>Remove from cart</button>
        </div>
    </div>
  )
}
