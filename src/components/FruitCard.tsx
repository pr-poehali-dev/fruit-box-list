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
    Common: "from-gray-500 to-gray-600 border-gray-400",
    Uncommon: "from-green-500 to-green-600 border-green-400",
    Rare: "from-blue-500 to-blue-600 border-blue-400", 
    Legendary: "from-purple-500 to-purple-600 border-purple-400",
    Mythical: "from-orange-500 to-red-600 border-orange-400",
  };

  return (
    <div
      className={`relative p-3 cursor-grab active:cursor-grabbing transition-all duration-300 hover:scale-110 hover:rotate-1 ${
        isDragging ? "opacity-30 scale-95 rotate-6" : ""
      } bg-gradient-to-br ${rarityColors[fruit.rarity]} rounded-xl border-2 shadow-lg hover:shadow-xl backdrop-blur-sm`}
      draggable
      onDragStart={(e) => onDragStart(e, fruit.id)}
    >
      {/* Rarity indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white shadow-sm"></div>
      
      <div className="flex flex-col items-center space-y-2">
        {!imageError ? (
          <div className="relative">
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-14 h-14 object-cover rounded-lg shadow-md"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        ) : (
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
            {fruit.name.charAt(0)}
          </div>
        )}
        <div className="text-center">
          <h4 className="text-sm font-bold text-white drop-shadow-md">{fruit.name}</h4>
          <p className="text-xs text-gray-200 opacity-90">{fruit.rarity}</p>
        </div>
      </div>
    </div>
};

export default FruitCard;
