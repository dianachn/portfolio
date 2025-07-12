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
      {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns, Large: 5 columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {items.map((item) => (
          <div key={item.id} className="w-full">
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
