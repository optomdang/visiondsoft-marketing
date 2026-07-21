#!/usr/bin/env bash
# Thiết lập deploy marketing site — chạy sau khi đã tạo repo GitHub & đăng nhập Vercel
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

GITHUB_REPO="${GITHUB_REPO:-https://github.com/optomdang/visiondsoft-marketing.git}"
BRANCH="${BRANCH:-main}"

echo "→ Remote GitHub: $GITHUB_REPO"
if git remote get-url origin &>/dev/null; then
  git remote set-url origin "$GITHUB_REPO"
else
  git remote add origin "$GITHUB_REPO"
fi

echo "→ Push lên GitHub..."
git push -u origin "$BRANCH"

echo ""
echo "→ Deploy lên Vercel (project mới, tách khỏi visiond-clinic)..."
echo "  Lần đầu sẽ hỏi đăng nhập và tên project."
echo ""

if ! command -v vercel &>/dev/null; then
  echo "  Dùng npx vercel (chưa cài global CLI)"
  VERCEL=(npx vercel)
else
  VERCEL=(vercel)
fi

"${VERCEL[@]}" --prod \
  --env "NEXT_PUBLIC_APP_URL=https://app.visiondsoft.com"

echo ""
echo "✓ Xong bước push + deploy preview/production."
echo ""
echo "Tiếp theo (Vercel Dashboard — bạn làm thủ công):"
echo "  1. Settings → Domains → thêm visiondsoft.com và www.visiondsoft.com"
echo "  2. DNS tại nhà cung cấp domain:"
echo "       A     @    → 76.76.21.21"
echo "       CNAME www  → cname.vercel-dns.com"
echo "  3. Giữ nguyên app.visiondsoft.com trỏ project visiond-clinic"
