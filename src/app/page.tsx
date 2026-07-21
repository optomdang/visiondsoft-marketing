import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ClickableLandingImage } from "@/components/clickable-landing-image";
import { LandingFeatureSlider } from "@/components/landing-feature-slider";
import { TrialSignupForm } from "@/components/trial-signup-form";
import { ZaloMessageButton } from "@/components/zalo-message-button";
import { ZALO_MESSAGES } from "@/content/contact";
import {
  LANDING_HERO,
  LANDING_KSCT,
  LANDING_SPLIT,
} from "@/content/landing";

export const metadata: Metadata = {
  title: "VisionD Soft — Phần mềm quản lý cửa hàng kính & phòng khám mắt",
  description:
    "Vận hành toàn bộ phòng khám trên một màn hình: hồ sơ bệnh nhân, đặt lịch, kho, tài chính và kiểm soát tiến triển cận thị.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero — dashboard */}
      <section className="bg-apple-muted pt-6 pb-0 text-center sm:pt-8">
        <div className="px-4">
          <h1 className="mb-2 bg-gradient-to-r from-brand-600 via-peach-500 to-pink-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            {LANDING_HERO.title}
          </h1>
          <p className="mx-auto max-w-3xl text-base font-medium tracking-tight text-apple-text sm:text-xl">
            {LANDING_HERO.subtitle}
          </p>
          <div className="mt-3">
            <ZaloMessageButton
              message={ZALO_MESSAGES.register}
              className="inline-flex items-center gap-1 text-lg text-apple-link hover:underline"
            >
              {LANDING_HERO.cta}
              <ChevronRight className="h-4 w-4" />
            </ZaloMessageButton>
          </div>
        </div>

        <div className="mx-auto mt-4 w-full max-w-[1440px] px-0 sm:px-10">
          <ClickableLandingImage
            src={LANDING_HERO.image}
            alt={LANDING_HERO.imageAlt}
            fill
            priority
            wrapperClassName="relative h-[48vh] min-h-[280px] w-full overflow-hidden rounded-t-3xl border-x border-t border-apple-border/50 shadow-2xl"
            className="object-cover object-top"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
        </div>
      </section>

      {/* KSCT */}
      <section
        id="san-pham"
        className="scroll-mt-12 bg-white pt-6 pb-0 text-center text-apple-text sm:pt-8"
      >
        <div className="px-4">
          <span className="mb-1 block text-[10px] font-bold tracking-widest text-apple-link uppercase sm:text-[11px]">
            {LANDING_KSCT.eyebrow}
          </span>
          <h2 className="mb-2 text-[1.8rem] font-bold tracking-tight text-apple-text sm:text-[3rem]">
            {LANDING_KSCT.title}
          </h2>
          <p className="mx-auto text-[clamp(0.6875rem,2.6vw,1.125rem)] font-normal whitespace-nowrap text-apple-secondary">
            {LANDING_KSCT.subtitle}
          </p>
        </div>

        <div className="mt-4 w-full bg-white px-4 pb-2 sm:px-6">
          <ClickableLandingImage
            src={LANDING_KSCT.image}
            alt={LANDING_KSCT.imageAlt}
            useNativeImg
            wrapperClassName="mx-auto block w-full max-w-[1200px] overflow-hidden rounded-2xl border border-apple-border/40 shadow-sm"
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      {/* Split — patients, analytics & appointments */}
      <section className="grid w-full grid-cols-1 items-stretch gap-3 bg-white p-3 lg:grid-cols-3">
        {LANDING_SPLIT.map(block => (
          <div
            key={block.title}
            className="flex flex-col rounded-3xl bg-apple-muted px-4 pb-5 pt-5 text-center sm:px-6 sm:pb-5 sm:pt-5"
          >
            <div className="mb-5 flex flex-col sm:mb-5">
              <h3 className="mb-1 text-2xl font-semibold text-apple-text sm:text-3xl">{block.title}</h3>
              <p className="text-sm text-apple-secondary sm:text-base">{block.description}</p>
            </div>
            <ClickableLandingImage
              src={block.image}
              alt={block.imageAlt}
              useNativeImg
              wrapperClassName="flex h-[220px] w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm sm:h-[280px]"
              className="max-h-full max-w-full object-contain object-center"
            />
          </div>
        ))}
      </section>

      <LandingFeatureSlider />

      {/* Sign up */}
      <section
        id="contact"
        className="scroll-mt-12 border-t border-apple-border/30 bg-apple-muted px-6 py-14 text-center sm:py-16"
      >
        <div className="mx-auto max-w-xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-apple-text sm:text-5xl">
            Thử nghiệm VisionD.
          </h2>
          <TrialSignupForm />
          <p className="mt-6 text-sm text-apple-secondary">
            Hoặc xem{" "}
            <Link href="/bang-gia" className="text-apple-link hover:underline">
              bảng giá công khai
            </Link>{" "}
            trước khi đăng ký.
          </p>
        </div>
      </section>
    </div>
  );
}
