import React from 'react';
import { InfoWindow } from 'react-google-maps';
import GridCard from '../GridCard/GridCard';

const MapInfoWindow = ({ data, onCloseClick }) => {
  console.log("CLICK MARKER", data)
  return (
    <InfoWindow id={data?.id} onCloseClick={onCloseClick}>
      <GridCard
        className="info_window_card"
        title={data?.title}
        price={`$${data?.price}/Month`}
        location={`${data?.city}, ${data?.country}`}
        term={`Lease Term: ${data?.term} Months`}
      >
        <img src={data?.thumbUrl} alt={data?.title} />
      </GridCard>
    </InfoWindow>
  );
};

export default MapInfoWindow;
