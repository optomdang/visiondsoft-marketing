import { CONTACT_LINKS } from "@/content/contact";

function extractRawPhoneDigits(): string {
  const zalo = CONTACT_LINKS.zalo.trim();

  const fromUrl = zalo.match(/zalo\.me\/(\d{8,12})/i)?.[1];
  if (fromUrl) return fromUrl.replace(/\s/g, "");

  const digitsOnly = zalo.replace(/\D/g, "");
  if (digitsOnly.length >= 8 && digitsOnly.length <= 12) return digitsOnly;

  return CONTACT_LINKS.phone.replace(/\s/g, "");
}

/** Format hiển thị trên zalo.me: 0339759992 */
export function getZaloPhoneLocal(): string {
  const digits = extractRawPhoneDigits();

  if (digits.startsWith("84") && digits.length >= 11) {
    return `0${digits.slice(2)}`;
  }

  return digits;
}

/** Format cho zalo:// và chat.zalo.me: 84339759992 */
export function getZaloPhoneInternational(): string {
  const digits = extractRawPhoneDigits();

  if (digits.startsWith("84")) return digits;
  if (digits.startsWith("0")) return `84${digits.slice(1)}`;

  return `84${digits}`;
}

/** @deprecated Dùng getZaloPhoneLocal() */
export function getZaloPhone(): string {
  return getZaloPhoneLocal();
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
  const params = new URLSearchParams({ msg: message });
  return `https://zalo.me/${getZaloPhoneLocal()}?${params.toString()}`;
}

export function buildZaloDesktopChatUrl(): string {
  return `zalo://conversation?phone=${getZaloPhoneInternational()}`;
}

export function buildZaloChatFallbackUrl(): string {
  return `https://chat.zalo.me/?phone=${getZaloPhoneInternational()}`;
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
    window.location.assign(
      message ? buildZaloWebChatUrl(message) : `https://zalo.me/${getZaloPhoneLocal()}`,
    );
    return;
  }

  launchCustomProtocol(buildZaloDesktopChatUrl());
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
