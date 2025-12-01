import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CardBlogProps = {
  title: string;
  category: string;
  description?: string;
  image: string;
  theme?: "light" | "dark";
};

const CardBlog: React.FC<CardBlogProps> = ({
  title,
  category,
  image,
  description,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <Card
      className={`
        h-full overflow-hidden rounded-xl border py-0
        shadow-[0_10px_40px_rgba(15,23,42,0)] gap-3
        cursor-pointer transition-transform duration-300 ease-out bg-white! 
        hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.18)]
        ${isDark ? "border-white/10 bg-[#111113]" : "border-black/5 bg-white"}
      `}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover hover-img-effect"
        />
      </div>

      <CardHeader>
        <div
          className={`
            line-clamp-2 text-[14px] font-semibold uppercase
            ${isDark ? "text-white/40" : "text-[#7A7A85]"}
          `}
        >
          {category}
        </div>
        <CardTitle
          className={`
            line-clamp-2 text-[17px]
            ${isDark ? "text-white" : "text-[#111827]"}
          `}
        >
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col pb-6 ">
        <p
          className={`
              line-clamp-2 text-[14px] font-light mb-2
              ${isDark ? "text-white/40" : "text-[#7A7A85]"}
            `}
        >
          24/24/2022 • Long Vu
        </p>
        {description && (
          <p
            className={`
            line-clamp-2 text-[14px] font-light mb-4
            ${isDark ? "text-white/40" : "text-[#111112]"}
          `}
          >
            {description}
          </p>
        )}

        <Button
          className={`
            mt-auto cursor-pointer rounded-full px-6 text-sm
            bg-primary text-white hover:bg-primary/90
          `}
        >
          Xem thêm
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardBlog;
