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
];

const SERVICES_TITLE = "Dịch vụ tiêu biểu";
const SERVICES_DESC =
  "Những dịch vụ tiêu biểu được triển khai bởi đội ngũ chuyên gia VCS, giúp khách hàng không chỉ được bảo vệ mà còn chủ động ứng phó trước các mối nguy an ninh mạng...";

export const MOBILE_SLIDER_SETTINGS: Settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1, // mobile default
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: true,
  appendDots: (dots) => (
    <div className="absolute -bottom-10 left-0 right-0 z-10">
      <ul className="flex items-center justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="h-2 w-2 rounded-full bg-white/30 transition-all duration-200" />
  ),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      className="
        h-full overflow-hidden rounded-xl border-black/5
        py-0 shadow-[0_10px_40px_rgba(15,23,42,0)]
        cursor-pointer
        transition-transform duration-300 ease-out
      "
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          fill
          alt={service.title}
          className="object-cover hover-img-effect"
        />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2 text-[17px] text-[#111827]">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col pb-6">
        <p className="mb-4 line-clamp-3 text-sm text-[#6B7280]">
          {service.description}
        </p>
        <Button className="mt-auto cursor-pointer rounded-full bg-[#ff4b5c] px-6 text-sm text-white">
          Xem thêm
        </Button>
      </CardContent>
    </Card>
  );
}

export function ServicesSection() {
  return (
    <div>
      <div className="block overflow-hidden lg:hidden">
        <Wrapper title={SERVICES_TITLE} desc={SERVICES_DESC}>
          <div className="-mx-2 slick-slider-wrapper">
            <div className="relative">
              <Slider
                {...MOBILE_SLIDER_SETTINGS}
                className="w-full services-slider"
              >
                {SERVICES.map((service) => (
                  <div key={service.id} className="px-2">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Wrapper>
      </div>

      <section className="relative hidden items-center gap-x-6 gap-y-8 overflow-hidden py-24 lg:grid lg:grid-cols-[calc(43%-12px)_calc(57%-12px)]">
        <div className="col-span-full row-start-1 relative">
          <div className="mx-auto max-w-7xl px-4">
            <div className="w-[400px]">
              <h2 className="text-3xl font-semibold text-[#111827]">
                {SERVICES_TITLE}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
                {SERVICES_DESC}
              </p>
            </div>
          </div>
        </div>

        <div className="col-start-2 row-start-1 relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="h-full w-full pl-4"
          >
            <CarouselContent className="-ml-4">
              {SERVICES.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="basis-[280px] pl-4 sm:basis-[340px] lg:basis-[300px]"
                >
                  <ServiceCard service={service} />
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
