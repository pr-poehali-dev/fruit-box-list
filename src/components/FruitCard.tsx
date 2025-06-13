import { useState } from "react";
import { Card } from "@/components/ui/card";

interface FruitCardProps {
  fruit: {
    id: string;
    name: string;
    image: string;
    rarity: "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical";
  };
  onDragStart: (e: React.DragEvent, fruitId: string) => void;
  isDragging?: boolean;
}

const FruitCard = ({ fruit, onDragStart, isDragging }: FruitCardProps) => {
  const [imageError, setImageError] = useState(false);

  const rarityColors = {
    Common: "border-gray-400",
    Uncommon: "border-green-400",
    Rare: "border-blue-400",
    Legendary: "border-purple-400",
    Mythical: "border-orange-400",
  };

  return (
    <Card
      className={`p-3 cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-105 ${
        rarityColors[fruit.rarity]
      } ${isDragging ? "opacity-50 rotate-2" : ""} bg-gray-800 border-2`}
      draggable
      onDragStart={(e) => onDragStart(e, fruit.id)}
    >
      <div className="flex flex-col items-center space-y-2">
        {!imageError ? (
          <img
            src={fruit.image}
            alt={fruit.name}
            className="w-12 h-12 object-cover rounded-md"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold text-lg">
            {fruit.name.charAt(0)}
          </div>
        )}
        <div className="text-center">
          <h4 className="text-sm font-medium text-white">{fruit.name}</h4>
          <p className="text-xs text-gray-400">{fruit.rarity}</p>
        </div>
      </div>
    </Card>
  );
};

export default FruitCard;
