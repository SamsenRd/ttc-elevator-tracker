// import React from "react";
// import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import useElevatorData from "./UseElevatorData.js"

import Hero from "../src/components/Hero.js"
import Map from "../src/components/Map.js"
import './App.css';

// delete L.Icon.Default.prototype._getIconUrl;

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Map />
    </div>
  );
}

