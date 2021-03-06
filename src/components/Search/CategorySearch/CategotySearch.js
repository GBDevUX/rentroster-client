import React, { useState } from 'react';
// import moment from 'moment';
import { Button, Slider } from 'antd';
import ViewWithPopup from '../../../components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from '../../../components/UI/InputIncDec/InputIncDec';
// import DateRangePickerBox from '../../../components/UI/DatePicker/ReactDates';
import { setStateToUrl, getStateFromUrl } from '../url_handler';
import {
  priceInit,
  // calenderItem,
  // getAmenities,
  // getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  // RoomGuestWrapper,
  LeaseTermWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategotySearch = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);
  const state = {
    amenities: searchParams.amenities || [],
    property: searchParams.property || [],
    date_range: searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    },
    price: searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    },
    location: searchParams.location || {
      lat: null,
      lng: null,
    },
    room: parseInt(searchParams.room) || 0,
    guest: parseInt(searchParams.guest) || 0,
    lease_term: parseInt(searchParams.lease_term) || 0,
  };
  const {
    // amenities,
    // property,
    // date_range,
    price,
    // room,
    // guest,
    lease_term
  } = state;
  // const [countRoom, setRoom] = useState(room);
  // const [countGuest, setGuest] = useState(guest);
  const [countMonths, setMonths] = useState(lease_term);

  const onChange = (value, type) => {
    const query = {
      ...state,
      [type]: value,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/',
      search: search,
    });
  };

  // const handleRoomGuestApply = () => {
  //   const query = {
  //     ...state,
  //     room: countRoom,
  //     guest: countGuest,
  //   };
  //   const search = setStateToUrl(query);
  //   history.push({
  //     pathname: '/',
  //     search: search,
  //   });
  // };

  // const handleRoomGuestCancel = () => {
  //   setRoom(0);
  //   setGuest(0);
  //   const query = {
  //     ...state,
  //     room: 0,
  //     guest: 0,
  //   };
  //   const search = setStateToUrl(query);
  //   history.push({
  //     pathname: '/',
  //     search: search,
  //   });
  // };

  const handleLeaseTermApply = () => {
    const query = {
      ...state,
      lease_term: countMonths,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/',
      search: search,
    });
  };

  const handleLeaseTermCancel = () => {
    setMonths(0);
    const query = {
      ...state,
      lease_term: 0,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/',
      search: search,
    });
  };

  const onSearchReset = () => {
    // setRoom(0);
    // setGuest(0);
    setMonths(0);
    const search = setStateToUrl({ reset: '' });
    history.push({
      pathname: '/',
      search: search,
    });
  };

  return (
    <CategroySearchWrapper>
      {/* <ViewWithPopup
        className={amenities.length ? 'activated' : ''}
        key={getAmenities.id}
        noView={true}
        view={
          <Button type="default">
            {getAmenities.name}
            {amenities.length > 0 && `: ${amenities.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getAmenities.options}
            defaultValue={amenities}
            onChange={(value) => onChange(value, 'amenities')}
          />
        }
      />

      <ViewWithPopup
        className={property.length ? 'activated' : ''}
        key={getPropertyType.id}
        noView={true}
        view={
          <Button type="default">
            {getPropertyType.name}
            {property.length > 0 && `: ${property.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getPropertyType.options}
            defaultValue={property}
            onChange={(value) => onChange(value, 'property')}
          />
        }
      />

      <ViewWithPopup
        className={
          Object.keys('date_range').length !== null &&
          date_range.setStartDate !== null
            ? 'activated'
            : ''
        }
        key={400}
        noView={true}
        view={<Button type="default">Choose Date</Button>}
        popup={
          <DateRangePickerBox
            startDateId="startDate-id-category"
            endDateId="endDate-id-category"
            startDate={
              date_range.setStartDate ? moment(date_range.setStartDate) : null
            }
            endDate={
              date_range.setEndDate ? moment(date_range.setEndDate) : null
            }
            numberOfMonths={1}
            small={true}
            item={calenderItem}
            updateSearchData={(value) => onChange(value, 'date_range')}
          />
        }
      /> */}

      <ViewWithPopup
        className={
          price.min === price.defaultMin && price.max === price.defaultMax
            ? ''
            : 'activated'
        }
        key={300}
        noView={true}
        view={
          <Button type="default">
            {price.min > 0 || price.max < 100
              ? `Monthly Rate: ${price.min}, ${price.max}`
              : `Price per month`}
          </Button>
        }
        popup={
          <Slider
            range
            marks={priceInit}
            min={price.defaultMin}
            max={price.defaultMax}
            defaultValue={[price.min, price.max]}
            onAfterChange={(value) => onChange(value, 'price')}
          />
        }
      />

      {/* <ViewWithPopup
        key={200}
        noView={true}
        className={countRoom || countGuest ? 'activated' : ''}
        view={
          <Button type="default">
            Room {countRoom > 0 && `: ${countRoom}`}, Guest
            {countGuest > 0 && `: ${countGuest}`}
          </Button>
        }
        popup={
          <RoomGuestWrapper>
            <ItemWrapper>
              <strong>Room</strong>
              <InputIncDec
                id="room"
                increment={() => setRoom((countRoom) => countRoom + 1)}
                decrement={() =>
                  setRoom((countRoom) => countRoom > 0 && countRoom - 1)
                }
                onChange={(e) => setRoom(e.target.value)}
                value={countRoom}
              />
            </ItemWrapper>

            <ItemWrapper>
              <strong>Guest</strong>
              <InputIncDec
                id="guest"
                increment={() => setGuest((countGuest) => countGuest + 1)}
                decrement={() =>
                  setGuest((countGuest) => countGuest > 0 && countGuest - 1)
                }
                onChange={(e) => setGuest(e.target.value)}
                value={countGuest}
              />
            </ItemWrapper>

            <ActionWrapper>
              {countRoom || countGuest ? (
                <Button type="default" onClick={handleRoomGuestCancel}>
                  Clear
                </Button>
              ) : (
                ''
              )}
              <Button type="primary" onClick={handleRoomGuestApply}>
                Apply
              </Button>
            </ActionWrapper>
          </RoomGuestWrapper>
        }
      /> */}

      <ViewWithPopup
        key={100}
        noView={true}
        className={countMonths  ? 'activated' : ''}
        view={
          <Button type="default">
            Lease Term {countMonths > 0 && `: ${countMonths}`}
          </Button>
        }
        popup={
          <LeaseTermWrapper>
            <ItemWrapper>
              <strong>Lease Term</strong>
              <InputIncDec
                id="lease-term"
                increment={() => setMonths((countMonths) => countMonths + 1)}
                decrement={() =>
                  setMonths((countMonths) => countMonths > 0 && countMonths - 1)
                }
                onChange={(e) => setMonths(e.target.value)}
                value={countMonths}
              />
            </ItemWrapper>

            <ActionWrapper>
              {countMonths ? (
                <Button type="default" onClick={handleLeaseTermCancel}>
                  Clear
                </Button>
              ) : (
                ''
              )}
              <Button type="primary" onClick={handleLeaseTermApply}>
                Apply
              </Button>
            </ActionWrapper>
          </LeaseTermWrapper>
        }
      />
      <div className="view_with__popup">
        <div className="popup_handler">
          <Button type="default" onClick={onSearchReset}>
            Reset
          </Button>
        </div>
      </div>
    </CategroySearchWrapper>
  );
};

export default CategotySearch;
