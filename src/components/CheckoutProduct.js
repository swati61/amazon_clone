import React from 'react';
import '../css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = (props) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,
        })
    }

    return (
        <div className="checkout__product">
            <img className="checkout__product__img" src={props.image} alt={props.title}/>            
            <div className="checkout__product__info">
                <p className="checkout__product__title">{props.title}</p>
                <p className="checkout__product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkout__product__rating">
                    {Array(props.rating).fill().map(() => (
                        <p>🌟</p>
                    ))}                    
                </div>
                <button onClick={removeFromBasket}>Remove to Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;