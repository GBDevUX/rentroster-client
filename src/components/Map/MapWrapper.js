import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
// import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";



const Map = withScriptjs(
  withGoogleMap((props) => <GoogleMap {...props}>{props.children}</GoogleMap>)
);

const MapWrapper = (props) => {
  return (
    <Map
      googleMapURL={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      loadingElement={<div style={{ height: `100%` }} />}
      {...props}
    >
      {/* <HeatmapLayer data = {data} /> */}
      {props.children}
    </Map>
  );
};

export default MapWrapper;
