import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getAllEvents } from "@/api";
import { EventCard } from "@/components";

const EventList = () => {
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchedData = async () => {
      try {
        const data = await getAllEvents(controller);
        setEvents(data.results);
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
    <ul className="flex flex-col w-full">
      {events &&
        !isLoading &&
        events.map((event) => (
          <Link to={`/events/${event.id}`} key={event.id}>
            <EventCard event={event} />
          </Link>
        ))}
    </ul>
  );
};

export default EventList;
