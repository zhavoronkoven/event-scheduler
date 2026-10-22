import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getAllEvents } from "@/api";
import { EventCard } from "@/components";

const EventList = ({ events, setEvents }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchedData = async () => {
      try {
        const data = await getAllEvents(controller);
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
    <ul className="flex w-full flex-col">
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
