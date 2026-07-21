import { CONTACT_LINKS } from "@/content/contact";

export function getZaloPhone(): string {
  const fromUrl = CONTACT_LINKS.zalo.match(/zalo\.me\/([^/?#]+)/)?.[1];
  if (fromUrl) return fromUrl.replace(/\s/g, "");

  return CONTACT_LINKS.phone.replace(/\s/g, "");
}

export function buildTrialRequestMessage(input: {
  clinicName: string;
  fullName: string;
  phone: string;
}): string {
  return [
    "Xin chào VisionD Soft, tôi muốn thử nghiệm hệ thống.",
    "",
    `• Phòng khám/Trung tâm: ${input.clinicName}`,
    `• Họ tên: ${input.fullName}`,
    `• SĐT: ${input.phone}`,
  ].join("\n");
}

export function buildZaloChatUrl(message: string): string {
  const phone = getZaloPhone();
  const params = new URLSearchParams({ msg: message });
  return `https://zalo.me/${phone}?${params.toString()}`;
}

export function openZaloChat(url: string): void {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.assign(url);
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

export async function openZaloWithMessage(message: string): Promise<boolean> {
  const copied = await copyToClipboard(message);
  openZaloChat(buildZaloChatUrl(message));
  return copied;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
