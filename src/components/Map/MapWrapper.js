import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import {server} from "../../library/api/server";
import { useState, useEffect, useCallback } from 'react';

// const heatData = [
//   {location: new window.google.maps.LatLng(37.782, -122.441), weight: 3}
// ];

const heatData = [];

const HEATLISTINGS = `
  query Listings {
    listings {
      latitude
      longitude
      total_views
    }
  }
`;

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap {...props}>
      {props.children}
      <HeatmapLayer data = {heatData} />
    </GoogleMap>
  ))
);

const MapWrapper = (props) => {
  const [mapData, setMapData] = useState([]);

  const fetchHeatListings = useCallback(async () => {
      const {data} = await server.fetch({ query: HEATLISTINGS});

      const reformatData = () => {
        let heatmarkers = [];
        let listings = data.listings

        listings.map((listing) => {
          let newHeatMarker = {
            location: new window.google.maps.LatLng(37.782, -122.441),
            weight: 3
          }
          newHeatMarker.location = new window.google.maps.LatLng(listing.latitude, listing.longitude);
          newHeatMarker.weight = listing.total_views;

          heatmarkers.push(newHeatMarker);
          return newHeatMarker;
        })
        return heatmarkers
      }
      setMapData(
        reformatData
      );
  }, []);

  useEffect(() => {
    fetchHeatListings().then(res => {
      console.log("HEAT MAP UPDATED")
    })

  }, [fetchHeatListings]);

  return (
    <Map
      googleMapURL={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      loadingElement={<div style={{ height: `100%` }} />}
      {...props}
    >
      <HeatmapLayer data = {mapData} />
      {props.children}
    </Map>
  );
};

export default MapWrapper;
