import Marquee from "react-fast-marquee";
import DemoVideo from "./_components/VideoSection/DemoVideo";
import HeroSlider from "./_components/HeroSection/HeroBanner";
import Infomation from "./_components/InfomationSection/Infomation";
import BoxIcon from "@/components/BoxIcon/BoxIcon";
import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import TabServices from "./_components/TabService/TabService";
import { ServicesSection } from "./_components/ServicesSection/ServicesSection";
import BlogsSection from "./_components/BlogsSection/BlogsSection";
import ContactSection from "./_components/ContactSection/ContactSection";

export const INFO_DATA = [
  {
    label: "An toàn",
    desc: "Chúng tôi cung cấp các giải pháp",
    icon: "/image/IDTP.svg",
  },
  {
    label: "Hỗ trợ 24/7",
    desc: "Tất cả vấn đề ATTT trên hệ thống",
    icon: "/image/refresh-support-icon.svg",
  },
  {
    label: "Tuân thủ SLA",
    desc: "An toàn thông tin tới khách hàng",
    icon: "/image/Key.svg",
  },
  {
    label: "50+",
    desc: "Dự án lớn",
    icon: "/image/VPP.svg",
  },
];

export default function page() {
  return (
    <div>
      <div className="">
        <HeroSlider />
        <div className="bg-[#FD2F4A] py-4">
          <Marquee speed={25}>
            <span className="mx-8 text-xl font-medium cursor-pointer text-white">
              Tin nóng: WinRAR xuất hiện lỗ hổng CVE-2025-8088
            </span>

            <span className="mx-8 text-xl font-medium cursor-pointer text-white">
              Cảnh báo: Tấn công phishing tăng mạnh trong tháng 11
            </span>

            <span className="mx-8 text-xl font-medium cursor-pointer text-white">
              Báo cáo 2025: Ransomware tăng 43% so với 2024
            </span>
            <span className="mx-8 text-xl font-medium cursor-pointer text-white">
              Cảnh báo: Tấn công phishing tăng mạnh trong tháng 11
            </span>

            <span className="mx-8 text-xl font-medium cursor-pointer text-white">
              Báo cáo 2025: Ransomware tăng 43% so với 2024
            </span>
          </Marquee>
        </div>
        <Wrapper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 w-full">
            {INFO_DATA.map((item, idx) => (
              <div className="flex lg:justify-center" key={idx}>
                <BoxIcon
                  label={item.label}
                  desc={item.desc}
                  icon={
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt={item.label}
                    />
                  }
                />
              </div>
            ))}
          </div>
        </Wrapper>
        <DemoVideo />
        <Infomation />
        <TabServices />
        <ServicesSection />
        <BlogsSection />
        <ContactSection />
      </div>
    </div>
  );
}
