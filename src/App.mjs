// import React, { useEffect, useState } from "react";
// import Hero from "./components/Hero.mjs";
// import Map from "./components/Map.mjs";
// import stations, { updateStationData } from "./data/StationsData.mjs"
// import './App.css';

// export default function App() {
//   const [elevatorData, setElevatorData] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://alerts.ttc.ca/api/alerts/live-alerts');
//         const data = await response.json();
//         const elevatorStatuses = data.accessibility;
//         const lastUpdatedTime = new Date(data.lastUpdated).toLocaleTimeString();
//         setElevatorData(elevatorStatuses);
//         setLastUpdated(lastUpdatedTime);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     }

//     fetchData();
//     const interval = setInterval(fetchData, 60000);
//     return () => clearInterval(interval);
//   }, [])

//   return (
//     <div className="App">
//       <Hero />
//       <Map elevatorData={elevatorData} lastUpdated={lastUpdated} />
//     </div>
//   )
// }


// export default function App() {
//   const [elevatorData, setElevatorData] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://alerts.ttc.ca/api/alerts/live-alerts');
//         const data = await response.json();
//         const elevatorStatuses = data.accessibility;
//         const lastUpdatedTime = new Date(data.lastUpdated).toLocaleTimeString();
//         setElevatorData(elevatorStatuses);
//         setLastUpdated(lastUpdatedTime);

//         updateStationData(); // Update station data after fetching elevator status
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     }

//     fetchData();
//     const interval = setInterval(fetchData, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <Hero />
//       <Map elevatorData={elevatorData} lastUpdated={lastUpdated} />
//     </div>
//   )
// }


// App.mjs

// import React, { useEffect, useState } from "react";
// import Hero from "./components/Hero.mjs";
// import Map from "./components/Map.mjs";
// import { updateStationData } from "./data/StationsData.mjs";
// import "./App.css";

// export default function App() {
//   const [elevatorData, setElevatorData] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://alerts.ttc.ca/api/alerts/live-alerts"
//         );
//         const data = await response.json();
//         const elevatorStatuses = data.accessibility;
//         const lastUpdatedTime = new Date(
//           data.lastUpdated
//         ).toLocaleTimeString();
//         setElevatorData(elevatorStatuses);
//         setLastUpdated(lastUpdatedTime);

//         updateStationData(); // Update station data after fetching elevator status
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     }

//     fetchData();
//     const interval = setInterval(fetchData, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <Hero />
//       <Map elevatorData={elevatorData} lastUpdated={lastUpdated} />
//     </div>
//   );
// }


// App.mjs

import React, { useEffect, useState } from "react";
import Hero from "./components/Hero.mjs";
import Map from "./components/Map.mjs";
import { getElevatorData } from "./data/StationsData.jsx";
import "./App.css";

export default function App() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = getElevatorData();
        const lastUpdatedTime = new Date(
          data.lastUpdated
        ).toLocaleTimeString();
        setLastUpdated(lastUpdatedTime);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Hero />
      <Map lastUpdated={lastUpdated} />
    </div>
  );
}


// App.mjs

// import React, { useEffect, useState } from "react";
// import Hero from "./components/Hero.mjs";
// import Map from "./components/Map.mjs";
// import { getElevatorData, updateStationData } from "./data/StationsData.mjs";
// import './App.css';

// export default function App() {
//   const [elevatorData, setElevatorData] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://alerts.ttc.ca/api/alerts/live-alerts');
//         const data = await response.json();
//         const elevatorStatuses = data.accessibility;
//         const lastUpdatedTime = new Date(data.lastUpdated).toLocaleTimeString();
        
//         setElevatorData(elevatorStatuses);
//         setLastUpdated(lastUpdatedTime);

//         updateStationData(); // Update station data after fetching elevator status
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     }

//     fetchData(); // Initial fetch
//     const interval = setInterval(fetchData, 60000); // Fetch data every minute

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, []);

//   return (
//     <div className="App">
//       <Hero />
//       <Map elevatorData={elevatorData} lastUpdated={lastUpdated} />
//     </div>
//   );
// }
