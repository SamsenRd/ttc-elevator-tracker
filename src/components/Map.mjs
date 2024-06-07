import React from "react"
import "../styles/Map.css"
import ttcImg from "../images/TTC_Subway_Map.png"
import stations from "../data/StationsData.mjs"


export default function Map({elevatorData, lastUpdated}) {
    const getStationStatus = stationName =>{
        const stationAlert = elevatorData.find(alert => alert.station === stationName);
        return stationAlert ? stationAlert.status : "In service";
    }
    return (
        <>
            <div class="mapHeader">
                <h2>Real-time Elevator Updates</h2>
                <div class="mapLegend">
                    <p>O --- Out of service</p>
                    <p>O --- In service</p>
                </div>
                <p><i>Last updated: {lastUpdated}</i></p>
            </div>

            <div className="distribution-map">
                <img src={ttcImg} alt="TTC Subway and Streetcar Map" />
                {stations.map((station, index) => (
                    <button className="map-point" style={{ top: station.top, left: station.left }} key={index}>
                        <div className="content">
                            <div className="centered-y">
                                <h2>{station.name}</h2>
                                <p>Status: {getStationStatus(station.name)}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </>
    )
}

