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

export function buildZaloWebChatUrl(message: string): string {
  const phone = getZaloPhone();
  const params = new URLSearchParams({ msg: message });
  return `https://zalo.me/${phone}?${params.toString()}`;
}

export function buildZaloDesktopChatUrl(message: string): string {
  const params = new URLSearchParams({
    phone: getZaloPhone(),
    msg: message,
  });
  return `zalo://conversation?${params.toString()}`;
}

function isMobileDevice(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function launchCustomProtocol(url: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function openZaloChat(message: string): void {
  if (isMobileDevice()) {
    window.location.assign(buildZaloWebChatUrl(message));
    return;
  }

  launchCustomProtocol(buildZaloDesktopChatUrl(message));
}

export async function openZaloWithMessage(message: string): Promise<boolean> {
  const copied = await copyToClipboard(message);
  openZaloChat(message);
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

export function isZaloDesktopPreferred(): boolean {
  return !isMobileDevice();
}
