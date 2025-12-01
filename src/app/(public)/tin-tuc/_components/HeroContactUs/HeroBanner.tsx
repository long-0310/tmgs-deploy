"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";

const HeroBlogs: React.FC = () => {
  return (
    <Wrapper isDarkBg bgImage="/image/world.jpg">
      <div className="absolute inset-0 bg-black/80" />
      <div className="pt-17 pb-10 text-white relative z-9">
        <h2 className={` text-xl lg:text-2xl font-semibold  mb-4 `}>Tin tức</h2>
        <p className={"mb-4 text-white/70 max-w-[800px]"}>
          Cập nhật những tin tức An ninh mạng mới nhất trong nước và trên thế
          giới.
        </p>
        <div className="w-28 h-1 rounded-full bg-primary"></div>
      </div>
    </Wrapper>
  );
};

export default HeroBlogs;
