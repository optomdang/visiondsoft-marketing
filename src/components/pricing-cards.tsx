import Link from "next/link";
import { Check, Minus } from "lucide-react";
import {
  formatPlanPrice,
  PLAN_TIERS,
  type FeatureCell,
  type PlanId,
} from "@/content/pricing";
import { cn } from "@/lib/cn";

function CellValue({ value }: { value: FeatureCell }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-emerald-500" aria-label="Có" />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-slate-300" aria-label="Không" />;
  }
  return <span className="text-xs font-semibold text-slate-700">{value}</span>;
}

type PricingCardsProps = {
  compact?: boolean;
  planIds?: PlanId[];
};

export function PricingCards({ compact = false, planIds }: PricingCardsProps) {
  const tiers = planIds
    ? PLAN_TIERS.filter(t => planIds.includes(t.id))
    : PLAN_TIERS.filter(t => t.id !== "system");

  return (
    <div className={cn(
      "grid gap-4",
      compact ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4",
    )}>
      {tiers.map(plan => {
        const price = formatPlanPrice(plan);
        return (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition",
              plan.highlighted
                ? "border-brand-400 ring-2 ring-brand-200 shadow-brand-100/50"
                : "border-brand-100",
            )}
          >
            {plan.badge && (
              <span className={cn(
                "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                plan.highlighted ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-600",
              )}>
                {plan.badge}
              </span>
            )}
            <h3 className="text-lg font-extrabold text-slate-800">{plan.name}</h3>
            <p className="mt-1 text-xs text-slate-500">{plan.featureCount} tính năng</p>
            <div className="mt-4">
              <p className="inline-flex items-end gap-0.5 leading-none">
                <span className="text-2xl font-extrabold text-brand-600 md:text-3xl">
                  {price.primary}
                </span>
                {price.primarySuffix && (
                  <span className="pb-0.5 text-xs font-medium text-slate-500">
                    {price.primarySuffix}
                  </span>
                )}
              </p>
              {price.secondary && (
                <p className="mt-1 text-xs font-medium text-slate-500">{price.secondary}</p>
              )}
            </div>
            <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-600">
              <li className="flex justify-between gap-2 border-b border-slate-100 pb-2">
                <span>Người dùng</span><strong>{plan.quotas.users}</strong>
              </li>
              <li className="flex justify-between gap-2 border-b border-slate-100 pb-2">
                <span>Phiếu khám/ngày</span><strong>{plan.quotas.examsPerDay}</strong>
              </li>
              <li className="flex justify-between gap-2">
                <span>Hóa đơn/ngày</span><strong>{plan.quotas.financeDocsPerDay}</strong>
              </li>
            </ul>
            {plan.ctaHref.startsWith("http") ? (
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-5 block rounded-xl py-2.5 text-center text-sm font-bold transition",
                  plan.highlighted ? "btn-primary" : "btn-outline",
                )}
              >
                {plan.cta}
              </a>
            ) : (
              <Link
                href={plan.ctaHref}
                className={cn(
                  "mt-5 block rounded-xl py-2.5 text-center text-sm font-bold transition",
                  plan.highlighted ? "btn-primary" : "btn-outline",
                )}
              >
                {plan.cta}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export { CellValue };
