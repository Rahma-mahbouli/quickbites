import React from "react";
import Slider from "react-slick";
import Item from "../menu/MenuItem";
import AddToCartButton from "../AddToCartButton";
import useNewestProducts from "../../hooks/useNewestProducts";
import ProductsCarrouselSkeleton from "../ProductsCarrouselSkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductsCarrousel() {
  const { isLoading, latestProducts } = useNewestProducts();

  if (isLoading) return <ProductsCarrouselSkeleton />;

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {latestProducts.map((product) => (
        <div key={product._id}>
          <Item item={product}>
            <AddToCartButton thisProductInfo={product} />
          </Item>
        </div>
      ))}
    </Slider>
  );
}
