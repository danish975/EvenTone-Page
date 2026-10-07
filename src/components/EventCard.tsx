"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Event } from "@/types/event";
import AvatarGroup from "./AvatarGroup";

interface EventCardProps {
  event: Event;
  index?: number;
}

const statusStyles: Record<string, string> = {
  Open: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Limited: "bg-amber-50 text-amber-600 border-amber-200",
  Full: "bg-red-50 text-red-500 border-red-200",
};

const categoryStyles: Record<string, string> = {
  Technical: "bg-primary-600 text-white",
  Cultural: "bg-rose-500 text-white",
  Workshop: "bg-blue-600 text-white",
  Sports: "bg-emerald-600 text-white",
  Hackathon: "bg-gray-800 text-white",
  Others: "bg-gray-500 text-white",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      id={`event-card-${event.id}`}
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
              categoryStyles[event.category] || categoryStyles.Others
            }`}
          >
            {event.category}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
              statusStyles[event.status] || statusStyles.Open
            }`}
          >
            {event.status}
          </span>
        </div>

        {/* Heart */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label={liked ? "Unlike event" : "Like event"}
          id={`like-${event.id}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked
                ? "fill-red-500 text-red-500"
                : "text-gray-500 hover:text-red-400"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-primary-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed flex-1">
          {event.description}
        </p>

        {/* Date & Location */}
        <div className="flex flex-col gap-1.5 mb-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary-400" />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary-400" />
            <span className="font-medium truncate">{event.location}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <AvatarGroup count={event.attendees} max={3} />
          <button
            className="flex items-center gap-1 text-primary-600 hover:text-primary-700 text-xs font-semibold group/btn transition-colors"
            id={`view-${event.id}`}
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
