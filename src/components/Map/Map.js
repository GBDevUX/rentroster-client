/* eslint-disable no-undef */
import React from 'react';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import MapWrapper from './MapWrapper';
import ListingMapMarkerCluster from './ListingPageMap';
import ListingMapMarkerSingle from './SinglePageMap';

const Map = (props) => {
  const { multiple, location, heatmap } = props;
  const handleClustererClick = (data) => {
    const markerClusterer = data.getMarkers();
    console.log(`Current clicked markers length: ${markerClusterer.length}`);
    console.log(markerClusterer);
  };

  return (
    <>
      {multiple && multiple === true ? (
        <MapWrapper
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          defaultZoom={7}
          defaultCenter={{
            lat: 41.8858,
            lng: -75.7223,
          }}
        >
          <MarkerClusterer
            gridSize={60}
            averageCenter
            defaultEnableRetinaIcons={true}
            onClick={handleClustererClick}
          >
            <ListingMapMarkerCluster location={location} />
          </MarkerClusterer>
          {/* {heatmap ? (
            <HeatmapLayer data = {} />
          ) : (
            null
          )} */}
        </MapWrapper>
      ) : (
        <MapWrapper
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          defaultZoom={8}
          defaultCenter={{
            lat: 40.706877,
            lng: -74.011265,
          }}
        >
          <ListingMapMarkerSingle location={location} />
        </MapWrapper>
      )}
    </>
  );
};

export default Map;
