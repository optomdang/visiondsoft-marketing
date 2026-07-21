export const CONTACT_LINKS = {
  facebook: process.env.NEXT_PUBLIC_CONTACT_FACEBOOK ?? "https://www.facebook.com/visiondsoft",
  community:
    process.env.NEXT_PUBLIC_CONTACT_COMMUNITY
    ?? "https://www.facebook.com/groups/2079491886255838",
  zalo: process.env.NEXT_PUBLIC_CONTACT_ZALO ?? "https://zalo.me/0868213718",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0868213718",
};

export const ZALO_MESSAGES = {
  trial: "Tôi muốn dùng thử phần mềm",
  register: "Tôi muốn đăng ký các gói phần mềm, tư vấn thêm cho tôi",
} as const;
