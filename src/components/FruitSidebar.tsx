import { Card } from "@/components/ui/card";
import FruitCard from "./FruitCard";
import { Fruit } from "@/data/bloxFruits";

interface FruitSidebarProps {
  fruits: Fruit[];
  onDragStart: (e: React.DragEvent, fruitId: string) => void;
  draggedFruit: string | null;
}

const FruitSidebar = ({
  fruits,
  onDragStart,
  draggedFruit,
}: FruitSidebarProps) => {
  const groupedFruits = fruits.reduce(
    (acc, fruit) => {
      if (!acc[fruit.rarity]) {
        acc[fruit.rarity] = [];
      }
      acc[fruit.rarity].push(fruit);
      return acc;
    },
    {} as Record<string, Fruit[]>,
  );

  const rarityOrder = ["Mythical", "Legendary", "Rare", "Uncommon", "Common"];

  return (
    <Card className="w-80 h-full bg-gray-900 border-gray-700 p-4 overflow-y-auto">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Blox Fruits
      </h3>
      {rarityOrder.map((rarity) => {
        if (!groupedFruits[rarity]) return null;
        return (
          <div key={rarity} className="mb-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-3 border-b border-gray-700 pb-2">
              {rarity}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {groupedFruits[rarity].map((fruit) => (
                <FruitCard
                  key={fruit.id}
                  fruit={fruit}
                  onDragStart={onDragStart}
                  isDragging={draggedFruit === fruit.id}
                />
              ))}
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default FruitSidebar;
