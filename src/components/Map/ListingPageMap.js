import React, { useState } from 'react';
import { Marker } from 'react-google-maps';
import ListingInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const ListingMapMarkerCluster = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);
  let listingData = [];

  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  location &&
    location.forEach((item) => {
      listingData.push({
        id: item.id,
        lat: parseFloat(item.location.lat),
        lng: parseFloat(item.location.lng),
        title: item.title,
        thumbUrl: item.image.thumb_url,
        formattedAddress: item.location.formattedAddress,
        price: item.price,
        city:item.location.city,
        country:item.location.country_long,
        term: item.lease_term_months
      });
    });

  return listingData.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        position={singlePostLoaction}
        onClick={() => infoWindowToggle(singlePostLoaction.id)}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <ListingInfoWindow
            data={singlePostLoaction}
            onCloseClick={() => infoWindowToggle(singlePostLoaction.id)}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

export default ListingMapMarkerCluster;
