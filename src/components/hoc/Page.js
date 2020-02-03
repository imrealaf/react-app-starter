import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './Page.scss';

import config from '../../constants/config';
import { getCurrentRoute } from '../../utils';

/**
 *
 *  PROP TYPES
 *
 */
const propTypes = {
  /**
   *  title
   *  @type string
   *  @description the page's meta title
   */
  title: PropTypes.string,

  /**
   *  description
   *  @type string
   *  @description the page's meta description
   */
  description: PropTypes.string,

  /**
   *  classes
   *  @type array[string]
   *  @description additional classes that can be added to <body>
   */
  classes: PropTypes.shape([PropTypes.string])
};

/**
 *
 *  DEFAULT PROPS
 *
 */
const defaultProps = {
  title: '',
  description: '',
  classes: []
};

/**
 *
 *  COMPONENT
 *
 */
const Page = ({ title, description, classes, children }) => {
  /**
   *  Location api
   */
  const location = useLocation();

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
    setCurrentRoute(getCurrentRoute(location));
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

/**
 *
 *  STATIC ASSIGNMENT
 *
 */
Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
