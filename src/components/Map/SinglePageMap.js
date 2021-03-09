import React, { useState } from 'react';
import { Marker } from 'react-google-maps';
import ListingInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const SingleMapDisplay = ({ location }) => {
  let listingData = [];
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);

  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  listingData.push({
    lat: location?.location.lat,
    lng: location?.location.lng,
    id: location?.id,
    title: location?.title,
    thumbUrl: location?.image.thumb_url,
    formattedAddress: location?.location.formattedAddress,
    price: location?.price,
    rating: location?.rating,
    ratingCount: location?.ratingCount,
  });

  return listingData.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        position={singlePostLoaction}
        onClick={() => {
          infoWindowToggle(singlePostLoaction.id);
        }}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <ListingInfoWindow
            data={singlePostLoaction}
            onCloseClick={() => {
              infoWindowToggle(singlePostLoaction.id);
            }}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

const ListingMapMarkerSingle = (props) => {
  return <SingleMapDisplay {...props} />;
};

export default ListingMapMarkerSingle;
