import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './Page.scss';

import config from '../../constants/config';
import { getCurrentRoute } from '../../utils';

/**
 *  Props types
 */
const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.shape([PropTypes.string])
};

const defaultProps = {
  title: '',
  description: '',
  classes: []
};

const Page = ({ title, description, classes }) => {
  /**
   *  State
   */
  const [show, setShow] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);

  /**
   *  Class name
   */
  const className = classNames(...classes);

  /**
   *  On route change ..
   */
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 0);
    setCurrentRoute(getCurrentRoute(useLocation()));
  }, [location, setCurrentRoute]);

  /**
   *  Render
   */
  return (
    <React.Fragment>
      <Helmet
        titleTemplate={`%s ${config.META_TITLE_SEPERATOR}`}
        defaultTitle={'App name'}
      >
        <title>{title ? title : ''}</title>
        {description ? <meta name='description' content={description} /> : null}
        <body className={className} data-route={currentRoute} />
      </Helmet>
      <div className={`page${show ? ' in' : ''}`}>{children}</div>
    </React.Fragment>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
