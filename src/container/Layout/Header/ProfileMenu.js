import React, { useState, useRef } from 'react';
import { Menu } from 'antd';
import useOnClickOutside from '../../../library/hooks/useOnClickOutside';
import { withRouter } from 'react-router-dom';

const ProfileMenu = ({ avatar, history }) => {
  const [state, setState] = useState(false);
  const handleDropdown = () => {
    setState(!state);
  };
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>

      <Menu className={`dropdown-menu ${state ? 'active' : 'hide'}`}>

      </Menu>
    </div>
  );
};

export default withRouter(ProfileMenu);
