import * as React from "react";
import ReactMapGL from "react-map-gl";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SimpleMap() {
  return (
    <Grid item xs={12} sm={4} style={{ marginTop: "30px" }}>
      <MapContainer
        style={{
          height: "650px",
          width: "100%",
          marginLeft: "15px",
          marginTop: "5px",
        }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
}

export default SimpleMap;

// import * as React from "react";
// import ReactMapGL from "react-map-gl";
// import { useState } from "react";
// import Grid from "@material-ui/core/Grid";

// function SimpleMap() {
//   const [viewport, setViewport] = useState({
//     width: 400,
//     height: 400,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//   });

//   return (
//     <Grid item xs={12} sm={4} style={{ marginTop: "30px" }}>
//       <ReactMapGL
//         {...viewport}
//         onViewportChange={(nextViewport) => setViewport(nextViewport)}
//       />
//     </Grid>
//   );
// }

// export default SimpleMap;
