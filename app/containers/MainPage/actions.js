/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
  LOAD_EVENTS_SUCCESS,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS_SUCCESS,
} from './constants';

export function loadEvent(tenentID, skip, take, searchTerm) {
  return {
    type: LOAD_EVENTS,
    tenentID,
    skip,
    take,
    searchTerm,
  };
}

export function loadEventSuccess(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

export function loadEventError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}

export function loadFeaturedEvent(tenentID, skip, take) {
  return {
    type: LOAD_FEATURED_EVENTS,
    tenentID,
    skip,
    take,
  };
}

export function loadFeaturedEventSuccess(featuredEvents) {
  return {
    type: LOAD_FEATURED_EVENTS_SUCCESS,
    featuredEvents,
  };
}

export function loadFeaturedEventError(error) {
  return {
    type: LOAD_FEATURED_EVENTS_ERROR,
    error,
  };
}
