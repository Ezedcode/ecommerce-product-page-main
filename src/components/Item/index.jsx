import React, { useState } from "react";

import img1 from "../../assets/img/image-product-1-thumbnail.jpg";
import img2 from "../../assets/img/image-product-1.jpg";

import img3 from "../../assets/img/image-product-2-thumbnail.jpg";
import img4 from "../../assets/img/image-product-2.jpg";

import img5 from "../../assets/img/image-product-3-thumbnail.jpg";
import img6 from "../../assets/img/image-product-3.jpg";

import img7 from "../../assets/img/image-product-4-thumbnail.jpg";
import img8 from "../../assets/img/image-product-4.jpg";
import CloseBtn from "../../assets/img/icon-close";

import NextButton from "../../assets/img/icon-next";
import PreviousButton from "../../assets/img/icon-previous";

import Container from "./styles";
import { DesableScroll } from "../Menu/styles";

const Product = (props) => {
  const [nextImage, setNextImage] = useState(0);
  const [clickItem, setClickItem] = useState(false);

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

  const handleClickIn = () => {
    setClickItem(true);
  };

  const handleClickOut = () => {
    setClickItem(false);
  };

  return (
    <Container display={clickItem}>
      <div>
        <div>
          {
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={!clickItem ? images[nextImage][1] : images[0][1]}
              alt="image-product"
              width="350"
              className="image-item"
              onClick={handleClickIn}
            />
          }
        </div>
        <div className="grid-thumbnail">
          {images.map((value, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <div
              className={(nextImage === index) & !clickItem && `imgCheck`}
              onClick={() => setNextImage(index)}
            >
              {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  src={images[index][0]}
                  alt="image-product"
                  width="60"
                  onClick={() => setNextImage(index)}
                />
              }
            </div>
          ))}
        </div>
      </div>

      <div className={clickItem && "active"}>
        <div>
          <button onClick={handleClickOut} className="close-btn">
            <CloseBtn />
          </button>
          <button onClick={goToPreviousImage} className="next-item">
            <PreviousButton />
          </button>
          {
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={images[nextImage][1]}
              alt="image-product"
              className="image-item"
            />
          }
          <button onClick={goToNextImage} className="next-item">
            <NextButton />
          </button>
        </div>
        <div className="grid-thumbnail">
          {images.map((value, index) => (
            <div
              className={nextImage === index && `imgCheck`}
              onClick={() => setNextImage(index)}
            >
              {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={images[index][0]} alt="image-product" width="60" />
              }
            </div>
          ))}
        </div>
      </div>
      {clickItem && <DesableScroll />}
    </Container>
  );
};

export default Product;
