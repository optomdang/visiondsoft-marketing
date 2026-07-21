import type { ReactNode } from "react";
import { CONTACT_LINKS } from "@/content/contact";

type BubbleLink = {
  href: string;
  label: string;
  className: string;
  icon: ReactNode;
  external?: boolean;
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282 3.284 3.284 0 0 1 3.284-3.282 3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612 3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863 1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89 1.945 1.945 0 0 0 0 3.89" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

const BUBBLES: BubbleLink[] = [
  {
    href: CONTACT_LINKS.facebook,
    label: "Facebook VisionD Soft",
    className: "bg-[#1877F2] text-white hover:bg-[#166fe5]",
    icon: <FacebookIcon />,
    external: true,
  },
  {
    href: CONTACT_LINKS.zalo,
    label: "Chat Zalo",
    className: "bg-[#0068FF] text-white hover:bg-[#0052cc]",
    icon: <ZaloIcon />,
    external: true,
  },
  {
    href: `tel:${CONTACT_LINKS.phone.replace(/\s/g, "")}`,
    label: `Gọi ${CONTACT_LINKS.phone}`,
    className: "bg-emerald-500 text-white hover:bg-emerald-600",
    icon: <PhoneIcon />,
  },
];

export function ContactFloatingButtons() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-8">
      {BUBBLES.map(bubble => (
        <a
          key={bubble.label}
          href={bubble.href}
          aria-label={bubble.label}
          title={bubble.label}
          {...(bubble.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg ring-1 ring-black/5 transition hover:scale-105 ${bubble.className}`}
        >
          {bubble.icon}
        </a>
      ))}
    </div>
  );
}
