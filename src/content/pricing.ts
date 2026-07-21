/** Nguồn: Bảng Báo Giá - VISIOND SOFT (PDF). Giá chưa gồm VAT. */

import { CONTACT_LINKS } from "@/content/contact";

export type PlanId = "free" | "pro" | "pro_plus" | "ultra" | "system";

export type PlanTier = {
  id: PlanId;
  name: string;
  badge?: string;
  dailyVnd: number | null;
  monthlyVnd: number | null;
  featureCount: number;
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
  quotas: {
    users: string;
    examsPerDay: string;
    financeDocsPerDay: string;
    ai: boolean;
  };
};

export const PLAN_TIERS: PlanTier[] = [
  {
    id: "free",
    name: "Free",
    badge: "Miễn phí",
    dailyVnd: 0,
    monthlyVnd: 0,
    featureCount: 20,
    cta: "Bắt đầu miễn phí",
    ctaHref: "#dang-ky",
    quotas: {
      users: "1",
      examsPerDay: "3",
      financeDocsPerDay: "3",
      ai: false,
    },
  },
  {
    id: "pro",
    name: "Pro",
    dailyVnd: 8082,
    monthlyVnd: 245_833,
    featureCount: 24,
    cta: "Chọn Pro",
    ctaHref: "#dang-ky",
    quotas: {
      users: "2",
      examsPerDay: "30",
      financeDocsPerDay: "30",
      ai: false,
    },
  },
  {
    id: "pro_plus",
    name: "Pro+",
    dailyVnd: 13_562,
    monthlyVnd: 412_500,
    featureCount: 28,
    cta: "Chọn Pro+",
    ctaHref: "#dang-ky",
    quotas: {
      users: "3",
      examsPerDay: "50",
      financeDocsPerDay: "50",
      ai: false,
    },
  },
  {
    id: "ultra",
    name: "Ultra",
    badge: "Khuyên dùng",
    dailyVnd: 24_521,
    monthlyVnd: 745_833,
    featureCount: 37,
    highlighted: true,
    cta: "Chọn Ultra",
    ctaHref: "#dang-ky",
    quotas: {
      users: "8",
      examsPerDay: "Không giới hạn",
      financeDocsPerDay: "Không giới hạn",
      ai: true,
    },
  },
  {
    id: "system",
    name: "System",
    badge: "Tùy biến",
    dailyVnd: null,
    monthlyVnd: null,
    featureCount: 38,
    cta: "Liên hệ tư vấn",
    ctaHref: CONTACT_LINKS.zalo,
    quotas: {
      users: "Không giới hạn",
      examsPerDay: "Không giới hạn",
      financeDocsPerDay: "Không giới hạn",
      ai: true,
    },
  },
];

export type FeatureCell = boolean | string;

export type PricingFeatureRow = {
  group?: string;
  label: string;
  free: FeatureCell;
  pro: FeatureCell;
  pro_plus: FeatureCell;
  ultra: FeatureCell;
  system: FeatureCell;
  highlight?: boolean;
};

/** 38 dòng tính năng — khớp bảng báo giá VisionD Soft (HTML/PDF). */
export const PRICING_FEATURE_ROWS: PricingFeatureRow[] = [
  { label: "Tổng số tính năng", free: "20", pro: "24", pro_plus: "28", ultra: "37", system: "38", highlight: true },
  { label: "Dashboard", free: false, pro: "Xem", pro_plus: "Tuỳ chỉnh", ultra: "Tuỳ chỉnh", system: "Tuỳ chỉnh" },
  { label: "Mẫu phiếu khám", free: "2", pro: "3", pro_plus: "7", ultra: "Tuỳ chỉnh", system: "Tuỳ chỉnh" },
  { label: "Danh sách khách hàng", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Thêm mới/Lọc/Tìm kiếm KH", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý thông tin bệnh nhân, gắn nhãn phân loại", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý lịch sử khám (nhanh)", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Gửi khảo sát kiểm soát cận thị (tuỳ chỉnh) qua Zalo", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Lưu dữ liệu ảnh", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Quản lý lịch sử hoá đơn (nhanh tại trang bệnh nhân)", free: false, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Theo dõi tiến triển bệnh (KSCT, Nhược thị...)", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "In mẫu Scan / Scan phiếu khám", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Gửi kết quả khám qua Email/Zalo", free: false, pro: false, pro_plus: true, ultra: true, system: true },
  { label: "Đặt lịch khám", free: false, pro: false, pro_plus: "Không chia ca", ultra: "Full", system: "Full" },
  { label: "Hoá đơn bán hàng (Thêm/Sửa/Xoá/Tìm kiếm)", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Hoá đơn Chi phí (Thêm/Sửa/Xoá/Tìm kiếm)", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Sổ quỹ (Thu/Chi)", free: false, pro: "Xem", pro_plus: "Tuỳ chỉnh", ultra: "Tuỳ chỉnh", system: "Tuỳ chỉnh" },
  { label: "Báo cáo tài chính/thuế", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Dashboard & Báo cáo kho", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Theo dõi tồn kho", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý nhà cung cấp", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý danh mục hàng hoá", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý danh sách sản phẩm", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Tạo/Thêm sản phẩm nhanh (10.000sp/phút)", free: false, pro: false, pro_plus: true, ultra: true, system: false },
  { label: "Đặt hàng và nhập kho", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Tạo phiếu nhập hàng nhanh (10.000sp/phút)", free: false, pro: false, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý nhãn dán", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Chuyển kho", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Đo KCDT AI", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Tiên lượng và So sánh phác đồ KSCT", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Bảng thị lực", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Công cụ tính khoảng cách đỉnh", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Chuyển đổi CS Kính gọng sang KTX", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Quản lý hệ thống (chuỗi)", free: false, pro: false, pro_plus: false, ultra: false, system: true },
  { label: "Quản lý nhân sự (ca làm, ngày làm, bệnh nhân...)", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Thông báo hệ thống (sắp hết hàng, hết hạn...)", free: true, pro: true, pro_plus: true, ultra: true, system: true },
  { label: "Cấu hình/Gửi thông báo", free: false, pro: false, pro_plus: false, ultra: true, system: true },
  { label: "Tải dữ liệu bệnh án/hoá đơn lưu trữ tại máy", free: false, pro: true, pro_plus: true, ultra: true, system: true },
];

export const PRICING_QUOTA_ROWS: PricingFeatureRow[] = [
  { label: "Số tài khoản người dùng", free: "1", pro: "2", pro_plus: "3", ultra: "8", system: "Vô hạn" },
  { label: "Số phiếu khám mỗi ngày", free: "3", pro: "30", pro_plus: "50", ultra: "Vô hạn", system: "Vô hạn" },
  { label: "Số hoá đơn/phiếu chi trong ngày", free: "3", pro: "30", pro_plus: "50", ultra: "Vô hạn", system: "Vô hạn" },
  { label: "Tích hợp AI", free: false, pro: false, pro_plus: false, ultra: true, system: true },
];

export const LANDING_MODULES = [
  { title: "Khách hàng & phiếu khám", desc: "Hồ sơ tập trung, nhãn phân loại, lịch sử khám nhanh." },
  { title: "Đặt lịch online", desc: "Link công khai, chia ca, sửa lịch — giảm tải Zalo/điện thoại." },
  { title: "Bán hàng & sổ quỹ", desc: "Hóa đơn, chi phí, thu chi — phù hợp cửa hàng kính nhỏ." },
  { title: "Kho & sản phẩm", desc: "Tròng, gọng, danh mục, nhập kho theo quy trình 4 bước." },
  { title: "Dashboard KSCT", desc: "Theo dõi tiến triển cận thị, biểu đồ phác đồ chuyên sâu." },
  { title: "Phân quyền nhân viên", desc: "Tài khoản theo vai trò — lễ tân, KTV, quản lý." },
] as const;

export const FAQ_ITEMS = [
  {
    q: "VisionD phù hợp cửa hàng kính hay phòng khám?",
    a: "Cả hai: cửa hàng kính nhỏ dùng gói Free/Pro cho khách hàng và bán hàng; phòng khám thêm phiếu khám, KSCT và đặt lịch từ Pro+ trở lên.",
  },
  {
    q: "Giá trên đã gồm VAT chưa?",
    a: "Chưa. Giá niêm yết chưa bao gồm thuế VAT (nếu có). Gói System vui lòng liên hệ hotline để báo giá tùy biến.",
  },
  {
    q: "Sau thanh toán tôi dùng ngay được không?",
    a: "Có — hệ thống tự kích hoạt tài khoản sau khi thanh toán thành công (đang triển khai). Bạn nhận email hướng dẫn đăng nhập app.",
  },
  {
    q: "Dữ liệu có an toàn không?",
    a: "Dữ liệu lưu trên hạ tầng cloud, phân tách theo từng phòng khám/cửa hàng (multi-tenant).",
  },
] as const;

export function formatVnd(amount: number): string {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

export function formatPlanPrice(plan: PlanTier): {
  primary: string;
  primarySuffix?: string;
  secondary?: string;
} {
  if (plan.monthlyVnd === null) {
    return { primary: "Liên hệ" };
  }
  if (plan.monthlyVnd === 0) {
    return { primary: "0đ", primarySuffix: "/ngày", secondary: "Miễn phí" };
  }
  return {
    primary: plan.dailyVnd ? `~${formatVnd(plan.dailyVnd)}` : formatVnd(plan.monthlyVnd),
    primarySuffix: plan.dailyVnd ? "/ngày" : undefined,
    secondary: `(~${formatVnd(plan.monthlyVnd)}/tháng)`,
  };
}
