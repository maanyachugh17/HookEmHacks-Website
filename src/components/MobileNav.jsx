import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav({ items, onNavigate }) {
  const [open, setOpen] = useState(false);

  function handleNavigate(id) {
    onNavigate(id);
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rounded-xl">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 glass-panel border-cyan-500/20">
        <SheetHeader>
          <SheetTitle className="font-heading">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2">
          {items.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="justify-start rounded-xl h-12 text-base text-foreground/80 hover:text-cyan-300 hover:bg-cyan-400/10"
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
