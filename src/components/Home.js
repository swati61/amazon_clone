import React from "react";
import "../css/Home.css";
import AddedProduct from "./AddedProduct";
import CarouselA from "./Carousel";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const arrImages = [
    "https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61xPJJUCZ0L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71nUkovUJQL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51PL6-WGyML._SX3000_.jpg",
  ];
  const [{ addProduct, basket }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__container">
        <CarouselA images={arrImages} />
        {/*  <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61h+sLbXugL._SX3000_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321234"
            title="Voltas 0.75 Tons 2 Star Window AC (102 EZQ, White)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41pcHlKg+hL._AC_SY200_.jpg"
            rating={5}
            key="1"
          />
          <Product
            id="12321235"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={11.96}
            image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._AC_SR400,600_.jpg"
            rating={4}
            key="2"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321236"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={239.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="3"
          />
          <Product
            id="12321237"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={199.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._AC_SR400,600_.jpg"
            rating={4}
            key="4"
          />
          <Product
            id="12321238"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={98.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="5"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321239"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={239.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="6"
          />
          <Product
            id="12321240"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={199.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._AC_SR400,600_.jpg"
            rating={4}
            key="7"
          />
          <Product
            id="123212351"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={98.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="18"
          />
          <Product
            id="123212352"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={199.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._AC_SR400,600_.jpg"
            rating={4}
            key="19"
          />
          <Product
            id="123212353"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={98.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="20"
          />
        </div>
        <div className="home__row">
          <Product
            id="123212354"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={598.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="21"
          />
          <Product
            id="1232123551"
            title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={598.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41OBf52bnOL._AC_SR400,600_.jpg"
            rating={4}
            key="22"
          />
        </div>
      </div>

      {addProduct ? <AddedProduct addedProduct={basket} /> : ""}
    </div>
  );
}

export default Home;
