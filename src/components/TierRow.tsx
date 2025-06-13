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
    <div className="flex items-stretch gap-3 mb-4 group">
      <div
        className={`w-32 flex items-center justify-center font-bold text-3xl rounded-xl shadow-lg ${tier.color} ${tier.textColor} border-2 border-white/20`}
      >
        <span className="drop-shadow-lg">{tier.name}</span>
      </div>
      <div
        className="flex-1 min-h-[120px] p-6 bg-gray-900/80 backdrop-blur-md border-2 border-dashed border-gray-600 rounded-xl transition-all duration-300 hover:border-gray-500 hover:bg-gray-800/80"
        onDrop={(e) => onDrop(e, tier.id)}
        onDragOver={onDragOver}
      >
        <div className="flex flex-wrap gap-3">
          {fruits.map((fruit) => (
            <FruitCard
              key={fruit.id}
              fruit={fruit}
              onDragStart={onDragStart}
              isDragging={draggedFruit === fruit.id}
            />
          ))}
          {fruits.length === 0 && (
            <div className="text-gray-400 text-center w-full py-12 flex flex-col items-center">
              <div className="text-4xl mb-2">🍎</div>
              <p className="text-lg">Перетащите фрукты сюда</p>
              <p className="text-sm opacity-70">Уровень {tier.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TierRow;
