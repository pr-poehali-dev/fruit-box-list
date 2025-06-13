import { useState, useEffect } from "react";
import TierRow from "@/components/TierRow";
import FruitSidebar from "@/components/FruitSidebar";
import Controls from "@/components/Controls";
import bloxFruits, { Fruit } from "@/data/bloxFruits";

interface Tier {
  id: string;
  name: string;
  color: string;
  textColor: string;
}

const tiers: Tier[] = [
  {
    id: "S",
    name: "S",
    color: "bg-gradient-to-r from-red-500 to-red-600",
    textColor: "text-white",
  },
  {
    id: "A",
    name: "A",
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    textColor: "text-white",
  },
  {
    id: "B",
    name: "B",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    textColor: "text-black",
  },
  {
    id: "C",
    name: "C",
    color: "bg-gradient-to-r from-green-500 to-green-600",
    textColor: "text-white",
  },
  {
    id: "D",
    name: "D",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    textColor: "text-white",
  },
];

const Index = () => {
  const [draggedFruit, setDraggedFruit] = useState<string | null>(null);
  const [tierLists, setTierLists] = useState<Record<string, Fruit[]>>({
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  });
  const [availableFruits, setAvailableFruits] = useState<Fruit[]>(bloxFruits);
  const [hasSavedData, setHasSavedData] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bloxFruitsTierList");
    if (saved) {
      setHasSavedData(true);
    }
  }, []);

  const handleDragStart = (e: React.DragEvent, fruitId: string) => {
    setDraggedFruit(fruitId);
    e.dataTransfer.setData("text/plain", fruitId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, tierId: string) => {
    e.preventDefault();
    const fruitId = e.dataTransfer.getData("text/plain");
    const fruit = [...availableFruits, ...Object.values(tierLists).flat()].find(
      (f) => f.id === fruitId,
    );

    if (fruit) {
      // Remove fruit from all tiers and available fruits
      setTierLists((prev) => {
        const newTierLists = { ...prev };
        Object.keys(newTierLists).forEach((key) => {
          newTierLists[key] = newTierLists[key].filter((f) => f.id !== fruitId);
        });
        newTierLists[tierId] = [...newTierLists[tierId], fruit];
        return newTierLists;
      });

      setAvailableFruits((prev) => prev.filter((f) => f.id !== fruitId));
    }

    setDraggedFruit(null);
  };

  const handleSave = () => {
    const data = {
      tierLists,
      availableFruits,
    };
    localStorage.setItem("bloxFruitsTierList", JSON.stringify(data));
    setHasSavedData(true);
  };

  const handleLoad = () => {
    const saved = localStorage.getItem("bloxFruitsTierList");
    if (saved) {
      const data = JSON.parse(saved);
      setTierLists(data.tierLists);
      setAvailableFruits(data.availableFruits);
    }
  };

  const handleReset = () => {
    setTierLists({
      S: [],
      A: [],
      B: [],
      C: [],
      D: [],
    });
    setAvailableFruits(bloxFruits);
    setDraggedFruit(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto p-6">
        {/* Header with modern gradient */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blox Fruits Tier List
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            🏴‍☠️ Обновлено для 2025 года
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              PvP Оценки
            </span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              PvE Оценки
            </span>
          </div>
        </div>

        <Controls
          onSave={handleSave}
          onLoad={handleLoad}
          onReset={handleReset}
          hasSavedData={hasSavedData}
        />

        <div className="flex gap-6">
          <div className="flex-1">
            {tiers.map((tier) => (
              <TierRow
                key={tier.id}
                tier={tier}
                fruits={tierLists[tier.id]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragStart={handleDragStart}
                draggedFruit={draggedFruit}
              />
            ))}
          </div>

          <FruitSidebar
            fruits={availableFruits}
            onDragStart={handleDragStart}
            draggedFruit={draggedFruit}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
