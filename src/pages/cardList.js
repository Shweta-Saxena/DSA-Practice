import React, { useState, useEffect } from "react";

const CartList = () => {
  const [cartListData, setCartListData] = useState();

  useEffect(() => {
    const cartListResponse = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=30%27"
        );
        const data = await response?.json();
        const imageDetails = await Promise.all(
          data?.results.map(async (item) => {
            const imageData = await fetch(item?.url);
            const responseImage = await imageData?.json();
            return responseImage;
          })
        );
        setCartListData(imageDetails);
      } catch (error) {
        return error;
      }
    };
    cartListResponse();
  }, []);

  return (
    <div className="container">
      <h1>Card Images</h1>
      <div className="cardConatiner">
        {cartListData?.map((item) => {
          return (
            <div className="card" key={item?.base_experience}>
              <img src={item?.sprites?.front_default} alt={item?.name} />
              <h2 className="cardHeading">{item?.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartList;
