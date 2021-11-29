import React from "react";
import "../css/AddedProduct.css";
import { useStateValue } from "./StateProvider";

const AddedProduct = (props) => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="parent__div">
      {props.addedProduct &&
        props.addedProduct.map((image, index) => (
          <div
            className="added__product"
            key={index}
            style={{ marginTop: `1%` }}
          >
            <img
              className="added__product__img"
              src={image["image"]}
              alt={image["title"]}
            />
            <div className="added__product__info">
              <p>{`${image["title"]} has been added to basket`}</p>
            </div>
            <button
              className="removeItembutton"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_BASKET",
                  id: image["id"],
                })
              }
            >
              <span className="btnCursor">X</span>
            </button>
          </div>
        ))}
    </div>
  );
};

export default AddedProduct;
