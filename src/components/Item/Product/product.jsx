import React, { useState } from "react";

import img1 from "../../../assets/img/image-product-1-thumbnail.jpg";
import img2 from "../../../assets/img/image-product-1.jpg";

import img3 from "../../../assets/img/image-product-2-thumbnail.jpg";
import img4 from "../../../assets/img/image-product-2.jpg";

import img5 from "../../../assets/img/image-product-3-thumbnail.jpg";
import img6 from "../../../assets/img/image-product-3.jpg";

import img7 from "../../../assets/img/image-product-4-thumbnail.jpg";
import img8 from "../../../assets/img/image-product-4.jpg";

import Container from "./styles";

const Product = () => {
  const [nextImage, setNextImage] = useState(0);

  const images = [
    [img1, img2],
    [img3, img4],
    [img5, img6],
    [img7, img8],
  ];

  const goToNextImage = () => {
    if (nextImage < images.length - 1) {
      let index = nextImage + 1;

      setNextImage(index);
    } else {
      setNextImage(0);
    }
  };

  const goToPreviousImage = () => {
    if (nextImage > 0) {
      let index = nextImage - 1;

      setNextImage(index);
    } else {
      setNextImage(images.length - 1);
    }
  };

  return (
    <Container>
      <div>
        <button onClick={goToPreviousImage}>{"<"}</button>
        {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={images[nextImage][1]}
            alt="image-product"
            width="400"
            className="image-item"
          />
        }
        <button onClick={goToNextImage}>{">"}</button>
      </div>
      <div className="grid-thumbnail">
        {images.map((value, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={images[index][0]}
            alt="image-product"
            width="80"
            onClick={() => setNextImage(index)}
          />
        ))}
      </div>
    </Container>
  );
};

export default Product;
