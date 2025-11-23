"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Wrapper from "@/components/Wrapper/Wrapper";

type SolutionItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

type Category = {
  id: string;
  label: string;
  items: SolutionItem[];
};

const CATEGORIES: Category[] = [
  {
    id: "security-operations",
    label: "Security Operations",
    items: [
      {
        id: "socp",
        title: "Viettel SOC Platform (VCS-SOCP)",
        description:
          "Nền tảng giám sát và vận hành an ninh mạng hợp nhất, tích hợp các giải pháp bảo mật chủ lực như SIEM, SOAR, NSM, EDR, TI... trên một giao diện quản trị duy nhất.",
        href: "#",
      },
      {
        id: "cym",
        title: "Giải pháp Giám sát an ninh mạng (VCS-CyM)",
        description:
          "Giúp doanh nghiệp giám sát toàn bộ hạ tầng CNTT theo thời gian thực, phát hiện sớm rủi ro và xử lý sự cố hiệu quả.",
        href: "#",
      },
      {
        id: "cycir",
        title:
          "Giải pháp điều phối, tự động hóa và phản ứng an ninh mạng (VCS-CyCir)",
        description:
          "Nền tảng điều phối và tự động hoá quy trình phản ứng sự cố, giảm tải cho đội ngũ SOC và nâng cao hiệu quả vận hành.",
        href: "#",
      },
      {
        id: "kian",
        title: "Giải pháp phân tích hành vi bất thường (VCS-KIAN)",
        description:
          "Giải pháp phân tích hành vi người dùng và thực thể (UEBA) ứng dụng học máy để phát hiện bất thường và hỗ trợ xử lý kịp thời.",
        href: "#",
      },
    ],
  },
  {
    id: "network-security",
    label: "Network Security",
    items: [
      {
        id: "fw",
        title: "Giải pháp Tường lửa thế hệ mới",
        description:
          "Bảo vệ hệ thống mạng doanh nghiệp trước các mối đe dọa từ bên ngoài lẫn bên trong với khả năng kiểm soát lưu lượng chi tiết.",
        href: "#",
      },
    ],
  },
  {
    id: "endpoint-security",
    label: "Endpoint Security",
    items: [
      {
        id: "edr",
        title: "Giải pháp Endpoint Detection & Response",
        description:
          "Phát hiện và phản ứng với các mối đe dọa trên thiết bị đầu cuối theo thời gian thực.",
        href: "#",
      },
    ],
  },
  {
    id: "fraud-risk",
    label: "Fraud and Risk",
    items: [
      {
        id: "fraud",
        title: "Giải pháp phát hiện gian lận",
        description:
          "Giám sát giao dịch và hành vi người dùng để phát hiện dấu hiệu gian lận tài chính.",
        href: "#",
      },
    ],
  },
  {
    id: "telsec",
    label: "TelSec",
    items: [
      {
        id: "telsec",
        title: "Giải pháp bảo mật viễn thông",
        description:
          "Bảo vệ hạ tầng viễn thông trước các cuộc tấn công vào hệ thống lõi và thuê bao.",
        href: "#",
      },
    ],
  },
];

const TabServices = () => {
  return (
    <Wrapper
      title="BỘ GIẢI PHÁP TOÀN DIỆN"
      desc="Với đội ngũ chuyên gia An ninh mạng chất lượng cao từ 7 - 10 năm kinh nghiệm nghiên cứu, phát triển và triển khai giải pháp đảm bảo an ninh mạng. Chúng tôi tự hào là đơn vị tiên phong trong việc áp dụng các tiêu chuẩn và phương pháp quốc tế về đánh giá an ninh, kiểm thử xâm nhập ở Việt Nam."
      isDarkBg
      bgImage="/image/bg-lines-2.png"
    >
      <div className="rounded-2xl bg-[#18181B] px-4 py-6 md:px-8 md:py-8 text-white">
        <Tabs
          defaultValue="security-operations"
          className="flex flex-col gap-6 md:flex-row"
        >
          {/* LEFT: Vertical Tabs */}
          <TabsList
            className="
              flex w-full items-start overflow-scroll md:overflow-auto h-full 
              md:flex-col md:items-stretch gap-2 
              bg-transparent p-0 md:w-60
            "
          >
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="
                justify-start rounded-xl border border-transparent
                px-4 py-3 text-left text-sm font-medium
                data-[state=active]:bg-[#FF2849]
                data-[state=active]:text-white
                data-[state=active]:border-[#FF2849]
                data-[state=inactive]:bg-[#242428]
                data-[state=inactive]:text-neutral-200
                hover:bg-[#FF2849]/80 hover:text-white
                transition-colors
                cursor-pointer
              "
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* RIGHT: Content */}
          <div className="flex-1">
            {CATEGORIES.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <ScrollArea className="h-[360px] pr-4">
                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-4 rounded-xl bg-[#242428] px-5 py-4 border border-white/10"
                      >
                        <div className="space-y-1">
                          <h3 className="text-base font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-300 line-clamp-2 md:line-clamp-3">
                            {item.description}
                          </p>
                        </div>

                        <Button
                          asChild
                          className="shrink-0 rounded-full bg-[#FF2849] px-5 text-sm font-semibold text-white hover:bg-[#ff405f]"
                        >
                          <a href={item.href}>Xem thêm</a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default TabServices;
