export interface Fruit {
  id: string;
  name: string;
  image: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical";
  type: "Logia" | "Paramecia" | "Zoan" | "Beast";
  awakened?: boolean;
  pvpTier?: "S+" | "S" | "A" | "B" | "C" | "D";
  pveeTier?: "S+" | "S" | "A" | "B" | "C" | "D";
  value?: number;
}

const bloxFruits: Fruit[] = [
  // Mythical Fruits (2025 Updated)
  {
    id: "kitsune",
    name: "Kitsune",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Beast",
    awakened: true,
    pvpTier: "S+",
    pveeTier: "S+",
    value: 8000000,
  },
  {
    id: "t-rex",
    name: "T-Rex",
    image:
      "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Beast",
    awakened: true,
    pvpTier: "S+",
    pveeTier: "S",
    value: 7000000,
  },
  {
    id: "leopard",
    name: "Leopard",
    image:
      "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Beast",
    awakened: true,
    pvpTier: "S+",
    pveeTier: "S+",
    value: 5000000,
  },
  {
    id: "dragon",
    name: "Dragon",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Beast",
    awakened: true,
    pvpTier: "S+",
    pveeTier: "S+",
    value: 3500000,
  },
  {
    id: "spirit",
    name: "Spirit",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Logia",
    awakened: true,
    pvpTier: "S",
    pveeTier: "S+",
    value: 3400000,
  },
  {
    id: "control",
    name: "Control",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Paramecia",
    awakened: true,
    pvpTier: "S+",
    pveeTier: "A",
    value: 3200000,
  },
  {
    id: "venom",
    name: "Venom",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Logia",
    awakened: true,
    pvpTier: "S",
    pveeTier: "S+",
    value: 3000000,
  },
  {
    id: "shadow",
    name: "Shadow",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Mythical",
    type: "Paramecia",
    awakened: true,
    pvpTier: "S",
    pveeTier: "S",
    value: 2900000,
  },

  // Legendary Fruits (2025 Updated)
  {
    id: "dough",
    name: "Dough",
    image:
      "https://images.unsplash.com/photo-1549312420-a0b39e3b1ae4?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Paramecia",
    awakened: true,
    pvpTier: "S+",
    pveeTier: "S",
    value: 2800000,
  },
  {
    id: "mammoth",
    name: "Mammoth",
    image:
      "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Beast",
    awakened: false,
    pvpTier: "A",
    pveeTier: "S",
    value: 2700000,
  },
  {
    id: "gravity",
    name: "Gravity",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Paramecia",
    awakened: false,
    pvpTier: "A",
    pveeTier: "A",
    value: 2500000,
  },
  {
    id: "phoenix",
    name: "Phoenix",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Beast",
    awakened: true,
    pvpTier: "S",
    pveeTier: "S",
    value: 1800000,
  },
  {
    id: "buddha",
    name: "Buddha",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Beast",
    awakened: true,
    pvpTier: "A",
    pveeTier: "S+",
    value: 1200000,
  },
  {
    id: "rumble",
    name: "Rumble",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Logia",
    awakened: true,
    pvpTier: "S",
    pveeTier: "A",
    value: 2100000,
  },
  {
    id: "paw",
    name: "Paw",
    image:
      "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Paramecia",
    awakened: false,
    pvpTier: "A",
    pveeTier: "B",
    value: 2300000,
  },
  {
    id: "love",
    name: "Love",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Legendary",
    type: "Paramecia",
    awakened: false,
    pvpTier: "A",
    pveeTier: "A",
    value: 1300000,
  },

  // Rare Fruits
  {
    id: "quake",
    name: "Quake",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Paramecia",
    awakened: true,
    pvpTier: "A",
    pveeTier: "S",
    value: 1000000,
  },
  {
    id: "magma",
    name: "Magma",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Logia",
    awakened: true,
    pvpTier: "A",
    pveeTier: "S",
    value: 960000,
  },
  {
    id: "blizzard",
    name: "Blizzard",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Logia",
    awakened: false,
    pvpTier: "A",
    pveeTier: "A",
    value: 2400000,
  },
  {
    id: "door",
    name: "Door",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Paramecia",
    awakened: false,
    pvpTier: "B",
    pveeTier: "A",
    value: 950000,
  },
  {
    id: "diamond",
    name: "Diamond",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Paramecia",
    awakened: false,
    pvpTier: "B",
    pveeTier: "B",
    value: 600000,
  },
  {
    id: "light",
    name: "Light",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Logia",
    awakened: true,
    pvpTier: "A",
    pveeTier: "A",
    value: 650000,
  },
  {
    id: "rubber",
    name: "Rubber",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Paramecia",
    awakened: true,
    pvpTier: "S",
    pveeTier: "A",
    value: 750000,
  },
  {
    id: "barrier",
    name: "Barrier",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Rare",
    type: "Paramecia",
    awakened: false,
    pvpTier: "B",
    pveeTier: "C",
    value: 800000,
  },

  // Uncommon Fruits
  {
    id: "ice",
    name: "Ice",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Uncommon",
    type: "Logia",
    awakened: true,
    pvpTier: "A",
    pveeTier: "A",
    value: 350000,
  },
  {
    id: "sand",
    name: "Sand",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Uncommon",
    type: "Logia",
    awakened: true,
    pvpTier: "A",
    pveeTier: "A",
    value: 420000,
  },
  {
    id: "dark",
    name: "Dark",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Uncommon",
    type: "Logia",
    awakened: true,
    pvpTier: "B",
    pveeTier: "A",
    value: 500000,
  },
  {
    id: "flame",
    name: "Flame",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Uncommon",
    type: "Logia",
    awakened: true,
    pvpTier: "A",
    pveeTier: "A",
    value: 250000,
  },
  {
    id: "falcon",
    name: "Falcon",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    rarity: "Uncommon",
    type: "Beast",
    awakened: false,
    pvpTier: "C",
    pveeTier: "B",
    value: 300000,
  },
  {
    id: "string",
    name: "String",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Uncommon",
    type: "Paramecia",
    awakened: false,
    pvpTier: "B",
    pveeTier: "B",
    value: 200000,
  },

  // Common Fruits
  {
    id: "bomb",
    name: "Bomb",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Common",
    type: "Paramecia",
    awakened: false,
    pvpTier: "C",
    pveeTier: "C",
    value: 5000,
  },
  {
    id: "spike",
    name: "Spike",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Common",
    type: "Paramecia",
    awakened: false,
    pvpTier: "C",
    pveeTier: "C",
    value: 7500,
  },
  {
    id: "chop",
    name: "Chop",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Common",
    type: "Paramecia",
    awakened: false,
    pvpTier: "D",
    pveeTier: "D",
    value: 30000,
  },
  {
    id: "spring",
    name: "Spring",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Common",
    type: "Paramecia",
    awakened: false,
    pvpTier: "C",
    pveeTier: "C",
    value: 60000,
  },
  {
    id: "kilo",
    name: "Kilo",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop",
    rarity: "Common",
    type: "Paramecia",
    awakened: false,
    pvpTier: "D",
    pveeTier: "D",
    value: 5000,
  },
  {
    id: "smoke",
    name: "Smoke",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
    rarity: "Common",
    type: "Logia",
    awakened: false,
    pvpTier: "C",
    pveeTier: "B",
    value: 100000,
  },
];

export default bloxFruits;
