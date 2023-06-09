import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React, { useState } from "react";

function WorldMap() {
  const [countryData, setCountryData] = useState(null);

  const handleCountryClick = (event, code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  };

  return (
    <div style={{ margin: "auto", width: "900px", height: "700px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#083da7"
        onRegionClick={handleCountryClick}
      />

      {countryData && (
        <div style={{ marginTop: "-20px" , textAlign: "center" , backgroundColor: "lightgreen"  }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px", color: "#333" }}>
            {countryData[0].name.common}
          </h2>
          <p style={{ fontSize: "18px", color: "#777" }}>
            <strong>Capital:</strong> {countryData[0].capital}
          </p>
          <p style={{ fontSize: "18px", color: "#777" }}>
            <strong>Population:</strong> {countryData[0].population}
          </p>
          <p style={{ fontSize: "18px", color: "#777" }}>
            <strong>Region:</strong> {countryData[0].region}
          </p>
          <p style={{ fontSize: "18px", color: "#777" }}>
            <strong>Area:</strong> {countryData[0].area} km²
          </p>
          <p style={{ fontSize: "18px", color: "#777", marginBottom: "20px" }}>
            <strong>TimeZones:</strong> {countryData[0].timezones}
          </p>
          <p style={{ fontSize: "18px", color: "#777" , paddingBottom: "30px" }}>
            <strong>Languages Spoken:</strong>{" "}
            {Object.values(countryData[0].languages).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default WorldMap;
