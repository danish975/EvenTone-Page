"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Code,
  Music,
  Presentation,
  Trophy,
  Terminal,
  MoreHorizontal,
  Briefcase,
  Palette,
  BookOpen,
  Rocket,
  Users,
} from "lucide-react";
import type { Category } from "@/types/event";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  grid: LayoutGrid,
  code: Code,
  music: Music,
  presentation: Presentation,
  trophy: Trophy,
  terminal: Terminal,
  more: MoreHorizontal,
  briefcase: Briefcase,
  palette: Palette,
  book: BookOpen,
  rocket: Rocket,
  users: Users,
};

interface CategoryFilterProps {
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex gap-2.5 overflow-x-auto category-scroll pb-2 -mb-2">
        {categories.map((category) => {
          const Icon = iconMap[category.icon] || LayoutGrid;
          const isActive =
            selected === category.id ||
            (selected === "All" && category.id === "all");

          return (
            <motion.button
              key={category.id}
              onClick={() => onSelect(category.id === "all" ? "All" : category.name)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border shrink-0 ${
                isActive
                  ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/25"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50/50"
              }`}
              id={`category-${category.id}`}
            >
              <Icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
