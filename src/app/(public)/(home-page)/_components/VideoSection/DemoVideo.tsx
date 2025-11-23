import Wrapper from "@/components/Wrapper/Wrapper";

const DemoVideo = () => {
  return (
    <Wrapper
      title="Giới thiệu về công ty cổ phần TMGS Việt Nam"
      desc="TMGS VIỆT NAM tự hào là công ty hàng đầu Việt Nam trong lĩnh vực nghiên cứu, phát triển và cung cấp các phần mềm và dịch vụ an ninh an toàn thông tin."
      isDarkBg
      bgImage="/image/bg-lines.png"
    >
      <div className="max-w-4xl mx-auto">
        {/* Video responsive wrapper */}
        <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden ">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/s4JnwljzXTI?si=72NlFyKA82mrINIv&amp"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default DemoVideo;
