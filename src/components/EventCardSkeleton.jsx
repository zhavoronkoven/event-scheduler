const EventCardSkeleton = () => {
  return (
    <li className="py-es-mobile xl:py-es-desktop bg-es-background/30 text-es-label md:border-t-es-outline container flex min-h-[280px] flex-col rounded-lg md:min-h-[220px] md:border-t md:py-8 lg:min-h-[240px] lg:py-10 xl:min-h-[260px] 2xl:py-18">
      <div className="flex flex-col gap-4 md:flex-row md:gap-15 lg:gap-20 xl:justify-between">
        {/* Time section skeleton */}
        <div className="flex items-baseline justify-between gap-3 md:flex-col md:justify-start lg:min-w-32.5 xl:min-w-35">
          <div className="flex items-baseline gap-2 md:flex-col lg:flex-row">
            {/* Date number */}
            <div className="bg-es-outline h-10 w-16 animate-pulse rounded md:h-14 md:w-20 lg:h-16 lg:w-24 xl:h-20 xl:w-28"></div>

            <div className="flex gap-2 lg:flex-col lg:gap-0">
              {/* Month */}
              <div className="bg-es-outline h-4 w-12 animate-pulse rounded lg:h-5 lg:w-14"></div>
              {/* Year */}
              <div className="bg-es-outline h-4 w-12 animate-pulse rounded lg:h-5 lg:w-14"></div>
            </div>
          </div>

          {/* Time */}
          <div className="bg-es-outline h-5 w-16 animate-pulse rounded lg:h-6 lg:w-20 xl:h-7 xl:w-24"></div>
        </div>

        {/* Title and description skeleton */}
        <div className="flex flex-col gap-2 md:max-w-sm lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
          {/* Title */}
          <div className="bg-es-outline h-7 w-full animate-pulse rounded lg:h-9 xl:h-10"></div>

          {/* Description - multiple lines */}
          <div className="flex flex-col gap-2">
            <div className="bg-es-outline h-4 w-full animate-pulse rounded md:h-5 lg:h-6 xl:h-6"></div>
            <div className="bg-es-outline h-4 w-5/6 animate-pulse rounded md:h-5 lg:h-6 xl:h-6"></div>
            <div className="bg-es-outline h-4 w-4/6 animate-pulse rounded md:h-5 lg:h-6 xl:h-6"></div>
          </div>
        </div>

        {/* Location and arrow skeleton */}
        <div className="border-y-es-outline flex items-center justify-between border-y py-4 md:flex-col md:justify-between md:border-0 md:py-0 xl:flex-row xl:gap-20">
          {/* Location */}
          <div className="flex items-center gap-2">
            <span className="bg-es-outline h-2 w-2 animate-pulse rounded-full lg:h-2 lg:w-2"></span>
            <div className="bg-es-outline h-5 w-32 animate-pulse rounded lg:h-6 lg:w-36 xl:h-6 xl:w-40"></div>
          </div>

          {/* Arrow icon */}
          <div className="bg-es-outline h-6 w-6 animate-pulse place-self-end rounded lg:h-9 lg:w-9 xl:place-self-center"></div>
        </div>
      </div>
    </li>
  );
};

export default EventCardSkeleton;
