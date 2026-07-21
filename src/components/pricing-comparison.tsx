import {
  formatVnd,
  PLAN_TIERS,
  PRICING_FEATURE_ROWS,
  PRICING_QUOTA_ROWS,
  type PlanId,
} from "@/content/pricing";
import { CellValue } from "@/components/pricing-cards";
import { cn } from "@/lib/cn";

const COLUMNS: PlanId[] = ["free", "pro", "pro_plus", "ultra", "system"];

/** ~51 ký tự dòng dài nhất — cột tính năng vừa khít; phần còn lại chia đều 5 cột gói */
const FEATURE_COL_CH = 52;

const featureColClass =
  "sticky left-0 z-10 whitespace-nowrap bg-inherit px-3 py-2 text-[13px] leading-snug";

const planColClass = "px-2 py-2 text-center";

function planHeaderPrice(planId: PlanId) {
  const plan = PLAN_TIERS.find(p => p.id === planId)!;
  if (plan.monthlyVnd === null) {
    return { daily: "Liên hệ", monthly: "Tùy biến dự án" };
  }
  if (plan.monthlyVnd === 0) {
    return { daily: "0đ", monthly: "Miễn phí" };
  }
  return {
    daily: `~${formatVnd(plan.dailyVnd!)}`,
    monthly: `(~${formatVnd(plan.monthlyVnd)}/tháng)`,
  };
}

function ultraColClass(extra?: string) {
  return cn("border-x border-blue-100/80 bg-blue-50/40", extra);
}

function FeatureRow({
  row,
  bold,
}: {
  row: (typeof PRICING_FEATURE_ROWS)[number];
  bold?: boolean;
}) {
  return (
    <tr
      className={cn(
        "border-b border-slate-100 last:border-0",
        row.highlight && "border-b-2 border-slate-200 bg-slate-100 font-bold",
        !row.highlight && "even:bg-slate-50/30 hover:bg-slate-50/80",
      )}
    >
      <td
        className={cn(
          featureColClass,
          "font-medium text-slate-700",
          bold && "font-bold text-slate-800",
        )}
      >
        {row.label}
      </td>
      {COLUMNS.map(col => (
        <td
          key={col}
          className={cn(
            planColClass,
            col === "ultra"
              ? ultraColClass("font-semibold text-blue-800")
              : "border-l border-slate-100",
          )}
        >
          <span className="inline-block whitespace-nowrap">
            <CellValue value={row[col]} />
          </span>
        </td>
      ))}
    </tr>
  );
}

export function PricingComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <colgroup>
          <col style={{ width: `${FEATURE_COL_CH}ch` }} />
          {COLUMNS.map(col => (
            <col key={col} />
          ))}
        </colgroup>
        <thead>
          <tr className="border-b-2 border-slate-200 bg-slate-50">
            <th className={cn(featureColClass, "z-20 bg-slate-50 pb-3 pt-7 text-left font-extrabold uppercase tracking-wide text-slate-800")}>
              Chi tiết tính năng
            </th>
            {COLUMNS.map(col => {
              const plan = PLAN_TIERS.find(p => p.id === col)!;
              const price = planHeaderPrice(col);
              const isUltra = col === "ultra";
              return (
                <th
                  key={col}
                  className={cn(
                    planColClass,
                    "relative pb-3 pt-7",
                    isUltra ? "border-b-2 border-blue-200 bg-blue-50" : "border-l border-slate-100",
                  )}
                >
                  {plan.badge && (
                    <span className="absolute left-1/2 top-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      {plan.badge}
                    </span>
                  )}
                  <div className={cn("whitespace-nowrap text-sm font-extrabold", isUltra ? "text-blue-700" : "text-slate-800")}>
                    {plan.name}
                  </div>
                  <div
                    className={cn(
                      "mt-0.5 whitespace-nowrap text-sm font-extrabold leading-tight",
                      col === "system"
                        ? "text-amber-600"
                        : col === "free"
                          ? "text-slate-500"
                          : isUltra
                            ? "text-blue-800"
                            : "text-emerald-600",
                    )}
                  >
                    {price.daily}
                    {col !== "system" && (
                      <span className="text-[10px] font-semibold">/ngày</span>
                    )}
                  </div>
                  <div className={cn("mt-0.5 whitespace-nowrap text-[9px] font-semibold uppercase leading-tight", isUltra ? "text-blue-600" : "text-slate-400")}>
                    {price.monthly}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {PRICING_FEATURE_ROWS.map(row => (
            <FeatureRow key={row.label} row={row} />
          ))}
        </tbody>
        <tfoot className="bg-slate-50/80">
          <tr>
            <td colSpan={6} className="h-3 bg-slate-100/50" />
          </tr>
          {PRICING_QUOTA_ROWS.map(row => (
            <tr key={row.label} className="border-t border-slate-200">
              <td className={cn(featureColClass, "bg-slate-50/95 font-bold text-slate-800")}>
                {row.label}
              </td>
              {COLUMNS.map(col => (
                <td
                  key={col}
                  className={cn(
                    planColClass,
                    "text-xs font-bold text-slate-700",
                    col === "ultra" ? ultraColClass("font-extrabold text-blue-700") : "border-l border-slate-200/50",
                  )}
                >
                  <span className="inline-block whitespace-nowrap">
                    <CellValue value={row[col]} />
                  </span>
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t-2 border-slate-300 bg-white">
            <td className={cn(featureColClass, "bg-white py-3 text-sm font-extrabold uppercase text-slate-900")}>
              Giá / ngày
            </td>
            {COLUMNS.map(col => {
              const price = planHeaderPrice(col);
              const isUltra = col === "ultra";
              return (
                <td
                  key={col}
                  className={cn(
                    planColClass,
                    "py-3",
                    isUltra
                      ? "border-x border-blue-700 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
                      : "border-l border-slate-200",
                  )}
                >
                  <div
                    className={cn(
                      "whitespace-nowrap font-extrabold leading-tight",
                      isUltra ? "text-lg text-white" : col === "system" ? "text-base text-amber-600" : "text-base text-emerald-600",
                      col === "free" && "text-slate-600",
                    )}
                  >
                    {price.daily}
                    {col !== "system" && col !== "free" && !isUltra && (
                      <span className="text-[10px] font-semibold">/ngày</span>
                    )}
                  </div>
                  <div
                    className={cn(
                      "mt-0.5 whitespace-nowrap text-[9px] font-semibold leading-tight",
                      isUltra ? "text-blue-100" : "text-slate-500",
                    )}
                  >
                    {price.monthly}
                  </div>
                </td>
              );
            })}
          </tr>
        </tfoot>
      </table>
      <p className="border-t border-slate-100 px-4 py-3 text-xs italic text-slate-500">
        * Giá trên chưa bao gồm thuế VAT (nếu có). Vui lòng liên hệ Hotline để được tư vấn gói System.
      </p>
    </div>
  );
}
