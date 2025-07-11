import { useState } from "react";
import { PortfolioItem } from "./PortfolioItem";
import { PortfolioItemType } from "./types.ts";
import { ImageModal } from "./ImageModal";

interface PortfolioGridProps {
  items: PortfolioItemType[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(
    null
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">
          No items found in this category.
        </p>
      </div>
    );
  }

  const handleItemClick = (item: PortfolioItemType) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {items.map((item) => (
          <div key={item.id} className="break-inside-avoid mb-6">
            <PortfolioItem item={item} onClick={() => handleItemClick(item)} />
          </div>
        ))}
      </div>

      {selectedItem && (
        <ImageModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
}
