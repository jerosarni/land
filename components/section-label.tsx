import { cn } from "@/lib/utils"
import { palette } from "@/lib/palette"

type SectionLabelProps = {
  label: string
  className?: string
  color?: string
  arrowColor?: string
}

export function SectionLabel({
  label,
  className,
  color = palette.bronze,
  arrowColor = palette.brown,
}: SectionLabelProps) {
  return (
    <div
      className={cn("text-[0.85rem] uppercase tracking-[0.35em] font-semibold flex items-center gap-2", className)}
      style={{ color }}
    >
      <span className="text-lg" style={{ color: arrowColor }}>
        &gt;
      </span>
      {label}
    </div>
  )
}

