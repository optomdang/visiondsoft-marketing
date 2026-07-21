"use client";

import { useState } from "react";
import {
  buildTrialRequestMessage,
  isZaloDesktopPreferred,
  openZaloWithMessage,
} from "@/lib/zalo";

export function TrialSignupForm() {
  const [clinicName, setClinicName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = buildTrialRequestMessage({ clinicName, fullName, phone });
    const didCopy = await openZaloWithMessage(message);

    setCopied(didCopy);
    setSubmitted(true);
  }

  if (submitted) {
    const pasteHint = isZaloDesktopPreferred()
      ? "Nội dung đã được sao chép — nhấn Cmd+V (hoặc Ctrl+V) trong ô chat Zalo để dán."
      : copied
        ? "Nội dung tin nhắn đã được sao chép. Nếu Zalo chưa tự điền, hãy dán vào ô chat."
        : "Vui lòng gõ hoặc dán nội dung yêu cầu vào ô chat Zalo.";

    return (
      <div className="space-y-3 rounded-xl border border-apple-border bg-white px-4 py-4 text-sm text-apple-secondary">
        <p className="font-medium text-apple-text">
          {isZaloDesktopPreferred() ? "Đã mở ứng dụng Zalo trên máy tính." : "Đã mở Zalo để gửi yêu cầu."}
        </p>
        <p>{pasteHint}</p>
        <p className="text-xs">
          Zalo yêu cầu bạn bấm <strong className="font-semibold text-apple-text">Gửi</strong> thủ công — website không thể tự gửi tin nhắn thay bạn.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={clinicName}
        onChange={event => setClinicName(event.target.value)}
        placeholder="Tên phòng khám / Trung tâm kính"
        className="apple-input"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          value={fullName}
          onChange={event => setFullName(event.target.value)}
          placeholder="Họ và tên"
          className="apple-input"
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={event => setPhone(event.target.value)}
          placeholder="Số điện thoại"
          className="apple-input"
        />
      </div>
      <button type="submit" className="apple-btn-primary w-full">
        Gửi yêu cầu thiết lập hệ thống
      </button>
    </form>
  );
}
