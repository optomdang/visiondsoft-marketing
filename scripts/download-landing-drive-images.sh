#!/usr/bin/env bash
# Tải ảnh landing từ Google Drive (file phải bật "Anyone with the link").
# Usage: bash scripts/download-landing-drive-images.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/features"

download() {
  local id="$1"
  local name="$2"
  local dest="$OUT/${name}.png"
  echo "→ $name"
  curl -fsSL "https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t" -o "${dest}.tmp"
  if file -b --mime-type "${dest}.tmp" | grep -q '^image/'; then
    mv "${dest}.tmp" "$dest"
    echo "  OK $(file -b "$dest")"
  else
    rm -f "${dest}.tmp"
    echo "  FAIL — bật chia sẻ 'Anyone with the link' cho file Drive rồi chạy lại"
    return 1
  fi
}

download "1mNT86imphqA-yf8D3aVPedA5NAn6Btx3" "inventory-lens-matrix"
download "1DUrFaDKswZZ3mSOu3OTxrf0GeHlKcsOV" "finance-reports"
download "1Msc0i0BcyQBnj6Ph7Dqv7zlN10MwINa2" "staff-permissions"
download "1jOLchdaFzgBAKgeh4NiDZv4Y40ajQqJl" "kcdt-ai"
download "1XK5BWje3dYit7z19LoWY1Vig5s3cj6i_" "ksct-prognosis"
download "1W4h9epfOolqmm35RiXGXyoNwYpv46xPl" "appointments-booking"
download "1Vv2Vezz7H6Fx10JUt-EAfK1k2_-8yiaB" "exam-invoice-ui"
download "1LvDnNDCEZj-_3iiDtQSdXEqbVbP_e7Du" "dashboard-reports"
download "10JAjUdGagRNuPegj8rhi1K0FceGajC3_" "work-schedule"
download "13y_-LOYJt5cEQXeOM_Dz0CM0B4kz6K0g" "data-analysis-ksct"
echo "Done."
