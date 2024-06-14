import React, { useEffect, useState } from "react";
import "../styles/Map.css"
import axios from "axios";
import ttcImg from "../images/TTC_Subway_Map.png";

export default function Map() {
  const [stations, setStations] = useState([
    { top: "8.2%", left: "22.5%", name: "Vaughan Metropolitan Centre", status: "In service" },
    { top: "12.5%", left: "22.5%", name: "Highway 407", status: "In service" },
    { top: "16%", left: "25%", name: "Pioneer Village", status: "In service" },
    { top: "19.1%", left: "27.6%", name: "York University", status: "In service" },
    { top: "22.5%", left: "30.1%", name: "Finch West", status: "In service" },
    { top: "25.7%", left: "32.7%", name: "Downsview Park", status: "In service" },
    { top: "28.8%", left: "35.2%", name: "Sheppard West", status: "In service" },
    { top: "33.3%", left: "35.2%", name: "Wilson", status: "In service" },
    { top: "36.3%", left: "35.2%", name: "Yorkdale", status: "In service" },
    { top: "39%", left: "35.2%", name: "Lawrence West", status: "In service" },
    { top: "44.6%", left: "35.2%", name: "Eglinton West", status: "In service" },
    { top: "51.6%", left: "40.6%", name: "St Clair West", status: "In service" },
    { top: "55%", left: "43.3%", name: "Dupont", status: "In service" },
    { top: "63.2%", left: "43.3%", name: "Spadina", status: "In service" },
    { top: "63.2%", left: "47.3%", name: "St George", status: "In service" },
    { top: "72.1%", left: "47.3%", name: "Queen's Park", status: "In service" },
    { top: "75.6%", left: "47.3%", name: "St Patrick", status: "In service" },
    { top: "79%", left: "47.3%", name: "Osgoode", status: "In service" },
    { top: "82.5%", left: "47.3%", name: "St Andrew", status: "In service" },
    { top: "88.6%", left: "50%", name: "Union", status: "In service" },
    { top: "79%", left: "52.7%", name: "Queen", status: "In service" },
    { top: "75.6%", left: "52.7%", name: "Dundas", status: "In service" },
    { top: "68.6%", left: "52.7%", name: "Wellesley", status: "In service" },
    { top: "63.2%", left: "52.7%", name: "Bloor-Yonge", status: "In service" },
    { top: "51.5%", left: "52.7%", name: "St Clair", status: "In service" },
    { top: "48%", left: "52.7%", name: "Davisville", status: "In service" },
    { top: "44.6%", left: "52.7%", name: "Eglinton", status: "In service" },
    { top: "33.2%", left: "52.7%", name: "York Mills", status: "In service" },
    { top: "29%", left: "52.7%", name: "Sheppard-Yonge", status: "In service" },
    { top: "24.1%", left: "52.7%", name: "North York Centre", status: "In service" },
    { top: "20.1%", left: "52.7%", name: "Finch", status: "In service" },
    // Line 2
    { top: "63.2%", left: "14.5%", name: "Kipling", status: "In service" },
    { top: "63.2%", left: "18.5%", name: "Royal York", status: "In service" },
    { top: "63.2%", left: "22.5%", name: "Jane", status: "In service" },
    { top: "63.2%", left: "24.5%", name: "Runnymede", status: "In service" },
    { top: "63.2%", left: "28.6%", name: "Keele", status: "In service" },
    { top: "63.2%", left: "30.6%", name: "Dundas West", status: "In service" },
    { top: "63.2%", left: "32.6%", name: "Lansdowne", status: "In service" },
    { top: "63.2%", left: "34.6%", name: "Dufferin", status: "In service" },
    { top: "63.2%", left: "36.6%", name: "Ossington", status: "In service" },
    { top: "63.2%", left: "40.6%", name: "Bathurst", status: "In service" },
    { top: "63.2%", left: "50%", name: "Bay", status: "In service" },
    { top: "63.2%", left: "56.7%", name: "Sherbourne", status: "In service" },
    { top: "63.2%", left: "62%", name: "Broadview", status: "In service" },
    { top: "63.2%", left: "64%", name: "Chester", status: "In service" },
    { top: "63.2%", left: "66%", name: "Pape", status: "In service" },
    { top: "63.2%", left: "72%", name: "Coxwell", status: "In service" },
    { top: "63.2%", left: "74%", name: "Woodbine", status: "In service" },
    { top: "63.2%", left: "76%", name: "Main Street", status: "In service" },
    { top: "57%", left: "78.9%", name: "Victoria Park", status: "In service" },
    { top: "44.7%", left: "84.5%", name: "Kennedy", status: "In service" },
    // Line 4
    { top: "29%", left: "57%", name: "Bayview", status: "In service" },
    { top: "29%", left: "61.3%", name: "Bessarion", status: "In service" },
    { top: "29%", left: "65.7%", name: "Leslie", status: "In service" },
    { top: "29%", left: "70%", name: "Don Mills", status: "In service" },
  ]);

  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const response = await axios.get("https://alerts.ttc.ca/api/alerts/live-alerts")
        const liveAlerts = response.data

        const updatedStations = stations.map(station => {
          const alert = liveAlerts.find(alert => alert.id === station.name && alert.routeType === "Elevator")
          return {
            ...station,
            status: alert ? "Out of service" : "In Service"
          }
        })
        setStations(updatedStations);
        setLastUpdated(new Date().toLocaleString());
      } catch (error) {
        console.error("Error fetching live alerts:", error);
      }
    };
    fetchLiveData();
    const interval = setInterval(fetchLiveData, 60000); // Fetch data every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [stations]);




  return (
    <>
      <div className="mapHeader">
        <h2>Real-time Elevator Updates</h2>
        <div className="mapLegend">
          <p>O --- Out of Service</p>
          <p>O --- In service</p>
        </div>
        <p>
          <i>Last updated: {lastUpdated}</i>
        </p>
      </div>

      <div className="map">
        <img src={ttcImg} className="mapImg" alt="TTC Subway Map" />
        {stations.map((station, index) => (
          <button
            className={`map-point ${station.status === "Out of service" ? "out-of-service" : "in-service"}`}
            style={{ top: station.top, left: station.left }}
            key={index}
          >
            <div className="content">
              <div className="centered-y">
                <h2>{station.name}</h2>
                <p>Status: {station.status}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}