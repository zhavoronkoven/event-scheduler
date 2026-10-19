import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const EventMap = ({ lat, lng, zoom = 14, popup = "" }) => {
  if (lat == null || lng == null) {
    return <div>Map is not available.</div>;
  }

  const latitude = Number(lat);
  const longitude = Number(lng);

  return (
    <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>{popup}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default EventMap;
