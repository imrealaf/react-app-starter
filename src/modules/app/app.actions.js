import types from '../action-types';

/**
 *  sentRequest
 *  @type action creator
 *  @description dispatched whenever an http request is sent
 */
export const sentRequest = () => {
  return {
    type: types.SENT_REQUEST
  };
};

/**
 *  receivedResponse
 *  @type action creator
 *  @description dispatched whenever an http response is received
 */
export const receivedResponse = () => {
  return {
    type: types.RECEIVED_RESPONSE
  };
};
