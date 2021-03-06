import React, { Fragment, useContext, useState } from 'react';
import ListingMap from './ListingMap';
import ListingWrapper, {ShowHeatMapCheckbox} from './Listing.style';
import { Checkbox } from 'antd';
import { Waypoint } from 'react-waypoint';
import Sticky from 'react-stickynode';
// Filter Toolbar
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import FilterDrawer from '../../components/Search/MobileSearchView';
import CategotySearch from '../../components/Search/CategorySearch/CategotySearch';
import { LayoutContext } from '../../context/LayoutProvider';
import useWindowSize from '../../library/hooks/useWindowSize';


export default function Listing({ location, history }) {
  const { width } = useWindowSize();
  const [showHeatMap, setHeatShowMap] = useState(true);
  const [, dispatch] = useContext(LayoutContext);

  //heat map
  if(showHeatMap){

  }
  const handleHeatMapToggle = () => {
    setHeatShowMap((showHeatMap) => !showHeatMap);
  };
  return (
    <>
      <Waypoint
        onEnter={() => dispatch({ type: 'HIDE_TOP_SEARCHBAR' })}
        onLeave={() => dispatch({ type: 'SHOW_TOP_SEARCHBAR' })}
      />
      <ListingWrapper>
        <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
          <Toolbar
            left={
              width > 991 ? (
                <CategotySearch history={history} location={location} />
              ) : (
                <FilterDrawer history={history} location={location} />
              )
            }
            right={
              <>
                <ShowHeatMapCheckbox>
                  <Checkbox defaultChecked={true} onChange={handleHeatMapToggle}>
                    Popular Properties
                  </Checkbox>
                </ShowHeatMapCheckbox>
              </>
            }
          />
        </Sticky>
        <Fragment>
          <ListingMap />
        </Fragment>
      </ListingWrapper>

    </>
  );
}
