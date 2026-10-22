import { useState, useEffect } from "react";
import { useParams } from "react-router";

import EventMap from "@/components/EventMap";
import { getDateLabel, getEventOrgDate } from "@/utils";

const EventDetailsPage = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [organiser, setOrganiser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        setError(null);

        const resEvent = await fetch(`http://localhost:3001/api/events/${id}`);

        if (!resEvent.ok) {
          throw new Error(`Server error: ${resEvent.status}`);
        }

        const data = await resEvent.json();

        if (!data) {
          setError("Event not found");
          return;
        }

        const resOrgariser = await fetch(`http://localhost:3001/api/users/${data.organizerId}`);

        if (!resOrgariser.ok) {
          throw new Error(`Server error: ${resOrgariser.status}`);
        }

        const dataOrganiser = await resOrgariser.json();

        setEvent(data);
        setOrganiser(dataOrganiser);
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
        </div>
        <div className="mb-12">
          <h1 className="mb-6">{error}</h1>
        </div>
      </>
    );
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  const { eventDate, eventDay, eventMonth, eventYear, eventHours, eventMinutes } = getDateLabel(event.date);
  const eventOrgDate = getEventOrgDate(event.createdAt);

  const organiserAvatarLetters = String(organiser.name).toUpperCase().slice(0, 2);

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

      <div className="grid-co grid grid-cols-12 gap-12">
        <aside className="order-2 col-span-12 flex flex-col sm:order-1 lg:col-span-5 xl:col-span-4">
          <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 items-center border-b pb-2 uppercase">
            <span>Date and Time</span>
          </div>
          <div className="mb-4">
            <div className="flex items-baseline uppercase">
              <span className="h1 nodot mr-1.5">{eventDate}</span>
              <div className="flex flex-col">
                <span className="font-bold">
                  {eventMonth} {eventYear}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-x-12">
            <div>
              <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-2 items-center border-b pb-2 uppercase">
                <span>Daу</span>
              </div>
              <div>{eventDay}</div>
            </div>

            <div>
              <div className="border-b-es-outline ap-space-sm mono-meta text-es-label gap-es-gap mb-2 items-center border-b pb-2 uppercase">
                <div>Time</div>
              </div>
              <div>{`${eventHours}:${eventMinutes}`}</div>
            </div>
          </div>

          <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 items-center border-b pb-2 uppercase">
            <span>Location</span>
          </div>
          <div className="headline mb-2">{event.location}</div>
          <div className="h-96">
            <EventMap lat={event.latitude} lng={event.longitude} zoom={8} popup={event.location} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-es-label">Lat, Long:</div>
            <div>
              {event.latitude}° N, {event.longitude}° E
            </div>
          </div>
        </aside>
        <section className="order-1 col-span-12 flex flex-col lg:order-2 lg:col-span-7 xl:col-span-8">
          <p className="mb-16 text-2xl/relaxed">{event.description}</p>
          <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 items-center border-b pb-2 uppercase">
            <span>Organizer</span>
          </div>
          <div className="flex items-center justify-start">
            <div className="avatar avatar-placeholder mr-2">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>{organiserAvatarLetters}</span>
              </div>
            </div>
            <div>
              {organiser.name} <span className="text-es-outline">•</span> <span className="text-es-label">Created: {eventOrgDate}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventDetailsPage;
