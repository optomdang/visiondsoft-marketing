"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { X } from "lucide-react";

type ClickableLandingImageProps = Omit<ImageProps, "onClick"> & {
  wrapperClassName?: string;
  lightboxClassName?: string;
  lightboxSrc?: string;
  /** Dùng thẻ img gốc — tránh crop do Next/Image trên ảnh biểu đồ lớn */
  useNativeImg?: boolean;
};

export function ClickableLandingImage({
  wrapperClassName,
  lightboxClassName,
  lightboxSrc,
  useNativeImg = false,
  alt,
  src,
  className,
  fill,
  ...props
}: ClickableLandingImageProps) {
  const [open, setOpen] = useState(false);
  const altText = typeof alt === "string" ? alt : "Ảnh minh họa";
  const previewSrc = typeof src === "string" ? src : undefined;
  const expandedSrc = lightboxSrc ?? previewSrc;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  return (
    <>
      <button
        type="button"
        aria-label={`Xem full ảnh: ${altText}`}
        onClick={() => setOpen(true)}
        className={`group flex w-full cursor-zoom-in border-0 bg-transparent p-0 text-left ${wrapperClassName ?? ""}`}
      >
        {useNativeImg && previewSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewSrc}
            alt={altText}
            className={`block h-auto w-full max-w-full ${className ?? ""}`}
            decoding="async"
            draggable={false}
          />
        ) : (
          <Image
            alt={alt}
            src={src}
            fill={fill}
            className={`${fill ? "" : "!relative !h-auto !w-full"} ${className ?? ""} transition group-hover:opacity-95`}
            {...props}
          />
        )}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={altText}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Đóng"
            onClick={close}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={expandedSrc}
            alt={altText}
            className={`max-h-[92vh] max-w-full object-contain rounded-2xl sm:rounded-3xl ${lightboxClassName ?? ""}`}
            onClick={event => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
