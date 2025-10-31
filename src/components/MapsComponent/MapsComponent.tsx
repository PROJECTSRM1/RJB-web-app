import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// Optional: Fix default icon issue (if marker icons don't show)
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

export default function MapView() {
    const position: [number, number] = [17.385, 78.4867];

//   const position = [17.385, 78.4867]; // Hyderabad coordinates

const markers: any = [
  { id: 1, name: "Main Gate", position: [17.385, 78.4867] },
  { id: 2, name: "Parking Area", position: [17.39, 78.48] },
  { id: 3, name: "CCTV Zone 3", position: [17.382, 78.49] },
];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m:any) => (
            <Marker key={m.id} position={m.position}>
                <Popup>📍 {m.name}</Popup>
            </Marker>
            ))}
      </MapContainer>
    </div>
  );
}
