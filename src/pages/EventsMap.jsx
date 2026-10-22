import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { getUpcomingEvents } from "@/api";

const DEFAULT_CENTER = [49.0069, 8.4037];

const MapBounds = ({ events }) => {
  const map = useMap();

  useEffect(() => {
    const coordinates = events
      .filter((event) => event.latitude != null && event.longitude != null)
      .map((event) => [Number(event.latitude), Number(event.longitude)])
      .filter(([latitude, longitude]) => Number.isFinite(latitude) && Number.isFinite(longitude));

    if (coordinates.length === 1) {
      map.setView(coordinates[0], 13);
    }

    if (coordinates.length > 1) {
      map.fitBounds(coordinates, { padding: [32, 32], maxZoom: 13 });
    }
  }, [events, map]);

  return null;
};

const EventsMap = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        const data = await getUpcomingEvents(controller);
        setEvents(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Failed to load events.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchEvents();

    return () => controller.abort();
  }, []);

  const mappedEvents = events.filter((event) => {
    const latitude = Number(event.latitude);
    const longitude = Number(event.longitude);

    return Number.isFinite(latitude) && Number.isFinite(longitude);
  });

  return (
    <>
      <div className="mb-3">
        <Link className="mono-meta inline-flex items-center gap-1.5 uppercase" to="/">
          <span className="inline-block">←</span>
          <span>Back to upcoming events</span>
        </Link>
      </div>

      <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 hidden items-center border-b pb-2 uppercase lg:flex">
        <span className="bg-es-accent inline-block h-2 w-2" />
        <span>[ Upcoming events map ]</span>
      </div>

      <div className="mb-16 w-2/3">
        <h1 className="mb-6">Explore events near you</h1>
      </div>

      {isLoading && <p className="mono-meta uppercase">Loading events...</p>}

      {error && (
        <p role="alert" className="border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      {!isLoading && !error && mappedEvents.length === 0 && <p className="mono-meta uppercase">No events with map coordinates found.</p>}

      {!isLoading && !error && mappedEvents.length > 0 && (
        <div className="h-[70vh] min-h-96">
          <MapContainer center={DEFAULT_CENTER} zoom={6} scrollWheelZoom style={{ width: "100%", height: "100%" }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapBounds events={mappedEvents} />

            {mappedEvents.map((event) => (
              <Marker key={event.id} position={[Number(event.latitude), Number(event.longitude)]}>
                <Popup>
                  <Link to={`/events/${event.id}`}>
                    <strong>{event.title}</strong>
                    <br />
                    {event.location}
                  </Link>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default EventsMap;
