import { Card } from "@/components/ui/card";
import FruitCard from "./FruitCard";

interface Fruit {
  id: string;
  name: string;
  image: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical";
}

interface TierRowProps {
  tier: {
    id: string;
    name: string;
    color: string;
    textColor: string;
  };
  fruits: Fruit[];
  onDrop: (e: React.DragEvent, tierId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragStart: (e: React.DragEvent, fruitId: string) => void;
  draggedFruit: string | null;
}

const TierRow = ({
  tier,
  fruits,
  onDrop,
  onDragOver,
  onDragStart,
  draggedFruit,
}: TierRowProps) => {
  return (
    <div className="flex items-stretch gap-2 mb-3">
      <div
        className={`w-24 flex items-center justify-center font-bold text-2xl rounded-l-lg ${tier.color} ${tier.textColor}`}
      >
        {tier.name}
      </div>
      <Card
        className="flex-1 min-h-[100px] p-4 bg-gray-900 border-gray-700 border-2 border-dashed"
        onDrop={(e) => onDrop(e, tier.id)}
        onDragOver={onDragOver}
      >
        <div className="flex flex-wrap gap-2">
          {fruits.map((fruit) => (
            <FruitCard
              key={fruit.id}
              fruit={fruit}
              onDragStart={onDragStart}
              isDragging={draggedFruit === fruit.id}
            />
          ))}
          {fruits.length === 0 && (
            <div className="text-gray-500 text-center w-full py-8">
              Перетащите фрукты сюда
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TierRow;
