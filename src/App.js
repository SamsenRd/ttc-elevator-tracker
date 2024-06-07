import React, { useEffect, useState } from "react";
import Hero from "./components/Hero.mjs"
import Map from "./components/Map.mjs"
import './App.css';

export default function App() {
  const [elevatorData, setElevatorData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch("https://alerts.ttc.ca/api/alerts/live-alerts");
        const data = await response.json();
        const elevatorStatuses = data.accesibility;
        const lastUpdatedTime = new Date(data.lastUpdated).toLocaleTimeString();
        setElevatorData(elevatorStatuses);
        setLastUpdated(lastUpdatedTime);
      }catch(error){
        console.log("Error fetching data", error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      <Hero />
      <Map elevatorData={elevatorData} lastUpdated={lastUpdated}/>
    </div>
  );
}

