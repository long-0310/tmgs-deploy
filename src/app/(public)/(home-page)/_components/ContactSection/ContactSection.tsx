"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "@/components/Wrapper/Wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type ContactFormValues = {
  fullName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
};

function ContactSection() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      country: "vn",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form data:", data);
  }

  return (
    <Wrapper>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6">
        <div>
          <div className="w-full h-full flex items-center relative">
            <div className="aspect-3/3 relative w-full m-5 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.2417888416767!2d105.8000484317672!3d21.018810298226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5c1117a52d%3A0x2e80b45ead21127d!2zMzMgTmcuIDk5IMSQLiBOZ3V54buFbiBLaGFuZywgWcOqbiBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1763893798530!5m2!1svi!2s"
                style={{ border: 0 }}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute inset-x-0 bottom-0">
                <div
                  className="
                    border-white/60 
                    bg-white/60 p-4 shadow-lg backdrop-blur-md
                    flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between
                    "
                >
                  {/* Địa chỉ */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                      Địa chỉ
                    </p>
                    <p className="text-sm text-neutral-800">
                      Số 33, ngõ 99 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội
                    </p>
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                      Số điện thoại
                    </p>
                    <p className="text-sm text-neutral-800">
                      (+84) 936.370.690
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight">
                Liên hệ với chúng tôi
              </h1>
              <p className="text-sm text-muted-foreground">
                Kết nối với chuyên gia VCS: Giải pháp đúng theo nhu cầu riêng
                của doanh nghiệp! Hãy chia sẻ vấn đề hoặc mối quan tâm hiện tại
                của bạn - VCS sẽ đánh giá và đề xuất hướng tiếp cận phù hợp dựa
                trên kinh nghiệm và tri thức sâu trong từng ngành nghề của chúng
                tôi!
              </p>
            </div>

            {/* First / Last name */}
            <div className="space-y-1">
              <Label className="items-center" htmlFor="fullName">
                Họ và tên <span className="text-destructive h-1.5">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="Họ và tên"
                {...register("fullName", {
                  required: "Họ và tên bắt buộc",
                })}
              />
              {errors.fullName && (
                <p className="text-xs text-destructive h-1.5 mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label className="items-center" htmlFor="email">
                Email <span className="text-destructive h-1.5">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                {...register("email", {
                  required: "Email bắt buộc",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email is invalid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-destructive h-1.5 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label className="items-center" htmlFor="phone">
                Số điện thoại <span className="text-destructive h-1.5">*</span>
              </Label>
              <div className="flex gap-3">
                <div className="w-28">
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: "Country bắt buộc" }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="country" className="w-full">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vn">VN</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="flex-1">
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone", {
                      required: "Số điện thoại bắt buộc",
                      minLength: {
                        value: 6,
                        message: "Số điện thoại is too short",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive h-1.5 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <Label className="items-center" htmlFor="message">
                Lời nhắn <span className="text-destructive h-1.5">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Viết lời nhắn của bạn..."
                className="min-h-[140px] resize-none"
                {...register("message", {
                  required: "Lời nhắn là bắt buộc",
                  minLength: {
                    value: 10,
                    message: "Lời nhắn phải có ít nhất 10 ký tự",
                  },
                })}
              />
              {errors.message && (
                <p className="text-xs text-destructive h-1.5 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="mt-2 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Gửi tin nhắn"}
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactSection;
