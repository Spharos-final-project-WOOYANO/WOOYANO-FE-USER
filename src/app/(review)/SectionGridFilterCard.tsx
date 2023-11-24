import React, { FC } from "react";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import { newDataType } from "../(mypage)/review/page";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: newDataType[];
  userName?: string;
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data,
  userName,
}) => {

  const reviewList = data;

  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <div className="mb-8 flex flex-col justify-start items-start ml-4 md:ml-0 md:justify-between md:items-center md:flex-row">
        <h1 className="text-[1.5rem] font-bold mb-3 md:mb-0">{userName}님의 리뷰 🎈</h1>
        <p className="text-sm text-gray-500 text-right">
          {reviewList?.length}개 서비스가 조회되었습니다.
        </p>
      </div>
      <div className="lg:dark:bg-black/20 grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl">
      {Array.isArray(reviewList) && reviewList.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
