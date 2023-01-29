import React from "react";
import Button from "../../common/Button";
import "./topFold.css";
import img1 from "./../../assets/images/img1.gif";
import img2 from "./../../assets/images/img2.gif";
import img3 from "./../../assets/images/img3.gif";
import img4 from "./../../assets/images/img4.gif";

const TopFold = () => {
  return (
    <div className="topfold flex">
      <div className="tf-left">
        <div className="tf-heading">
          Discover, Collect, & Sell{" "}
          <span className="heading-gradient">Extraordinary{" "}</span>
          NFTs
        </div>
        <div className="tf-description">
          The leading NFT Marketplace on Ethereum: 
          <br />Home to the next generation of
          digital creators. 
          <br />Discover the best NFT collections.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-second-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem">
            <div className="tf-infoItem-count">400K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem">
            <div className="tf-infoItem-count">20K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem">
            <div className="tf-infoItem-count">676K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item">
            <img
              src={img4}
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
          <div className="tf-r-diamond-item">
            <img
              src={img3}
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
          <div className="tf-r-bg-blob"></div>
          <div className="tf-r-diamond-item">
            <img
              src={img2}
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
          <div className="tf-r-diamond-item">
            <img
              src={img1}
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
