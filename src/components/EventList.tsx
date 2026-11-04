import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getUpcomingEvents } from "@/api";
import { EventCard, EventCardSkeleton } from "@/components";
import { type EventItemType } from "@/types/event";

type EventListProps = {
  events: EventItemType[] | null;
  setEvents: (events: EventItemType[] | null) => void;
}

const EventList = ({ events, setEvents }: EventListProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchedData = async () => {
      try {
        const data = await getUpcomingEvents(controller);
        setEvents(data);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error(err);
          setError("Unexpected response from server");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
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

     {error && (
        <p role="alert" className="border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

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
