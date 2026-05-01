"use client";

const charcoalPct = 100;
const megaGasPct = 40;

export function CostBarChart() {
  return (
    <div className="mt-6 space-y-4">
      <p className="text-sm font-medium text-neutral-700">
        Typical monthly cooking energy cost (indexed)
      </p>
      <div className="space-y-3">
        <div>
          <div className="mb-1 flex justify-between text-xs text-neutral-600">
            <span>Charcoal</span>
            <span>100%</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-neutral-500 transition-all duration-700"
              style={{ width: `${charcoalPct}%` }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs text-neutral-600">
            <span>Mega Gas</span>
            <span className="font-semibold text-[#1B4332]">~40%</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-[#1B4332] transition-all duration-700"
              style={{ width: `${megaGasPct}%` }}
            />
          </div>
        </div>
      </div>
      <p className="text-xs text-neutral-500">
        Illustrative comparison; actual savings vary by household size and usage.
      </p>
    </div>
  );
}
