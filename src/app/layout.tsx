import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EventOne — Discover Amazing Campus Events",
  description:
    "Find and join workshops, hackathons, cultural events, tech talks and more. Meet like-minded people and grow together at your campus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
