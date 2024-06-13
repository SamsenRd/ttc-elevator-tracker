let stations = [
  //line one
  { top: "8.2%", left: "22.5%", name: "Vaughan Metropolitan Centre" },
  { top: "12.5%", left: "22.5%", name: "Highway 407" },
  { top: "16%", left: "25%", name: "Pioneer Village" },
  { top: "19.1%", left: "27.6%", name: "York University" },
  { top: "22.5%", left: "30.1%", name: "Finch West" },
  { top: "25.7%", left: "32.7%", name: "Downsview Park" },
  { top: "28.8%", left: "35.2%", name: "Sheppard West" },
  { top: "33.3%", left: "35.2%", name: "Wilson" },
  { top: "36.3%", left: "35.2%", name: "Yorkdale" },
  { top: "39%", left: "35.2%", name: "Lawrence West" },
  { top: "44.6%", left: "35.2%", name: "Eglinton West" },
  { top: "51.6%", left: "40.6%", name: "St Clair West" },
  { top: "55%", left: "43.3%", name: "Dupont" },
  { top: "63.2%", left: "43.3%", name: "Spadina" },
  { top: "63.2%", left: "47.3%", name: "St George" },
  { top: "72.1%", left: "47.3%", name: "Queen's Park" },
  { top: "75.6%", left: "47.3%", name: "St Patrick" },
  { top: "79%", left: "47.3%", name: "Osgoode" },
  { top: "82.5%", left: "47.3%", name: "St Andrew" },
  { top: "88.6%", left: "50%", name: "Union"},
  { top: "79%", left: "52.7%", name: "Queen" },
  { top: "75.6%", left: "52.7%", name: "Dundas" },
  { top: "68.6%", left: "52.7%", name: "Wellesley" },
  { top: "63.2%", left: "52.7%", name: "Bloor-Yonge" },
  { top: "51.5%", left: "52.7%", name: "St Clair" },
  { top: "48%", left: "52.7%", name: "Davisville" },
  { top: "44.6%", left: "52.7%", name: "Eglinton" },
  { top: "33.2%", left: "52.7%", name: "York Mills" },
  { top: "29%", left: "52.7%", name: "Sheppard-Yonge" },
  { top: "24.1%", left: "52.7%", name: "North York Centre" },
  { top: "20.1%", left: "52.7%", name: "Finch" },
  //line2
  { top: "63.2%", left: "14.5%", name: "Kipling" },
  { top: "63.2%", left: "18.5%", name: "Royal York" },
  { top: "63.2%", left: "22.5%", name: "Jane" },
  { top: "63.2%", left: "24.5%", name: "Runnymede" },
  { top: "63.2%", left: "28.6%", name: "Keele" },
  { top: "63.2%", left: "30.6%", name: "Dundas West" },
  { top: "63.2%", left: "32.6%", name: "Lansdowne" },
  { top: "63.2%", left: "34.6%", name: "Dufferin" },
  { top: "63.2%", left: "36.6%", name: "Ossington" },
  { top: "63.2%", left: "40.6%", name: "Bathurst" },
  { top: "63.2%", left: "50%", name: "Bay" },
  { top: "63.2%", left: "56.7%", name: "Sherbourne" },
  { top: "63.2%", left: "62%", name: "Broadview" },
  { top: "63.2%", left: "64%", name: "Chester" },
  { top: "63.2%", left: "66%", name: "Pape" },
  { top: "63.2%", left: "72%", name: "Coxwell" },
  { top: "63.2%", left: "74%", name: "Woodbine" },
  { top: "63.2%", left: "76%", name: "Main Street" },
  { top: "57%", left: "78.9%", name: "Victoria Park" },
  { top: "44.7%", left: "84.5%", name: "Kennedy" },
  //Line 4
  { top: "29%", left: "57%", name: "Bayview" },
  { top: "29%", left: "61.3%", name: "Bessarion" },
  { top: "29%", left: "65.7%", name: "Leslie" },
  { top: "29%", left: "70%", name: "Don Mills" },
];


let elevatorData = [];

// Function to get the stations
export const getStations = () => stations;

// Function to get elevator data
export const getElevatorData = () => elevatorData;

// Function to update station data
export const updateStationData = async () => {
  try {
    const response = await fetch('https://alerts.ttc.ca/api/alerts/live-alerts');
    const data = await response.json();
    const elevatorStatuses = data.accessibility;

    const updatedStations = stations.map(station => {
      const matchingStatus = elevatorStatuses.find(status =>
        status.url.includes(station.name.replace(/\s+/g, "-").toLowerCase())
      );
      if (matchingStatus) {
        return { ...station, status: matchingStatus.title };
      } else {
        return { ...station, status: "In Service" };
      }
    });

    stations = updatedStations;
    elevatorData = elevatorStatuses;

    console.log("Updated stations with real-time data:", stations);
  } catch (error) {
    console.error("Error updating station data:", error);
  }
};

// Initial call to updateStationData
updateStationData();

// Set interval to update every minute
setInterval(updateStationData, 60000);

export default stations;





// let elevatorData = [];

// export const getStations = () => stations;

// export const getElevatorData = () => elevatorData;

// export const updateStationData = async () => {
//   try {
//     const response = await fetch('https://alerts.ttc.ca/api/alerts/live-alerts');
//     const data = await response.json();
//     const elevatorStatuses = data.accessibility;

//     // Update stations with real-time status
//     const updatedStations = stations.map(station => {
//       const matchingStatus = elevatorStatuses.find(status =>
//         status.url.includes(station.name.replace(/\s+/g, "-").toLowerCase())
//       );
//       if (matchingStatus) {
//         return { ...station, status: matchingStatus.title};
//       } else {
//         return { ...station, status: "In Service" }; // Default status if not found
//       }
//     });

//     // Update local variables
//     stations = updatedStations;
//     elevatorData = elevatorStatuses;

//     console.log("Updated stations with real-time data:", stations);
//   } catch (error) {
//     console.error("Error updating station data:", error);
//   }
// };

// // Initial call to updateStationData
// updateStationData();

// // Set interval to update every minute
// setInterval(updateStationData, 60000);

// export default stations;






// let elevatorData = [];

// export const getStations = () => stations;

// export const getElevatorData = () => elevatorData;

// export const updateStationData = async () => {
//   try {
//     const response = await fetch(
//       "https://alerts.ttc.ca/api/alerts/live-alerts"
//     );
//     const data = await response.json();
//     const elevatorStatuses = data.accessibility;

//     // Update stations with real-time status
//     const updatedStations = stations.map(station => {
//       const matchingStatus = elevatorStatuses.find(status =>
//         status.url.includes(station.name.replace(/\s+/g, "-").toLowerCase())
//       );
//       if (matchingStatus) {
//         return { ...station, status: matchingStatus.effectDesc };
//       } else {
//         return { ...station, status: "In Service" }; // Default status if not found
//       }
//     });

//     stations = updatedStations; // Assign updated stations back to the original variable
//     elevatorData = elevatorStatuses; // Update elevator data with fetched data

//     console.log("Updated stations with real-time data:", stations);
//   } catch (error) {
//     console.error("Error updating station data:", error);
//   }
// };

// // Initial call to updateStationData
// updateStationData();

// // Set interval to update every minute
// setInterval(updateStationData, 60000);

// export default stations;






// export const updateStationData = async () => {
//   try {
//     const response = await fetch(
//       "https://alerts.ttc.ca/api/alerts/live-alerts"
//     );
//     const data = await response.json();
//     const elevatorStatuses = data.accessibility;

//     // Update stations with real-time status
//     const updatedStations = stations.map(station => {
//       const matchingStatus = elevatorStatuses.find(status =>
//         status.url.includes(station.name.replace(/\s+/g, "-").toLowerCase())
//       );
//       if (matchingStatus) {
//         return { ...station, status: matchingStatus.effectDesc };
//       } else {
//         return { ...station, status: "In Service" }; // Default status if not found
//       }
//     });

//     stations = updatedStations; // Assign updated stations back to the original variable

//     console.log("Updated stations with real-time data:", stations);
//   } catch (error) {
//     console.error("Error updating station data:", error);
//   }
// };

// // Initial call to updateStationData
// updateStationData();

// // Set interval to update every minute
// setInterval(updateStationData, 60000);

// export default stations;

// // Function to update station data with real-time status
// export const updateStationData = async () => {
//   try {
//     const response = await fetch('https://alerts.ttc.ca/api/alerts/live-alerts');
//     const data = await response.json();
//     const elevatorStatuses = data.accessibility;

//     // Update stations with real-time status
//     const updatedStations = stations.map(station => {
//       const matchingStatus = elevatorStatuses.find(status => status.url.includes(station.name.replace(/\s+/g, '-').toLowerCase()));
//       if (matchingStatus) {
//         return { ...station, status: matchingStatus.effectDesc };
//       } else {
//         return { ...station, status: "In Service" }; // Default status if not found
//       }
//     });

//     stations = updatedStations; // Assign updated stations back to the original variable

//     console.log("Updated stations with real-time data:", stations);
//   } catch (error) {
//     console.error("Error updating station data:", error);
//   }
// };

// // Call updateStationData initially or at regular intervals
// updateStationData();
// setInterval(updateStationData, 60000); // Update every minute

// export default stations;