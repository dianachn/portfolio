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
            "w-full h-auto max-w-full object-cover transition-transform duration-300 max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%]",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>

      <div className="p-2 sm:p-3 lg:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-xs sm:text-sm lg:text-lg leading-tight flex-1">
            {item.title}
          </h3>
          <Badge variant="outline" className="text-xs flex-shrink-0">
            {item.year}
          </Badge>
        </div>

        {item.description && (
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-tight">
            {item.description}
          </p>
        )}

        <div className="mt-2 sm:mt-3">
          <Badge variant="secondary" className="capitalize text-xs">
            {item.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
