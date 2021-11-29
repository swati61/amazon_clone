import React, { useState } from "react";
import "../css/Product.css";
import { useStateValue } from "./StateProvider";

const Product = (props) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
      addProduct: true,
    });
  };

  return (
    <>
      <div className="product" key={`_${props.id}`}>
        <div className="product__info">
          <p className="title">{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="product__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p key={`__${i}`}>🌟</p>
              ))}
          </div>
        </div>
        <img className="product__image" src={props.image} alt={props.title} />
        <div className="addButton">
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    </>
  );
};

export default Product;
