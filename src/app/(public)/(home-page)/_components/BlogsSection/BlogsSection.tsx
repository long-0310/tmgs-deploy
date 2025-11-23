"use client";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HighlightItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  href: string;
};

const EVENTS: HighlightItem[] = [
  {
    id: 1,
    title:
      "Viettel Cyber Security tại Vietnam Security Summit 2025: Đổi chiến lược để phòng thủ mạnh mẽ hơn",
    description:
      "Sự kiện quy tụ các chuyên gia an ninh mạng hàng đầu Việt Nam, chia sẻ kinh nghiệm, xu hướng và giải pháp bảo vệ hệ thống trước các mối đe dọa ngày càng tinh vi.",
    date: "23/05/2025",
    category: "Năng lượng",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
    href: "#",
  },
  {
    id: 2,
    title:
      'Hội thảo chuyên đề "Xây dựng Chiến lược ứng phó với hiểm họa an ninh mạng cho doanh nghiệp"',
    description:
      "Những chia sẻ thực tế về cách xây dựng chiến lược phòng thủ đa lớp, quy trình phản ứng sự cố và tối ưu nguồn lực cho doanh nghiệp.",
    date: "08/10/2024",
    category: "Năng lượng",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
    href: "#",
  },
  {
    id: 3,
    title:
      "Giải mã mã độc tống tiền: Câu chuyện từ người trong cuộc và bài học kinh nghiệm",
    description:
      "Chia sẻ từ đội ngũ chuyên gia xử lý sự cố thực chiến, cách đối phó, khắc phục và xây dựng kế hoạch phòng chống ransomware hiệu quả.",
    date: "18/06/2024",
    category: "Năng lượng",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
    href: "#",
  },
];

const NEWS: HighlightItem[] = [
  {
    id: 4,
    title:
      "Bản tin an ninh mạng tháng 11: Xu hướng tấn công mới nhắm vào doanh nghiệp Việt",
    description:
      "Tổng hợp các chiến dịch tấn công nổi bật, lỗ hổng nghiêm trọng và khuyến nghị giúp doanh nghiệp giảm thiểu rủi ro.",
    date: "05/11/2025",
    category: "Bản tin",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
    href: "#",
  },
  {
    id: 5,
    title:
      "Ra mắt nền tảng giám sát an toàn thông tin thế hệ mới dành cho doanh nghiệp",
    description:
      "Giải pháp giúp doanh nghiệp phát hiện sớm, phân tích và xử lý sự cố an ninh mạng theo thời gian thực.",
    date: "20/10/2025",
    category: "Sản phẩm",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
    href: "#",
  },
  {
    id: 6,
    title:
      "Chương trình đào tạo nâng cao năng lực phòng thủ cho đội ngũ SOC nội bộ",
    description:
      "Chuỗi workshop chuyên sâu dành cho các tổ chức muốn xây dựng và vận hành Trung tâm điều hành an ninh mạng.",
    date: "02/09/2025",
    category: "Đào tạo",
    image:
      "https://www.ikusi.com/wp-content/uploads/2025/07/marcos-de-ciberseguridad-1000x667.jpg",
    href: "#",
  },
];

const BlogsSection = () => {
  const [activeTab, setActiveTab] = React.useState<"events" | "news">("events");

  const items = activeTab === "events" ? EVENTS : NEWS;
  if (!items.length) return null;

  const [main, ...rest] = items;
  return (
    <Wrapper
      title="Sự kiện & Tin tức"
      desc="Cập nhật những hoạt động, sự kiện nổi bật và tin tức mới nhất từ VCS - nơi phản ánh nhịp sống công nghệ, kết nối cộng đồng và cập nhật những chuyển động quan trọng trong lĩnh vực an toàn thông tin."
      isDarkBg
      bgImage="/image/bg-lines-2.png"
    >
      <div className="mb-10 flex justify-center">
        <div className="inline-flex gap-10 ">
          <button
            type="button"
            onClick={() => setActiveTab("events")}
            className={`relative cursor-pointer px-2 pb-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
              activeTab === "events" ? "text-[#EB0029]" : "text-neutral-500"
            }`}
          >
            Sự kiện tiêu biểu
            <span
              className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#EB0029] transition-opacity ${
                activeTab === "events" ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("news")}
            className={`relative cursor-pointer px-2 pb-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
              activeTab === "news" ? "text-[#EB0029]" : "text-neutral-500"
            }`}
          >
            Tin tức nổi bật
            <span
              className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#EB0029] transition-opacity ${
                activeTab === "news" ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-6 grid-cols-2">
        {/* Left: big card */}
        <Link
          href={main.href}
          className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#2A2A2F] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative w-full md:h-[100px] lg:h-[200px]">
            <Image
              src={main.image}
              alt={main.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-6">
            <h3 className="line-clamp-2 text-lg font-semibold text-white md:text-xl">
              {main.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm text-white/80">
              {main.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/80">
              <span>{main.date}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-neutral-300" />
              <span className="font-medium">{main.category}</span>
            </div>

            <div className="mt-6">
              <Button variant="default">Đọc thêm</Button>
            </div>
          </div>
        </Link>

        {/* Right: 2 stacked small cards */}
        <div className="flex flex-col gap-6">
          {rest.slice(0, 2).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex gap-4 overflow-hidden h-full rounded-2xl border border-white/10 bg-[#2A2A2F]  shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-full w-50 shrink-0 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex min-w-0 p-4 flex-1 flex-col">
                <h3 className="line-clamp-2 text-xl font-semibold text-white ">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs text-white/80 md:text-sm">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between text-xs text-white/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>{item.date}</span>
                    <span className="h-[3px] w-[3px] rounded-full bg-neutral-300" />
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <Button variant="default">Đọc thêm</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View more */}
      <div className="mt-10 flex justify-center">
        <Button variant="default" size="lg">
          {activeTab === "events" ? "Xem thêm sự kiện" : "Xem thêm tin tức"}
        </Button>
      </div>
    </Wrapper>
  );
};

export default BlogsSection;
