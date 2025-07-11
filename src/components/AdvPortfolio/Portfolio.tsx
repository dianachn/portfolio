import { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
import { CategoryFilter } from "./CategoryFilter";
import { portfolioItems } from "./portfolioItems";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", "drawing", "digital art", "website"];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8" id="portfolio">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
        <p className="text-muted-foreground">
          A collection of my creative work
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <PortfolioGrid items={filteredItems} />
      </main>
    </div>
  );
}

export default Portfolio;
