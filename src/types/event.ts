export type EventStatus = "Open" | "Limited" | "Full";

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  status: EventStatus;
  date: string;
  location: string;
  image: string;
  attendees: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface HomeData {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  heroImage: string;
  eventStats: {
    events: string;
    students: string;
  };
}
