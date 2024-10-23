import React from "react";
import data from "../data.json";
// import img from "../img/prod1";

const Body = () => {
  
  
 

  const datas = [
    {
      id: 1,
      img: "../img/prod1-1.png",
      title: "ELLERY X M'O CAPSULE1",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 2,
      img: "../img/prod1-2.png",
      title: "ELLERY X M'O CAPSULE2",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 3,
      img: "../img/prod1-3.png",
      title: "ELLERY X M'O CAPSULE3",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 4,
      img: "../img/prod1-4.png",
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 5,
      img: "../img/prod2-1.png",
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 6,
      img: "../img/prod2-2.png",
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 7,
      img: "../img/prod2-3.png",
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
    {
      id: 7,
      img: "../img/prod2-4.png",
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
    },
  ];

  return (
    <>
      <div className="products_sect container">
        <div className="products">
          {datas.map((product) => (
            <div className="products__card">
              <a href="singlePage.html">
                <div className="card__top">
                  <img src={product.img} alt="prod1" />
                  <div className="overlay"></div>
                  <div className="add_card-btn">
                    <div className="btn_add">
                      <img src="./img/logo_cart.svg" alt="logo_cart" />
                      <a href="cart.html">Add to Cart</a>
                    </div>
                  </div>
                </div>
              </a>
              <a href="singlePage.html">
                <div className="text__blok">
                  <h2>Mango People T-shirt</h2>
                  <h3>{product.price}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;


