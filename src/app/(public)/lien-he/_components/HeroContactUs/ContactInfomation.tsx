import Wrapper from "@/components/Wrapper/Wrapper";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <Wrapper title="Thông tin liên hệ" className="pb-0">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <MapPin className="h-5 w-5 text-[#EE0033]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#EE0033]">
                Văn phòng Hà Nội
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Số 33, ngõ 99 Nguyễn Khang,
                <br />
                Phường Yên Hòa, Quận Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
            <Phone className="h-4 w-4 text-slate-500" />
            <span>
              Điện thoại:{" "}
              <a
                href="tel:0936370690"
                className="font-medium text-[#EE0033] hover:underline"
              >
                0936.370.690
              </a>
            </span>
          </div>
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <MapPin className="h-5 w-5 text-[#EE0033]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#EE0033]">
                Văn phòng TP. Hồ Chí Minh
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Số 33, ngõ 99 Nguyễn Khang,
                <br />
                Phường Yên Hòa, Quận Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
            <Phone className="h-4 w-4 text-slate-500" />
            <span>
              Điện thoại:{" "}
              <a
                href="tel:0938369896"
                className="font-medium text-[#EE0033] hover:underline"
              >
                09.3836.9896
              </a>
            </span>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <Mail className="h-5 w-5 text-[#EE0033]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#EE0033]">
                Hỗ trợ & liên hệ
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Email:{" "}
                <a
                  href="mailto:support@tmgs.vn"
                  className="font-medium text-[#EE0033] hover:underline"
                >
                  support@tmgs.vn
                </a>
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Thời gian làm việc: 08:00 – 17:30 (Thứ 2 – Thứ 6)
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactInfoSection;
