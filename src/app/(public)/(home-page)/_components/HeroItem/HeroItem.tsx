import { Button } from "@/components/ui/button";

type Slide = {
  tag: string;
  title: string;
  img: string;
  subtitle?: string;
  description: string;
  href: string;
};

const HeroItem = ({ slide }: { slide: Slide }) => {
  return (
    <div
      className="relative h-[600px] flex items-center px-4"
      style={{
        backgroundImage: `url(${slide.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay đen */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Nội dung */}
      <div className="max-w-7xl w-full relative flex items-center px-4 m-auto">
        <div className="max-w-3xl py-8 space-y-6 text-white">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-700/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="text-[12px]">{slide.tag}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-medium leading-tight md:text-4xl">
            <span className="block">{slide.title}</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-sm text-neutral-200 md:text-base">
            {slide.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="rounded-full bg-red-600 px-7 py-5 text-sm font-semibold tracking-wide hover:bg-red-500"
            >
              <a href={slide.href}>Đọc thêm</a>
            </Button>

            <div className="hidden text-xs text-neutral-300 md:block">
              <span className="inline-flex h-2 w-2 items-center justify-center">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" />
              </span>
              <span className="ml-2">
                Đã cập nhật và xác minh bởi đội ngũ SOC.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
