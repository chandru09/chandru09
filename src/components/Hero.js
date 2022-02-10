import { React, useState } from "react";
import { cartData } from "../data/data";

import "./Hero.css";

function Hero() {
  let [cartItem, setCartItem] = useState("");
  function addCart(item) {
    console.log(item);
    //setCartItem(item);
  }

  return (
    <div className="cards">
      <h1 id="get">Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <ul className="cards__items"></ul>
        {cartData.map((item) => (
          <li className="cards__item">
            <div className="cards__item__link">
              {/* this props is used to get the path from Cards.js file */}
              <div className="cards__item__pic-wrap" data-category={item.label}>
                <img
                  src={item.src}
                  alt="Travel Image"
                  className="cards__item__img"
                />
              </div>
              <div className="cards__item__info">
                <h5 className="cards__item__text">{item.text}</h5>
                <div className="btn_align">
                  <button className="btn-add" onClick={() => addCart(item)}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Hero;
