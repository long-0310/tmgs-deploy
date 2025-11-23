import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Infomation = () => {
  return (
    <Wrapper
      title="Danh sách đối tác"
      desc="Đảm bảo an toàn thông tin cho Quý Vị
là trách nhiệm của TMGS Việt Nam"
    >
      <Marquee speed={40} className="py-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <Image
            key={n}
            src={`/image/logo-partner/logo-${n}.png`}
            alt={`logo-${n}`}
            width={240}
            height={80}
            className="h-10 w-auto mx-12 object-contain"
          />
        ))}
      </Marquee>
    </Wrapper>
  );
};

export default Infomation;
