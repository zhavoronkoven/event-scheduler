import { useState, useEffect } from "react";
import { useParams } from "react-router";

const EventDetailsPage = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3001/api/events/${id}`);

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        setEvent(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error loading event: {error}</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <>
      <div className="mb-3">
        <a className="mono-meta inline-flex items-center gap-1.5 uppercase" href="/">
          <span className="inline-block">←</span>
          <span>Back to upcoming events</span>
        </a>
      </div>
      <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 hidden items-center border-b pb-2 uppercase lg:flex">
        <span className="bg-es-accent inline-block h-2 w-2"></span>
        <span>[ Event details ]</span>
        <span className="text-es-outline">•</span>
        <span>Id: {id}</span>
      </div>
      <div className="border-b-es-outline mb-12 border-b">
        <h1 className="mb-6">{event.title}</h1>
      </div>

      <div className="grid grid-cols-12">
        <aside className="col-span-12 flex flex-col lg:col-span-4">
          <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 hidden items-center border-b pb-2 uppercase lg:flex">
            <span>Date and Time</span>
          </div>
          <div className="mb-16">{event.date}</div>
          <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 hidden items-center border-b pb-2 uppercase lg:flex">
            <span>Location</span>
          </div>
          <div className="headline mb-2">{event.location}</div>
          <div>
            {event.latitude}, {event.longitude}
          </div>
        </aside>
        <section class="col-span-12 flex flex-col lg:col-span-8">
          <p>{event.description}</p>
        </section>
      </div>
    </>
  );
};

export default EventDetailsPage;
