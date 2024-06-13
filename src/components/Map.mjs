// import React from "react";
// import "../styles/Map.css";
// import ttcImg from "../images/TTC_Subway_Map.png";
// import stations from "../data/StationsData.mjs";
// import "../App.mjs"

// export default function Map({ elevatorData, lastUpdated }) {
//   const getStationStatus = stationName => {
//     const stationAlert = elevatorData.find(alert => {
//       const urlParts = alert.url.split('/');
//       const alertStationName = urlParts[urlParts.length - 1].replace('-station', '').replace('-', ' ');
//       return alertStationName.toLowerCase() === stationName.toLowerCase();
//     });

//     return stationAlert ? stationAlert.effectDesc : "In Service";
//   };

//   return (
//     <>
//       <div className="mapHeader">
//         <h2>Real-time Elevator Updates</h2>
//         <div className="mapLegend">
//           <p>O --- Out of service</p>
//           <p>O --- In service</p>
//         </div>
//         <p><i>Last updated: {lastUpdated}</i></p>
//       </div>

//       <div className="distribution-map">
//         <img src={ttcImg} alt="TTC Subway and Streetcar Map" />
//         {stations.map((station, index) => (
//           <button className="map-point" style={{ top: station.top, left: station.left }} key={index}>
//             <div className="content">
//               <div className="centered-y">
//                 <h2>{station.name}</h2>
//                 <p>Status: {getStationStatus(station.name)}</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }


// Map.mjs

// import React from "react";
// import "../styles/Map.css";
// import ttcImg from "../images/TTC_Subway_Map.png";
// import stations from "../data/StationsData.mjs";

// export default function Map({ elevatorData, lastUpdated }) {
//   const getStationStatus = stationName => {
//     const station = stations.find(station => station.name === stationName);
//     return station ? station.status : "In Service";
//   };

//   return (
//     <>
//       <div className="mapHeader">
//         <h2>Real-time Elevator Updates</h2>
//         <div className="mapLegend">
//           <p>O --- Out of service</p>
//           <p>O --- In service</p>
//         </div>
//         <p><i>Last updated: {lastUpdated}</i></p>
//       </div>

//       <div className="distribution-map">
//         <img src={ttcImg} alt="TTC Subway and Streetcar Map" />
//         {stations.map((station, index) => (
//           <button className="map-point" style={{ top: station.top, left: station.left }} key={index}>
//             <div className="content">
//               <div className="centered-y">
//                 <h2>{station.name}</h2>
//                 <p>Status: {getStationStatus(station.name)}</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }


// Map.mjs

// import React from "react";
// import "../styles/Map.css";
// import ttcImg from "../images/TTC_Subway_Map.png";
// import stations from "../data/StationsData.mjs";

// export default function Map({ lastUpdated }) {
//   const getStationStatus = stationName => {
//     const station = stations.find(
//       station => station.name === stationName
//     );
//     return station ? station.status : "In Service";
//   };

//   return (
//     <>
//       <div className="mapHeader">
//         <h2>Real-time Elevator Updates</h2>
//         <div className="mapLegend">
//           <p>O --- Out of service</p>
//           <p>O --- In service</p>
//         </div>
//         <p>
//           <i>Last updated: {lastUpdated}</i>
//         </p>
//       </div>

//       <div className="distribution-map">
//         <img
//           src={ttcImg}
//           alt="TTC Subway and Streetcar Map"
//         />
//         {stations.map((station, index) => (
//           <button
//             className="map-point"
//             style={{ top: station.top, left: station.left }}
//             key={index}
//           >
//             <div className="content">
//               <div className="centered-y">
//                 <h2>{station.name}</h2>
//                 <p>Status: {getStationStatus(station.status)}</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }


// import React from "react";
// import "../styles/Map.css";
// import ttcImg from "../images/TTC_Subway_Map.png";
// import stations from "../data/StationsData.mjs";

// export default function Map() {


//   return (
//     <>
//       <div className="mapHeader">
//         <h2>Real-time Elevator Updates</h2>
//         <div className="mapLegend">
//           <p>O --- Out of service</p>
//           <p>O --- In service</p>
//         </div>
//         <p>
//           <i>Last updated: </i>
//         </p>
//       </div>

//       <div className="distribution-map">
//         <img
//           src={ttcImg}
//           alt="TTC Subway and Streetcar Map"
//         />
//         {stations.map((station, index) => (
//           <button
//             className="map-point"
//             style={{ top: station.top, left: station.left }}
//             key={index}
//           >
//             <div className="content">
//               <div className="centered-y">
//                 <h2>{station.name}</h2>
//                 <p>Status:</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// Map.mjs

// Map.mjs

// import React, { useState, useEffect } from "react";
// import "../styles/Map.css";
// import ttcImg from "../images/TTC_Subway_Map.png";
// import { getStations } from "../data/StationsData.mjs";

// export default function Map() {
//   const [stations, setStations] = useState(getStations());
//   const [lastUpdated, setLastUpdated] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStations(getStations());
//       const now = new Date().toLocaleTimeString();
//       setLastUpdated(now);
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   const getStationStatus = stationName => {
//     const station = stations.find(
//       station => station.name === stationName
//     );
//     return station ? station.status : "In Service";
//   };

//   return (
//     <>
//       <div className="mapHeader">
//         <h2>Real-time Elevator Updates</h2>
//         <div className="mapLegend">
//           <p>O --- Out of service</p>
//           <p>O --- In service</p>
//         </div>
//         <p>
//           <i>Last updated: {lastUpdated}</i>
//         </p>
//       </div>

//       <div className="distribution-map">
//         <img src={ttcImg} alt="TTC Subway and Streetcar Map" />
//         {stations.map((station, index) => (
//           <button
//             className="map-point"
//             style={{ top: station.top, left: station.left }}
//             key={index}
//           >
//             <div className="content">
//               <div className="centered-y">
//                 <h2>{station.name}</h2>
//                 <p>Status: {getStationStatus(station.name)}</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import "../styles/Map.css";
import ttcImg from "../images/TTC_Subway_Map.png";
import { getStations, updateStationData } from "../data/StationsData.jsx";

export default function Map() {
  const [stations, setStations] = useState(getStations());
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const fetchData = async () => {
      await updateStationData();
      setStations(getStations());
      const now = new Date().toLocaleTimeString();
      setLastUpdated(now);
    };

    fetchData(); // Fetch data immediately on mount
    const interval = setInterval(fetchData, 60000); // Fetch data every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const getStationStatus = stationName => {
    const station = stations.find(station => station.name === stationName);
    return station ? station.status : "In Service";
  };

  return (
    <>
      <div className="mapHeader">
        <h2>Real-time Elevator Updates</h2>
        <div className="mapLegend">
          <p>O --- Out of service</p>
          <p>O --- In service</p>
        </div>
        <p>
          <i>Last updated: {lastUpdated}</i>
        </p>
      </div>

      <div className="distribution-map">
        <img src={ttcImg} alt="TTC Subway and Streetcar Map" />
        {stations.map((station, index) => (
          <button
            className="map-point"
            style={{ top: station.top, left: station.left }}
            key={index}
          >
            <div className="content">
              <div className="centered-y">
                <h2>{station.name}</h2>
                <p>Status: {getStationStatus(station.status)}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
