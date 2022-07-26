import React, {useState} from "react";

export default function Home(props) {
    const [counter, setCounter] = useState(1)
    // console.log("Home", props)
  return (
    <div>
        <h1>Home Component</h1>
        <div className="items d-flex">
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
                <button onClick={()=> {props.addToCartHandler({id: counter, productName: 'IPhone 12', src: 'https://www.techgenesis.net/wp-content/uploads/2021/04/iphone-12-pro-max.jpg', price: 1000}); setCounter(counter + 1)}}>Add to cart</button>
                {/* <button onClick={()=> props.removeToCartHandler(counter)}>Remove from cart</button> */}
                </div>
            </div>
        </div>
    </div>
  );
}
