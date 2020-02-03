import sanitizeHtml from 'sanitize-html';

import config from '../constants/config';

export const getCurrentRoute = (location, rootName = 'home') => {
  const route = location.pathname.replace('/', '');
  return route === '' ? rootName : route;
};

export const getTransitionDuration = element => {
  const style = window.getComputedStyle(element);
  if (!style) {
    return;
  }

  const duration = parseFloat(
    style.getPropertyValue('transition-duration').replace('s', '')
  );
  const delay = style.getPropertyValue('transition-delay')
    ? parseFloat(style.getPropertyValue('transition-delay').replace('s', ''))
    : 0;

  const val = duration + delay;
  return val * 1000;
};

export const onTransitionEnd = (element, callback) => {
  const duration = getTransitionDuration(element);
  setTimeout(() => {
    callback(element, duration);
  }, duration);
};

export const getServerBase = () => {
  return process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
};

export const sanitize = str => {
  return { __html: sanitizeHtml(str, config.SANITIZE_HTML) };
};

export const extract = arr => {
  const beg = arr[0];
  const end = arr[1];
  const matcher = new RegExp(`${beg}(.*?)${end}`, 'gm');
  const normalize = str => str.slice(beg.length, end.length * -1);
  return str => {
    const match = str.match(matcher);
    return match ? str.match(matcher).map(normalize) : '';
  };
};

export const interpolate = (str, start = '{', end = '}', datasrc = {}) => {
  let output = str;
  const extractor = extract([start, end]);
  const vars = extractor(output);
  const data = datasrc;
  if (vars.length) {
    for (const key of vars) {
      if (typeof data[key] !== undefined && data[key]) {
        const re = new RegExp(`${start}${key}${end}`, 'g');
        output = output.replace(re, data[key]);
      }
    }
  }

  return output;
};
