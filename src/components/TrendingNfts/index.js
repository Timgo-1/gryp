import React from "react";
import Slider from "react-slick/lib/slider";
import Button from "../../common/Button";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TrendingCard";
import "./trendingNfts.css";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  speed: 500,
  arrows: false,
    responsive: [
        {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
    },
  ],
};

const TrendingNfts = () => {
  return (
    <div className="trending-nfts">
      <div className="tn-title">
        <span className="heading-gradient">TRENDING NFTs</span>
      </div>
      <div className="tn-bg-blog"></div>
      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft) => (
          <TrendingCard nft={_nft} />
        ))}
      </Slider>
      <div className="tn-btn">
        <Button btnText="SEE MORE" type="SECONDARY" customClass="seemore-btn" />
      </div>
    </div>
  );
};

export default TrendingNfts;
