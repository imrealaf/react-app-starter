const NAMESPACE = 'rs';

export default {
  NAMESPACE,
  META_TITLE_SEPERATOR: '|',
  LOADING_DELAY: 500,
  TOKEN_STORAGE_NAME: `${NAMESPACE}_token`,
  HTTP_CLIENT_BASE:
    process.env.NODE_ENV === 'production' ? 'http://productionapi.com' : '',
  HTTP_DELAY: 2000,
  SANITIZE_HTML: {
    allowedAttributes: {
      '*': ['href', 'data-*', 'alt', 'class']
    },
    allowProtocolRelative: true
  }
};
