import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
    <div className="bg-foto">
        <img src="https://media.istockphoto.com/id/1316920204/vector/promo-sale-banner-with-stack-of-books-glasses-blanket-candle-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=URGh5YFwObwFt15egLZLbcknnh4cEqMp4CFg33AAuO0="alt="" />
    </div>
    <div className="bg-foto">
        <img src="https://media.istockphoto.com/id/1316920207/vector/promo-sale-banner-with-books-decorative-house-potted-plant-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=vvnWzueY8MKNW9lW36NoLItSq0D1QzOnVyEsi6-JGqk=" alt="" />
    </div>
    <div className="bg-foto">
        <img src="https://media.istockphoto.com/id/1600278077/vector/banner-design-with-cat-sitting-with-blanket-and-teacup.jpg?s=2048x2048&w=is&k=20&c=NBdTUSmAth54DCk4NAjyaswlT_7b8ecU8Bcqlg72yPc=" alt="" />
    </div>
    <div className="bg-foto">
        <img src="https://media.istockphoto.com/id/1492792958/vector/banner-design-with-push-toys-teddy-bear-plush-bunnies.jpg?s=1024x1024&w=is&k=20&c=bVnS5VqyYLevZAg3ALlRzlge6-062kZqiqgE2taoVIU=" alt="" />
    </div>
   
    </Slider>
  );
}