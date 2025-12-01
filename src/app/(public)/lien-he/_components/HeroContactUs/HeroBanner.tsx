"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";

const HeroContactUs: React.FC = () => {
  return (
    <Wrapper isDarkBg bgImage="/image/about-us/mission.jpg">
      <div className="absolute inset-0 bg-black/80" />
      <div className="pt-17 pb-10 text-white relative z-9">
        <h2 className={`text-2xl lg:text-4xl font-semibold  mb-4 `}>
          Liên hệ với chúng tôi
        </h2>
        <p className={"mb-4 text-white/70 max-w-[800px]"}>
          TMGS luôn sẵn sàng lắng nghe và hỗ trợ. Dù bạn đang tìm kiếm giải pháp
          bảo mật, cần trao đổi chuyên sâu, mong muốn hợp tác hay đơn giản là
          muốn kết nối - chúng tôi ở đây để đồng hành cùng bạn.
        </p>
        <div className="w-28 h-1 rounded-full bg-primary"></div>
      </div>
    </Wrapper>
  );
};

export default HeroContactUs;
