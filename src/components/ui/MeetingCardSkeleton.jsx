const MeetingCardSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-[60px_1fr] rounded-xl border border-border overflow-hidden animate-pulse">
      {/* Left Date Section */}
      <div className="bg-gray-200 flex flex-col items-center justify-center gap-2">
        <div className="h-3 w-8 rounded bg-gray-300"></div>
        <div className="h-8 w-8 rounded bg-gray-300"></div>
      </div>

      {/* Right Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="h-3 w-24 rounded bg-gray-200"></div>
          <div className="h-6 w-20 rounded-full bg-gray-200"></div>
        </div>

        {/* Committee Name */}
        <div className="h-6 w-3/4 rounded bg-gray-200 mb-4"></div>

        {/* Time & Location */}
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="h-4 w-36 rounded bg-gray-200"></div>
          <div className="h-4 w-48 rounded bg-gray-200"></div>
        </div>

        {/* Members */}
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
              />
            ))}
          </div>

          <div className="h-4 w-40 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default MeetingCardSkeleton;