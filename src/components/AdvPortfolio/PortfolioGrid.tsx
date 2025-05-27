import { PortfolioItem } from "./PortfolioItem";
import { PortfolioItemType } from "./types.ts";

interface PortfolioGridProps {
  items: PortfolioItemType[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">
          No items found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  );
}
