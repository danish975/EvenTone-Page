"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import UpcomingEvents from "@/components/UpcomingEvents";

import homeData from "@/data/home.json";
import eventsData from "@/data/events.json";
import categoriesData from "@/data/categories.json";

import type { HomeData, Event, Category } from "@/types/event";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const home: HomeData = homeData;
  const events: Event[] = eventsData.events as Event[];
  const categories: Category[] = categoriesData.categories;

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" ||
        event.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search filter
      const q = search.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        event.title.toLowerCase().includes(q) ||
        event.description.toLowerCase().includes(q) ||
        event.category.toLowerCase().includes(q) ||
        event.location.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [events, search, selectedCategory]);

  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection data={home} />
      <SearchBar search={search} onSearchChange={setSearch} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <UpcomingEvents events={filteredEvents} />
    </main>
  );
}
