"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "@/components/Wrapper/Wrapper";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";
import Slider, { Settings } from "react-slick";
type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Chương trình đồng hành cùng doanh nghiệp trưởng thành ATTT (CSMP)",
    description:
      "Trong bối cảnh chuyển đổi số ngày càng sâu rộng, doanh nghiệp không chỉ đối mặt với rủi ro mất ATTT mà còn thiếu nguồn lực, tri thức và kinh nghiệm vận hành.",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
  },
  {
    id: 2,
    title: "Dịch vụ giám sát an toàn thông tin 24/7 (Viettel SOC)",
    description:
      "Viettel SOC giúp doanh nghiệp phát hiện – phân tích – điều tra và phục hồi trước các sự cố an ninh mạng, đảm bảo hệ thống luôn sẵn sàng.",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
  },
  {
    id: 3,
    title: "Dịch vụ kiểm tra, đánh giá ATTT (Pentest)",
    description:
      "Pentest giúp phát hiện sớm các lỗ hổng trên hệ thống, hạn chế rủi ro bị tấn công, bảo vệ dữ liệu và hình ảnh thương hiệu doanh nghiệp.",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
  },
  // thêm item thoải mái...
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

export function ServicesSection() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // desktop: 3 item
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <div>
      <div className="block lg:hidden">
        <Wrapper
          title="Dịch vụ tiêu biểu"
          desc="Những dịch vụ tiêu biểu được triển khai bởi đội ngũ chuyên gia
                VCS, giúp khách hàng không chỉ được bảo vệ mà còn chủ động ứng
                phó trước các mối nguy an ninh mạng..."
        >
          <Slider {...settings} className="w-full services-slider">
            {SERVICES.map((slide) => (
              <div key={slide.id}>
                <Card
                  className="
                        h-full overflow-hidden py-0 rounded-xl border-black/5
                        shadow-[0_10px_40px_rgba(15,23,42,0)]
                        cursor-pointer
                        transition-transform duration-300 ease-out
                    "
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src="https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg"
                      fill
                      alt=""
                      className="object-cover hover-img-effect"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-[17px] text-[#111827]">
                      Dịch vụ ví dụ {slide.id}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col pb-6">
                    <p className="mb-4 line-clamp-3 text-sm text-[#6B7280]">
                      Mô tả dịch vụ...
                    </p>
                    <Button className="mt-auto cursor-pointer rounded-full bg-[#ff4b5c] px-6 text-sm text-white">
                      Xem thêm
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Wrapper>
      </div>
      <section className="hidden lg:grid-cols-[calc(43%-12px)_calc(57%-12px)] py-24 lg:grid items-center gap-x-6 gap-y-8 overflow-hidden relative">
        <div className="col-span-full row-start-1 relative">
          <div className="mx-auto px-4 max-w-7xl">
            <div className="w-[400px]">
              <h2 className="text-3xl font-semibold text-[#111827]">
                Dịch vụ tiêu biểu
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
                Những dịch vụ tiêu biểu được triển khai bởi đội ngũ chuyên gia
                VCS, giúp khách hàng không chỉ được bảo vệ mà còn chủ động ứng
                phó trước các mối nguy an ninh mạng...
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-start-1 relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="h-full w-full pl-4"
          >
            <CarouselContent className="-ml-4 ">
              {[1, 2, 3, 4, 5].map((id) => (
                <CarouselItem
                  key={id}
                  className="pl-4 basis-[280px] sm:basis-[340px] lg:basis-[300px]"
                >
                  <Card
                    className="
                        h-full overflow-hidden py-0 rounded-xl border-black/5
                        shadow-[0_10px_40px_rgba(15,23,42,0)]
                        cursor-pointer
                        transition-transform duration-300 ease-out
                    "
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src="https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg"
                        fill
                        alt=""
                        className="object-cover hover-img-effect"
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="line-clamp-2 text-[17px] text-[#111827]">
                        Dịch vụ ví dụ {id}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col pb-6">
                      <p className="mb-4 line-clamp-3 text-sm text-[#6B7280]">
                        Mô tả dịch vụ...
                      </p>
                      <Button className="mt-auto cursor-pointer rounded-full bg-[#ff4b5c] px-6 text-sm text-white">
                        Xem thêm
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="
                absolute -left-12 top-1/2 -translate-y-1/2
                h-11 w-11 rounded-full
                bg-primary text-white
                shadow-lg hover:bg-primary/90
                [&>svg]:h-5 [&>svg]:w-5
                border-none cursor-pointer hover:opacity-80 hover:text-white 
            "
            />

            <CarouselNext
              className="
                absolute right-10 top-1/2 -translate-y-1/2
                h-11 w-11 rounded-full
                bg-primary text-white
                shadow-lg hover:bg-primary/90
                [&>svg]:h-5 [&>svg]:w-5
                border-none cursor-pointer hover:opacity-80 hover:text-white
            "
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
