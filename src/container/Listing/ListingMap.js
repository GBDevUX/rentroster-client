import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Map from '../../components/Map/Map';
import { FixedMap } from './Listing.style';
import { server } from '../../library/api/server';

//NABORLY API QUERY STRING
const LISTINGS = `
  query Listings {
    listings {
      id
      property
      latitude
      longitude
      city
      country
      monthly_rate
      lease_term_months
      total_views
    }
  }
`;

const ListingMap = () => {

  const [mapData, setMapData] = useState([]);
  // const [mapLoading, setMapLoading] = useState("false");

  const fetchListings = useCallback(async () => {
      const {data} = await server.fetch({ query: LISTINGS});

      const reformatData = () => {
        let markers = [];
        let listings = data.listings

        listings.map((listing) => {
          let newMarker={
            "id": "",
            "title": "",
            "slug": "",
            "status": "publish",
            "price": "0",
            "lease_term_months":12,
            "image": {
              "id": 90096,
              "url": "https://techforluddites.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png",
              "thumb_url": "https://techforluddites.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
            },
            "location": {
              "id": 0,
              "lat": 0,
              "lng": 0,
              "city": "",
              "country_long": "",
              "country_short": ""
            }
          }
          newMarker.id = listing.id
          newMarker.title = listing.property;
          newMarker.price = listing.monthly_rate;
          newMarker.location.lat = listing.latitude;
          newMarker.location.lng = listing.longitude;
          newMarker.location.city = listing.city;
          newMarker.location.country_long = listing.country;
          newMarker.location.id = listing.id;
          newMarker.lease_term_months = listing.lease_term_months;


          markers.push(newMarker);
          return newMarker;
        })
        return markers
      }
      setMapData(
        reformatData
      );
  }, []);

  useEffect(() => {
    fetchListings().then(res => {
      console.log("SITE UPDATED")
    })

  }, [fetchListings]);

  return (
    <FixedMap>
      <Map location={ mapData } multiple={true} heatmap={true} />
    </FixedMap>
  );
};

export default ListingMap;
