"use client";

import CardBlog from "@/components/CardBlog/CardBlog";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";

const EVENTS = [
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
  // ... các event lặp lại của bạn
];

const BlogsSection = () => {
  // Tạo list category duy nhất
  const categories = React.useMemo(
    () => ["Tất cả", ...Array.from(new Set(EVENTS.map((e) => e.category)))],
    []
  );

  const [activeCategory, setActiveCategory] = React.useState<string>("Tất cả");

  const filteredEvents = React.useMemo(
    () =>
      activeCategory === "Tất cả"
        ? EVENTS
        : EVENTS.filter((event) => event.category === activeCategory),
    [activeCategory]
  );

  return (
    <Wrapper
      title=" Tin tức &amp; Sự kiện"
      desc="Cập nhật những hoạt động mới nhất về an toàn thông tin."
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full gap-2 overflow-x-auto sm:w-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`
                  whitespace-nowrap rounded-full border px-4 py-1.5 text-xs sm:text-sm
                  transition-colors cursor-pointer duration-200
                  ${
                    isActive
                      ? "bg-[#FF2849] text-white border-[#FF2849] "
                      : "bg-white text-[#374151] border-[#E5E7EB] hover:bg-[#F3F4F6]"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event, index) => (
          <div key={`${event.id}-${index}`}>
            <CardBlog
              category={event.category}
              image={event.image}
              title={event.title}
              description={event.description}
            />
          </div>
        ))}
      </div>

      {/* Nút xem thêm */}
      <div className="mx-auto mt-8 text-center">
        <Button size="lg">Xem thêm</Button>
      </div>
    </Wrapper>
  );
};

export default BlogsSection;
