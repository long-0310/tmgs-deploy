import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";

const WHY_CHOOSE_DATA = [
  {
    title: "Đội ngũ chuyên gia",
    desc: "Đội ngũ chuyên gia bảo mật không chỉ có trình độ và bằng cấp được quốc tế công nhận mà còn dày dặn kinh nghiệm triển khai và ứng cứu các sự cố an toàn thông tin trong và ngoài nước.",
    icon: "/image/about-us/virtual-svgrepo-com.svg",
  },
  {
    title: "Chất Lượng Sản Phẩn Uy Tín",
    desc: "Tất cả các sản phẩm và dịch vụ của TMGS VIỆT NAM cung cấp đều được kiếm định nghiêm ngặt với tiêu chuẩn quốc tế và nhận được sự hỗ trợ của các chuyên gia bảo mật đến từ các tổ chức danh tiếng.",
    icon: "/image/about-us/connection-svgrepo-com.svg",
  },
  {
    title: "Dịch Vụ Ứng Cứu Sự Cố Chuyên Nghiệp",
    desc: "Từ tư vấn, đánh giá, triển khai đến vận hành, tất cả trong một hệ sinh thái bảo mật.Dịch vụ ứng cứu sự cố bảo mật nhanh, chính xác, chuyên nghiệp Phản hồi sự cố trong vòng 30 phút, ứng cứu và lên phương án xử lý sự cố trong vòng chưa đầy 24 giờ.",
    icon: "/image/about-us/support-svgrepo-com.svg",
  },
  {
    title: "Dịch Vụ Chăm Sóc Khách Hàng Chuyên Biệt",
    desc: "Chúng tôi luôn hiểu rõ tâm lý của từng đối tượng khách để có được các dịch vụ chăm sóc phù hợp, chuyên biệt, mạng đến cho khách hàng sự trải nghiệm tốt nhất khi sử dụng sản phẩm dịch vụ của TMGS VIỆT NAM.",
    icon: "/image/about-us/security-svgrepo-com.svg",
  },
];

const WhyChooseUs = () => {
  return (
    <Wrapper
      title="Tại sao nên chọn TMGS Việt Nam"
      desc="Dịch vụ của chúng tôi"
      reverseHeader
      isDarkBg
    >
      <div className="grid gap-6 md:grid-cols-2">
        {WHY_CHOOSE_DATA.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-white/10 bg-[#1A1A1F] p-5  hover:-translate-y-2 transition-transform duration-100"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl p-2 bg-primary">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="
                  object-contain
                  filter
                  invert
                  brightness-200
                  saturate-0
                  opacity-80
                "
              />
            </div>

            {/* Cột text */}
            <div className="flex flex-1 flex-col">
              <h3 className="mb-2 text-[16px] lg:text-2xl font-medium text-white">
                {item.title}
              </h3>
              <p className=" text-[14px] leading-relaxed text-white/70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default WhyChooseUs;
