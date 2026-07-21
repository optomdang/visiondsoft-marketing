import type { Metadata } from "next";
import Link from "next/link";
import { PricingCards } from "@/components/pricing-cards";
import { PricingComparisonTable } from "@/components/pricing-comparison";
import { CONTACT_LINKS } from "@/content/contact";
import { PLAN_TIERS, PRICING_FEATURE_ROWS } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Bảng giá",
  description:
    "Bảng giá VisionD Soft: Free, Pro, Pro+, Ultra và System. Giá công khai chưa VAT — phù hợp cửa hàng kính và phòng khám mắt.",
};

export default function BangGiaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl">
          Bảng báo giá VisionD Soft
        </h1>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          Hệ thống tích hợp công nghệ AI, khuyến nghị chuyên gia, dữ liệu nghiên cứu khoa học cập nhật mới nhất.
          Gói <strong>Ultra</strong> được khuyên dùng cho phòng khám chuyên sâu.
        </p>
      </div>

      <div className="mt-10">
        <PricingCards />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {PLAN_TIERS.filter(p => p.id === "system").map(plan => (
          <div
            key={plan.id}
            className="flex flex-1 min-w-[280px] items-center justify-between gap-4 rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 px-5 py-4"
          >
            <div>
              <p className="font-extrabold text-slate-800">{plan.name} — Tùy biến doanh nghiệp</p>
              <p className="text-sm text-slate-500">Không giới hạn người dùng, tính năng đầy đủ + hỗ trợ riêng</p>
            </div>
            <a
              href={plan.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0 whitespace-nowrap"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs italic text-slate-500">
        Giá niêm yết chưa bao gồm VAT (nếu có)
      </p>

      <section className="mt-14">
        <h2 className="section-title">So sánh chi tiết</h2>
        <p className="section-sub">
          Đầy đủ {PRICING_FEATURE_ROWS.length} dòng tính năng theo bảng báo giá chính thức. Hạn mức reset theo ngày.
        </p>
        <div className="mt-6 min-w-0">
          <PricingComparisonTable />
        </div>
      </section>

      <section id="dang-ky" className="mt-14 rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 to-peach-50 p-6 text-center md:p-8">
        <h2 className="text-xl font-extrabold text-slate-800">Chọn gói và bắt đầu</h2>
        <p className="mt-2 text-sm text-slate-600">
          Thanh toán trực tuyến & kích hoạt tự động đang triển khai. Liên hệ để được hỗ trợ ngay.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT_LINKS.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Liên hệ tư vấn
          </a>
          <Link href="/" className="btn-outline">
            Về trang chủ
          </Link>
        </div>
      </section>
    </div>
  );
}
