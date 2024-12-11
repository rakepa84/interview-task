import React from "react";
import Image from "next/image";
import RatingStar from "./RatingStar";

const SellingProductCard = (props) => {
  const { productImg, info, latestPrice, oldPrice, rating, discount } = props;
  return (
    <div className="w-[170px] md:w-[230px] flex-shrink-0 bg-white rounded-lg pt-4 pb-10 px-4 md:px-0 md:pb-16 relative">
      {discount ? (
        <div className="md:mx-2 px-3 md:px-4 font-bold md:font-normal text-[#112025] bg-[#FDC161] p-[0.40rem] md:p-2 rounded-md text-[12px] md:text-[16px] absolute top-0 left-[6px] md:left-0">
          {discount}
          <span className="flex justify-end font-normal text-[#112025]">
            off
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center justify-center w-full h-40">
        <Image
          src={productImg}
          className="object-contain"
          alt={info}
          width={150}
          height={150}
          priority
        />
      </div>
      <div>
      <RatingStar rating={rating} />
      </div>
      <h3 className="text-center text-[#112025] text-[10px] md:text-[16px] font-semibold md:font-bold mt-3 mb-3 opacity-[80%]">
        {info}
      </h3>

      <div className="text-center text-[#112025] text-[10px] md:text-[16px] mt-1 font-bold">
        <span>{latestPrice}</span> -{" "}
        <span className="text-[#112025] line-through font-normal opacity-[80%]">
          {oldPrice}
        </span>
      </div>
    </div>
  );
};

export default SellingProductCard;
