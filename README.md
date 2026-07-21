# visiondsoft-marketing

Website marketing cho **VisionD Soft** — landing page & bảng giá công khai.

- Domain dự kiến: [visiondsoft.com](https://visiondsoft.com)
- App sản phẩm: `app.visiondsoft.com` (repo `visiond-clinic`, tách biệt)

## Chạy local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Mở [http://localhost:3001](http://localhost:3001).

Port **3001** để không trùng với app `visiond-clinic` (thường chạy `localhost:3000`).

## Trang

| Route | Mô tả |
|-------|--------|
| `/` | Landing: hero, tính năng, teaser bảng giá, FAQ |
| `/bang-gia` | Bảng giá đầy đủ + bảng so sánh tính năng (theo PDF) |

## Cấu trúc

- `src/content/pricing.ts` — gói giá, hạn mức, bảng so sánh, FAQ
- `src/components/` — header, pricing cards, comparison table

## Deploy (Vercel)

Repo này deploy **riêng** với app `visiond-clinic` — không dùng chung Neon hay database.

| Domain | Vercel project |
|--------|----------------|
| `www.visiondsoft.com` (chính) | `visiondsoft-marketing` |
| `visiondsoft.com` → redirect `www` | `visiondsoft-marketing` |
| `app.visiondsoft.com` | `visiond-clinic` |

> Không cấu hình redirect ngược `www` → apex trong `vercel.json` — sẽ xung đột với Domains trên Vercel và làm vỡ CSS/ảnh.

**Biến môi trường Production** (Vercel → Settings → Environment Variables):

- `NEXT_PUBLIC_APP_URL` = `https://app.visiondsoft.com`
- `NEXT_PUBLIC_CONTACT_FACEBOOK`, `NEXT_PUBLIC_CONTACT_ZALO`, … (tuỳ chọn, có default trong code)

Push lên `main` → Vercel tự build & deploy.

## Ghi chú

- Giá trong `pricing.ts` lấy từ **Bảng Báo Giá - VISIOND SOFT** (chưa VAT).
- Thanh toán / kích hoạt tự động: Sprint 2 (chưa có trong repo này).
