import React from "react";
import Leader from "../components/Leader";

const mockTop3 = [
  { icon: "", title: "", subtitle: "50 USD" },
  { icon: "", title: "", subtitle: "100 USD" },
  { icon: "", title: "", subtitle: "50 USD" },
];

const mockTop4 = [
  { icon: "", title: "", subtitle: "15 USD" },
  { icon: "", title: "", subtitle: "15 USD" },
  { icon: "", title: "", subtitle: "15 USD" },
  { icon: "", title: "", subtitle: "15 USD" },
];

const LeaderboardContainer: React.FC = () => {
  return (
    <div className="tw-container rounded-[20px] px-[15px] py-[15px] mx-[15px] flex flex-col gap-[20px]">
      {/* Топ-3 */}
      <div className="flex justify-around">
        {mockTop3.map((leader, index) => (
          <Leader
            key={index}
            icon={leader.icon}
            title={leader.title}
            subtitle={leader.subtitle}
            imageClassName="w-[60px] h-[60px]"
          />
        ))}
      </div>

      {/* Топ-4 */}
      <div className="grid grid-cols-4 gap-x-[5px] gap-y-[25px] justify-center">
        {mockTop4.map((leader, index) => (
          <Leader
            key={index}
            icon={leader.icon}
            title={leader.title}
            subtitle={leader.subtitle}
            imageClassName="w-[40px] h-[40px]"
          />
        ))}
      </div>

      {/* Фрейм с текстом */}
      <div className="bg-[#E8E9BE] text-[#212121] text-[14px] font-sfpro text-center px-[15px] py-[10px] rounded-[12px]">
      Начисление наград через: 28д: 10ч: 17м
      </div>
    </div>
  );
};

export default LeaderboardContainer;
