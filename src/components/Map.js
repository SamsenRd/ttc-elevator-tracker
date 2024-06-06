import React from "react"
import "../styles/Map.css"
import ttcImg from "../images/TTC_Subway_Map.png"


export default function Map() {
    return (
        <>
            <div className="distribution-map">
                <img src={ttcImg} alt="TTC Subway and Streetcar Map" />
                <button className="map-point" style={{ top: "8.2%", left: "22.5%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>A Place</h2>
                            <p>You can put plenty of details in here. In the original, I listed contact information and linked phone numbers and email addresses.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "12.5%", left: "22.5%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Another Place</h2>
                            <p>Lorem ipsum something something</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "16%", left: "25%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Marauder Town</h2>
                            <p>I solemnly swear that I am up to no good</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "19.1%", left: "27.6%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Logan's Mum</h2>
                            <p>I&rsquo;m a marshmallow</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "22.5%", left: "30.1%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Toto</h2>
                            <p>I bless the rains</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "25.7%", left: "32.7%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>With Love</h2>
                            <p>&mdash; 007</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "28.8%", left: "35.2%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>A Place</h2>
                            <p>You can put plenty of details in here. In the original, I listed contact information and linked phone numbers and email addresses.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "33.3%", left: "35.2%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Another Place</h2>
                            <p>Lorem ipsum something something</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "36.3%", left: "35.2%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Marauder Town</h2>
                            <p>I solemnly swear that I am up to no good</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "39%", left: "35.2%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Logan's Mum</h2>
                            <p>I&rsquo;m a marshmallow</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "44.6%", left: "35.2%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Toto</h2>
                            <p>I bless the rains</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: "51.6%", left: "40.6%" }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>With Love</h2>
                            <p>&mdash; 007</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}