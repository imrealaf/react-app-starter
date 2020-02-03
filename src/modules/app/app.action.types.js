import config from "../../constants/config";

/**
 *  App action types
 */

export const SENT_REQUEST = `${config.NAMESPACE}/SENT_REQUEST`;
export const RECEIVED_RESPONSE = `${config.NAMESPACE}/RECEIVED_RESPONSE`;
export const GET_SETTINGS = `${config.NAMESPACE}/GET_SETTINGS`;
export const GET_SETTINGS_SUCCESS = `${config.NAMESPACE}/GET_SETTINGS_SUCCESS`;
export const GET_SETTINGS_FAIL = `${config.NAMESPACE}/GET_SETTINGS_FAIL`;
export const SETTINGS_LOADED = `${config.NAMESPACE}/SETTINGS_LOADED`;
export const GET_DATA = `${config.NAMESPACE}/GET_DATA`;
export const GET_DATA_SUCCESS = `${config.NAMESPACE}/GET_DATA_SUCCESS`;
export const GET_DATA_FAIL = `${config.NAMESPACE}/GET_DATA_FAIL`;
