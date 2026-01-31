import { cn } from "@/lib/utils";

export function SectionHeading({
  icon: Icon,
  kicker,
  title,
  desc,
  align = "center",
  kickerStyle = "badge",
  compact = false,
}) {
  const isLeft = align === "left";

  return (
    <div
      className={cn(
        "mx-auto mb-10 max-w-3xl",
        isLeft ? "text-left" : "text-center"
      )}
    >
      {kicker &&
        (kickerStyle === "badge" ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            {Icon && <Icon className="size-4" />}
            <span>{kicker}</span>
          </div>
        ) : (
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {kicker}
          </span>
        ))}
      <h2
        className={cn(
          "font-heading text-balance font-bold tracking-tight",
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
        )}
      >
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
}
