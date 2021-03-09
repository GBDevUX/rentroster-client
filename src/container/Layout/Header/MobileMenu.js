import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
  LISTING_POSTS_PAGE,
} from '../../../settings/constant';

const MobileMenu = ({ className }) => {

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink to={LISTING_POSTS_PAGE}>Home</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MobileMenu;
