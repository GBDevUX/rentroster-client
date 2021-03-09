import React, { Fragment } from 'react';
import ListingMap from './ListingMap';
import ListingWrapper from './Listing.style';

export default function Listing({ location, history }) {

  return (
    <>
      <ListingWrapper>
        <Fragment>
          <ListingMap />
        </Fragment>
      </ListingWrapper>

    </>
  );
}
