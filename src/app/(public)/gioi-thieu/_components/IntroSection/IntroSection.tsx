import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import React from "react";

export const INFO_DATA = [
  {
    label: "CHÀO MỪNG BẠN ĐẾN VỚI TMGS VIỆT NAM!",
    desc: "Công ty TNHH TMGS Việt Nam là một trong những Công ty an ninh mạng hàng đầu Việt Nam trong việc cung cấp sản phẩm và dịch vụ kiểm tra, đánh giá an ninh mạng, dịch vụ giám sát an toàn thông tin toàn diện cho các tổ chức doanh nghiệp, tổ chức chính phủ trong nước và quốc tế.",
    icon: "/image/about-us/gioithieu-1.jpg",
  },
  {
    label: "LĨNH VỰC HOẠT ĐỘNG",
    desc: "Với đội ngũ chuyên gia An ninh mạng chất lượng cao từ 7 - 10 năm kinh nghiệm nghiên cứu, phát triển và triển khai giải pháp đảm bảo an ninh mạng. Chúng tôi tự hào là đơn vị tiên phong trong việc áp dụng các tiêu chuẩn và phương pháp quốc tế về đánh giá an ninh, kiểm thử xâm nhập ở Việt Nam. Kết hợp xây dựng Đội ngũ nhân sự chuyên nghiệp và không ngừng nâng cấp hệ thống cơ sở hạ tầng, chúng tôi tự tin có thể đáp ứng mọi yêu cầu của khách hàng.",
    icon: "/image/about-us/gioithieu-2.jpg",
  },
  {
    label: "SỨ MỆNH CỦA CHÚNG TÔI",
    desc: "Là một doanh nghiệp hoạt động trong lĩnh vực bảo mật, hơn ai hết, chúng tôi hiểu rằng môi trường Internet không đơn thuần chỉ là một nền tảng tìm kiếm thông tin. Nó chính là một thế giới mở nơi các thế hệ có thể học hỏi, trau dồi trải nghiệm sống và tự do chia sẻ. Chính vì vậy, chúng tôi tin tưởng mạnh mẽ rằng Internet phải là môi trường an toàn hơn cho tất cả mọi người.",
    icon: "/image/about-us/mission.jpg",
  },
];

const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");

const IntroSection = () => {
  return (
    <Wrapper
      title="TMGS Việt Nam"
      desc="Tầm nhìn - Sứ mệnh - Giá trị cốt lõi"
      reverseHeader
      bgImage="/image/bg-lines-2.png"
    >
      <div className="space-y-16">
        {INFO_DATA.map((item, index) => {
          const isMiddle = index === 1; // item ở giữa

          return (
            <div
              key={item.label}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 md:items-center"
            >
              <div className={isMiddle ? "md:order-2" : "md:order-1"}>
                <h2 className="mb-4 text-[20px] font-semibold">
                  {toTitleCase(item.label)}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#4B5563]">
                  {item.desc}
                </p>
                <div className="mt-8 h-1 w-28 rounded-full bg-primary" />
              </div>

              {/* Image block */}
              <div
                className={`relative h-64 w-full overflow-hidden rounded-2xl shadow-md md:h-80 ${
                  isMiddle ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default IntroSection;
