import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getUpcomingEvents } from "@/api";
import { EventCard, EventCardSkeleton } from "@/components";

const EventList = ({ events, setEvents }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchedData = async () => {
      try {
        const data = await getUpcomingEvents(controller);
        setEvents(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          throw new Error(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading((prev) => !prev);
        }
      }
    };

    fetchedData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {/* <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 hidden grid-cols-[250px_1fr_250px_100px] items-center border-b pb-2 uppercase lg:grid">
        <div className="gap-es-gap flex items-center">
          <span className="bg-es-accent inline-block h-2 w-2"></span>
          <span>Coming up</span>
        </div>
        <div>Title and Description</div>
        <div>Location</div>
        <div></div>
      </div> */}

      <ul className="flex flex-col gap-4">
        {isLoading && (
          <>
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
          </>
        )}

        {events &&
          !isLoading &&
          events.map((event, index) => (
            <Link to={`/events/${event.id}`} key={event.id} className="animate-in fade-in duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard event={event} />
            </Link>
          ))}
      </ul>
    </>
  );
};

export default EventList;
