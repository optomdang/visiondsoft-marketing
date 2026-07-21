"use client";

import { useState } from "react";

export function TrialSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-xl border border-apple-border bg-white px-4 py-4 text-sm text-apple-secondary">
        Đã tiếp nhận yêu cầu. Đội ngũ VisionD Soft sẽ liên hệ trong thời gian sớm nhất.
      </p>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Tên phòng khám / Trung tâm kính"
        className="apple-input"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="text" required placeholder="Họ và tên" className="apple-input" />
        <input type="tel" required placeholder="Số điện thoại" className="apple-input" />
      </div>
      <button type="submit" className="apple-btn-primary w-full">
        Gửi yêu cầu thiết lập hệ thống
      </button>
    </form>
  );
}
