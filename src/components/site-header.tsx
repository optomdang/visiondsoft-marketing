import Link from "next/link";
import { Eye } from "lucide-react";
import { CONTACT_LINKS } from "@/content/contact";

const navLinkClass =
  "text-xs font-semibold tracking-wide text-apple-link hover:underline";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-apple-border/30 bg-apple-muted/90 backdrop-blur-md">
      <div className="mx-auto grid h-12 max-w-[1024px] grid-cols-3 items-center px-6">
        <Link href="/" className="justify-self-start text-apple-text" aria-label="VisionD Soft">
          <Eye className="h-4 w-4" strokeWidth={2.25} />
        </Link>

        <nav className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="text-xs font-semibold tracking-widest text-apple-secondary hover:text-apple-text"
          >
            VisionD
          </Link>
          <Link href="/#san-pham" className={navLinkClass}>
            Sản phẩm
          </Link>
          <Link href="/bang-gia" className={navLinkClass}>
            Báo giá
          </Link>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <a
            href={CONTACT_LINKS.community}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] font-medium text-apple-link hover:underline sm:inline"
          >
            Cộng đồng
          </a>
          <Link href="/#contact" className="apple-btn-pill">
            Dùng thử
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-apple-border/50 bg-white py-12 text-[12px] text-apple-secondary">
      <div className="mx-auto max-w-[1024px] space-y-4 px-6">
        <div className="flex flex-wrap gap-4">
          <Link href="/bang-gia" className="hover:text-apple-text">
            Bảng giá
          </Link>
          <a href="mailto:hello@visiondsoft.com" className="hover:text-apple-text">
            hello@visiondsoft.com
          </a>
        </div>
        <p>Bản quyền © {new Date().getFullYear()} VisionD Soft. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
}
