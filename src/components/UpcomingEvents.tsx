"use client";

import { ArrowRight } from "lucide-react";
import type { Event } from "@/types/event";
import EventCard from "./EventCard";

interface UpcomingEventsProps {
  events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Upcoming Events
          </h2>
          <p className="text-sm text-gray-500">
            Explore the latest events happening on campus. Don&apos;t miss out!
          </p>
        </div>
        <button
          className="flex items-center gap-2 mt-4 sm:mt-0 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/50 transition-all shrink-0"
          id="view-all-events"
        >
          View All Events
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Event Grid */}
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-primary-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            No events found
          </h3>
          <p className="text-sm text-gray-400">
            Try adjusting your search or filter to find events.
          </p>
        </div>
      )}
    </section>
  );
}
