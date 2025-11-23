"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider, { Settings } from "react-slick";
import HeroItem from "../HeroItem/HeroItem";

type Slide = {
  id: number;
  tag: string;
  img: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
};

const slides: Slide[] = [
  {
    id: 1,
    tag: "TIN TỨC",
    title: "Lỗ hổng trong WinRAR cho phép ghi tệp tuỳ ý",
    subtitle: "đang bị khai thác trong thực tế (CVE-2025-8088)",
    img: "https://t4.ftcdn.net/jpg/15/67/30/33/360_F_1567303385_tKFs8KUQn6tZbxhiMBigHyHiBZmjz49L.jpg",
    description:
      "Lỗ hổng này mở ra cơ hội cho tin tặc cài đặt và thực thi mã độc, tạo reverse shell,...",
    href: "/blog/cve-2025-8088",
  },
  {
    id: 2,
    tag: "CẢNH BÁO",
    title: "Chiến dịch phishing nhắm vào doanh nghiệp Việt Nam",
    subtitle: "ẩn mình trong các email giả mạo bộ phận nhân sự",
    img: "https://www.nist.gov/sites/default/files/images/2021/01/28/TIG_background_nobar.jpg",
    description:
      "Hacker sử dụng các tập tin đính kèm độc hại và đường link đăng nhập giả mạo để đánh cắp tài khoản nội bộ doanh nghiệp, từ đó leo thang tấn công vào hệ thống quan trọng.",
    href: "/blog/vietnam-phishing-campaign",
  },
  {
    id: 3,
    tag: "BÁO CÁO",
    title: "Bức tranh an ninh mạng nửa đầu năm 2025",
    subtitle: "tấn công ransomware tăng mạnh 37%",
    img: "https://media.gettyimages.com/id/1629474406/video/digital-data-protection-security-icon-binary-code-wave-blue-background.jpg?s=640x640&k=20&c=GXsCQKZnceOUUDJNdVvct3O5xNWa9IQf9LhxklP5n_g=",
    description:
      "Bản báo cáo tổng hợp xu hướng tấn công vào hệ thống doanh nghiệp, ngành bị nhắm mục tiêu nhiều nhất và các khuyến nghị bảo mật quan trọng cho tổ chức tại Việt Nam.",
    href: "/blog/cybersecurity-report-2025",
  },
];

function Arrow({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      onClick={onClick}
      className={cn(
        "absolute  top-1/2  2xl:flex z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700/70 cursor-pointer bg-black/40 backdrop-blur transition hover:bg-white/20 ",
        direction === "left" ? "left-32" : "right-32"
      )}
    >
      <Icon className="h-5 w-5 text-white" />
    </button>
  );
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: true,
  prevArrow: <Arrow direction="left" />,
  nextArrow: <Arrow direction="right" />,
  appendDots: (dots) => (
    <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
      <ul className="max-w-7xl flex items-center gap-1 px-4 m-auto mb-8">
        {dots}
      </ul>
    </div>
  ),
  customPaging: () => (
    <div className="h-2 w-2 rounded-full bg-white/30 transition-all duration-200" />
  ),
};

const HeroSlider: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto flex h-full  items-center ">
        <Slider {...settings} className="w-full">
          {slides.map((slide) => (
            <div key={slide.id}>
              <HeroItem slide={slide} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
