import React from "react"
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../';

const imageUrl = '../src/images/TTC_SubwayStreetcarMap.jpg';
const errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
const altText = 'Toronto TTC Subway and Streetcar Map';
const latLngBounds = L.latLngBounds([
    [43.855, -79.6], // Adjust these coordinates based on the actual bounds of your image
    [43.58, -79.12]
]);

function ImageOverlayComponent() {
    const map = useMap();

    useEffect(() => {
        const imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 0.8,
            errorOverlayUrl: errorOverlayUrl,
            alt: altText,
            interactive: true
        }).addTo(map);

        L.rectangle(latLngBounds).addTo(map); // Optional: to show the bounds
        map.fitBounds(latLngBounds);

        return () => {
            map.removeLayer(imageOverlay);
        };
    }, [map]);

    return null;
}

export default function Map() {
    return (
        <>
            <MapContainer
                center={[43.7, -79.4]}  // Adjust the initial center of the map
                zoom={12}
                style={{ height: "100vh", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    maxZoom={19}
                />
                <ImageOverlayComponent />
            </MapContainer>
        </>
    )
}