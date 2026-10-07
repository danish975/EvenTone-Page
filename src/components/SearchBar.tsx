"use client";

import { Search, MapPin, ArrowRight } from "lucide-react";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ search, onSearchChange }: SearchBarProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-6 relative z-20">
      <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        {/* Search input */}
        <div className="flex items-center gap-3 flex-1 px-4 py-2.5">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search events, topics or organisers..."
            className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
            id="search-events"
          />
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-gray-200" />

        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-2.5 sm:min-w-[160px]">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <select
            className="bg-transparent text-sm text-gray-600 outline-none cursor-pointer appearance-none flex-1 font-medium"
            id="location-filter"
          >
            <option>All Locations</option>
            <option>Block 32 Auditorium</option>
            <option>Computer Science Block</option>
            <option>Main Ground</option>
            <option>Innovation Center</option>
          </select>
          <svg
            className="w-4 h-4 text-gray-400 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Search button */}
        <button
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl w-full sm:w-12 h-11 sm:h-11 flex items-center justify-center transition-colors shrink-0 shadow-md shadow-primary-600/25"
          aria-label="Search"
          id="search-button"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
