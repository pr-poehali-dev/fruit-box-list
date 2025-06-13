import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FruitCard from "./FruitCard";
import { Fruit } from "@/data/bloxFruits";
import Icon from "@/components/ui/icon";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");

  const filteredFruits = fruits.filter((fruit) => {
    const matchesSearch = fruit.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRarity =
      selectedRarity === "all" || fruit.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  const groupedFruits = filteredFruits.reduce(
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
  const rarityFilters = ["all", ...rarityOrder];

  return (
    <Card className="w-96 h-full bg-gray-900/90 backdrop-blur-md border-gray-700 p-6 overflow-y-auto shadow-2xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🍎 Blox Fruits
        </h3>

        {/* Search */}
        <div className="relative mb-4">
          <Icon
            name="Search"
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <Input
            type="text"
            placeholder="Поиск фруктов..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        {/* Rarity Filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {rarityFilters.map((rarity) => (
            <Button
              key={rarity}
              size="sm"
              variant={selectedRarity === rarity ? "default" : "outline"}
              onClick={() => setSelectedRarity(rarity)}
              className="text-xs"
            >
              {rarity === "all" ? "Все" : rarity}
            </Button>
          ))}
        </div>

        <div className="text-sm text-gray-400 text-center">
          Найдено: {filteredFruits.length} фруктов
        </div>
      </div>

      {rarityOrder.map((rarity) => {
        if (!groupedFruits[rarity]) return null;
        return (
          <div key={rarity} className="mb-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-3 border-b border-gray-700 pb-2 flex items-center gap-2">
              <span className="text-xl">
                {rarity === "Mythical" && "💎"}
                {rarity === "Legendary" && "👑"}
                {rarity === "Rare" && "⭐"}
                {rarity === "Uncommon" && "🔸"}
                {rarity === "Common" && "⚪"}
              </span>
              {rarity} ({groupedFruits[rarity].length})
            </h4>
            <div className="grid grid-cols-2 gap-3">
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

      {filteredFruits.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          <div className="text-4xl mb-2">🔍</div>
          <p>Фрукты не найдены</p>
        </div>
      )}
    </Card>
  );
};

export default FruitSidebar;
