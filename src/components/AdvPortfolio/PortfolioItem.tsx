import { useState } from "react";
import { PortfolioItemType } from "./types.ts";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  item: PortfolioItemType;
  onClick?: () => void;
}

export function PortfolioItem({ item, onClick }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer",
        onClick && "hover:scale-[1.02]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className={cn(
            "w-full h-auto object-cover transition-transform duration-300",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-lg">{item.title}</h3>
          <Badge variant="outline">{item.year}</Badge>
        </div>

        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        )}

        <div className="mt-3">
          <Badge variant="secondary" className="capitalize">
            {item.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
