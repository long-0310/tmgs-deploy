"use client";

import { INFO_DATA } from "@/app/(public)/(home-page)/page";
import BoxIcon from "@/components/BoxIcon/BoxIcon";
import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import React from "react";

const HeroAboutUs: React.FC = () => {
  return (
    <>
      <Wrapper isDarkBg bgImage="/image/company.jpg">
        <div className="absolute inset-0 bg-black/80" />
        <div className="pt-17 pb-10 text-white relative z-9">
          <div className="max-w-[760px] m-auto mb-10">
            <p className={`text-center text-xl lg:text-2xl mb-4 text-white/70`}>
              Về chúng tôi
            </p>
            <h2
              className={`text-2xl lg:text-4xl font-semibold text-center mb-4 `}
            >
              TMGS Việt Nam
            </h2>
            <p className={`text-center lg:text-xl text-white/70 mb-4 `}>
              Nhà cung cấp Dịch vụ An toàn thông tin số hàng đầu Việt Nam
            </p>
            <div className="w-28 h-1 rounded-full bg-primary m-auto"></div>
          </div>
        </div>
      </Wrapper>
      <Wrapper isDarkBg>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 w-full">
          {INFO_DATA.map((item, idx) => (
            <div className="flex lg:justify-center" key={idx}>
              <BoxIcon
                label={item.label}
                desc={item.desc}
                isDark
                icon={
                  <Image
                    src={item.icon}
                    width={48}
                    height={48}
                    alt={item.label}
                    className="
                      h-12 w-12 object-contain
                      filter invert contrast-20 brightness-200
                      transition
                    "
                  />
                }
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default HeroAboutUs;
