export type LandingSlide = {
  index: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const LANDING_HERO = {
  title: "VisionD",
  subtitle: "Số hoá dữ liệu - Vận hành chuyên nghiệp - Đột phá doanh thu",
  cta: "Đăng ký ngay",
  image: "/features/hero-dashboard.webp",
  imageAlt: "Dashboard VisionD Soft — tổng quan phòng khám",
};

export const LANDING_KSCT = {
  eyebrow: "Nhãn khoa chuyên sâu",
  title: "Kiểm soát tiến triển cận thị.",
  subtitle: "Cá nhân hoá dữ liệu bệnh nhân, cập nhật nghiên cứu khoa học mới nhất hằng năm...",
  image: "/features/myopia-ksct-chart.png",
  imageAlt: "Biểu đồ tiến triển cận thị trên VisionD Soft",
};

export const LANDING_SPLIT = [
  {
    title: "Quản lý bệnh nhân",
    description: "Số hóa toàn bộ bệnh án điện tử.",
    image: "/features/patient-records.webp",
    imageAlt: "Danh sách khách hàng trên VisionD Soft",
  },
  {
    title: "Phân tích dữ liệu",
    description: "Phân tích sâu hiệu quả thực tế các phương pháp KSCT.",
    image: "/features/data-analysis-ksct.png",
    imageAlt: "Phân tích hiệu quả kiểm soát cận thị trên VisionD Soft",
  },
  {
    title: "Đặt lịch & Hẹn khám",
    description: "Tự động nhắc lịch qua Email hoặc Zalo.",
    image: "/features/appointments-booking.png",
    imageAlt: "Quản lý đặt lịch trên VisionD Soft",
  },
] as const;

export const LANDING_SLIDES: LandingSlide[] = [
  {
    index: "01 / Kho Hàng",
    category: "Kho Hàng",
    title: "Tạo ma trận tròng kính.",
    description: "Nhập hàng nghìn sản phẩm trong 1 phút.",
    image: "/features/inventory-lens-matrix.png",
    imageAlt: "Ma trận biến thể tròng kính trên VisionD Soft",
  },
  {
    index: "02 / Tài Chính",
    category: "Tài Chính",
    title: "Sổ quỹ & Báo cáo tài chính",
    description: "Xuất hóa đơn và báo cáo thuế không cần kế toán.",
    image: "/features/finance-reports.png",
    imageAlt: "Báo cáo tài chính trên VisionD Soft",
  },
  {
    index: "03 / Nhân sự",
    category: "Nhân sự",
    title: "Phân quyền chặt chẽ.",
    description: "Phân quyền đúng công việc và phạm vi cho phép.",
    image: "/features/staff-permissions.png",
    imageAlt: "Phân quyền theo công việc trên VisionD Soft",
  },
  {
    index: "04 / Công cụ miễn phí",
    category: "Công cụ miễn phí",
    title: "Đo thông số gọng & KCĐT AI",
    description: "Xác định chính xác thông số gọng tới 0.01mm.",
    image: "/features/kcdt-ai.png",
    imageAlt: "Công cụ đo KCĐT AI trên VisionD Soft",
  },
  {
    index: "05 / Công cụ miễn phí",
    category: "Công cụ miễn phí",
    title: "Xây dựng phác đồ KSCT",
    description: "Tiên lượng nguy cơ tiến triển cận thị cá nhân hoá.",
    image: "/features/ksct-prognosis.png",
    imageAlt: "Tiên lượng và phác đồ KSCT trên VisionD Soft",
  },
  {
    index: "06 / Giao diện",
    category: "Giao diện",
    title: "Giao diện phiếu khám, hoá đơn...",
    description: "Giao diện phiếu khám, hoá đơn, báo cáo thân thiện, hiện đại.",
    image: "/features/exam-invoice-ui.png",
    imageAlt: "Giao diện phiếu khám và hoá đơn trên VisionD Soft",
  },
  {
    index: "07 / Dashboard",
    category: "Dashboard",
    title: "Báo cáo chuyên sâu",
    description: "Nhiều báo cáo chuyên sâu về tài chính, chuyên môn, kho hàng.",
    image: "/features/dashboard-reports.png",
    imageAlt: "Dashboard báo cáo chuyên sâu trên VisionD Soft",
  },
  {
    index: "08 / Cá nhân",
    category: "Cá nhân",
    title: "Quản lý lịch làm việc",
    description: "Theo dõi lịch làm việc trực quan.",
    image: "/features/work-schedule.png",
    imageAlt: "Quản lý lịch làm việc trên VisionD Soft",
  },
];

export const LANDING_SLIDER = {
  title: "Vô vàn tính năng đặc thù, độc quyền",
  note:
    "Các tính năng đặc thù quản lý phòng khám mà các phần mềm khác không có, dữ liệu các nghiên cứu khoa học cập nhật thường xuyên vào các tính năng phân tích dữ liệu/cảnh báo, các công cụ miễn phí cực mạnh.",
};
