import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LogoArea from './Logo.style';

const Logo = ({ className, withLink, linkTo, title, src,subtitle }) => {
  return (
    <LogoArea className={className}>
      {withLink ? (
        <NavLink to={linkTo}>

          {src && <img src={src} alt="RentRoster" className="icon" />}
          <div className="container_row">
            {title && <h3 className="logo-top">{title}</h3>}
            {subtitle && <img src={subtitle} alt="Naborly" className="naborly logo-bottom" />}
          </div>
        </NavLink>
      ) : (
        <Fragment>
          {src && <img src={src} alt="RentRoster" />}
          {title && <h3>{title}</h3>}
        </Fragment>
      )}
    </LogoArea>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  withLink: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string,
  linkTo: PropTypes.string,
};

export default Logo;
