interface AvatarGroupProps {
  count: number;
  max?: number;
}

export default function AvatarGroup({ count, max = 3 }: AvatarGroupProps) {
  const colors = [
    "from-violet-400 to-purple-500",
    "from-blue-400 to-indigo-500",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
    "from-pink-400 to-rose-500",
  ];

  const displayCount = Math.min(max, count);
  const remaining = count - displayCount;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {Array.from({ length: displayCount }).map((_, i) => (
          <div
            key={i}
            className={`w-7 h-7 rounded-full bg-gradient-to-br ${
              colors[i % colors.length]
            } border-2 border-white flex items-center justify-center`}
          >
            <span className="text-[10px] font-semibold text-white">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}
      </div>
      {remaining > 0 && (
        <span className="ml-2 text-xs font-semibold text-gray-500">
          +{remaining}
        </span>
      )}
    </div>
  );
}
