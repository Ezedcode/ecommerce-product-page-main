import React from "react";

const Item = () => {
  const url = `../../assets/img/image-product-1.jpg`;
  return (
    <div>
      <img src={() => require(url).default} />
    </div>
  );
};

export default Item;
