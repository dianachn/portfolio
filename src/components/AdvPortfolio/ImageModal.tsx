import { useEffect } from "react";
import { PortfolioItemType } from "./types";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

interface ImageModalProps {
  item: PortfolioItemType;
  onClose: () => void;
}

export function ImageModal({ item, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal content */}
      <div className="relative max-w-6xl max-h-[90vh] w-full bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        >
          <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </button>

        {/* Content layout: always horizontal (image left, description right) */}
        <div className="flex flex-row h-full max-h-[90vh]">
          {/* Image section - left side */}
          <div className="flex-1 w-1/2 min-w-0 p-2 sm:p-6 flex items-center justify-center overflow-auto">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
            />
          </div>

          {/* Content section - right side */}
          <div className="flex-1 w-1/2 min-w-0 p-2 sm:p-6 flex flex-col justify-center overflow-auto">
            <div className="space-y-3 sm:space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight">
                  {item.title}
                </h2>
                <Badge
                  variant="outline"
                  className="text-xs sm:text-sm ml-2 sm:ml-4 flex-shrink-0"
                >
                  {item.year}
                </Badge>
              </div>

              {/* Description */}
              {item.description && (
                <div className="space-y-2 sm:space-y-4">
                  <h3 className="text-sm sm:text-lg font-semibold text-muted-foreground">
                    Description
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              )}

              {/* Category */}
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Category:
                </span>
                <Badge variant="secondary" className="capitalize text-xs">
                  {item.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
