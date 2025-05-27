export interface PortfolioItemType {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  year: string;
  category: "drawing" | "digital art" | "website";
  tags?: string[];
}
