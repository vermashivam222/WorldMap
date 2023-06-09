import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "900px", height: "700px" }}>

      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#083da7"
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
