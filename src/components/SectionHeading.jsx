import { Badge } from "@/components/ui/badge";

export function SectionHeading({ icon: Icon, kicker, title, desc }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Badge
        variant="secondary"
        className="mb-3 gap-2 border-border bg-secondary text-secondary-foreground"
      >
        {Icon && <Icon className="size-4" />}
        <span className="font-medium">{kicker}</span>
      </Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
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
