import React from "react";

type WrapperProps = {
  title?: string;
  desc?: string;
  isDarkBg?: boolean;
  bgImage?: string; // <-- thêm prop mới
  children?: React.ReactNode;
};

const Wrapper = ({
  title,
  desc,
  isDarkBg,
  bgImage,
  children,
}: WrapperProps) => {
  return (
    <div
      className={`${isDarkBg ? "bg-[#111113]" : "bg-white"} ${
        bgImage ? "" : ""
      }`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={`max-w-7xl items-center px-4 py-16 m-auto  `}>
        {/* Header */}
        {(title || desc) && (
          <div className="max-w-[760px] m-auto mb-10">
            {title && (
              <h2
                className={`text-2xl font-semibold text-center mb-4 ${
                  isDarkBg ? "text-white" : "text-[#222222]"
                }`}
              >
                {title}
              </h2>
            )}

            {desc && (
              <p
                className={`text-center mb-4 ${
                  isDarkBg ? "text-white/70" : "text-[#222222]"
                }`}
              >
                {desc}
              </p>
            )}

            <div className="w-28 h-1 rounded-full bg-primary m-auto"></div>
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
