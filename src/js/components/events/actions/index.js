import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockEventApi from '../../../mockApi/lead-api'

export const getEvent = (eventId) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_SHOW_START,
    receiveType: actionTypes.EVENT_SHOW_COMPLETE,
    failType: actionTypes.EVENT_SHOW_FAIL,
  });

  return handleApiCall({
    actions,
    eventId,
    errorMessage: 'Something prevented us from retrieving an event',
    caller: 'leads',
    route: `/api/v1/web/events/${eventId}`,
    requestMethod: 'GET'
  });
}

export const mockGetEvent = (eventId) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.EVENT_GET_START })

    return mockEventApi.show(eventId).then(res => {
      dispatch({type: actionTypes.EVENT_GET_COMPLETE, payload: res})
      return res
    })
  }
}

export const createEvent = (eventParams) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_CREATE_START,
    receiveType: actionTypes.EVENT_CREATE_COMPLETE,
    failType: actionTypes.EVENT_CREATE_FAIL
  })

  return handleApiCall({
    actions,
    data: eventParams,
    errorMessage: 'Something prevented creating an event',
    caller: 'new event',
    route: `/api/v1/web/events`,
    requestMethod: 'POST'
  })
}

export const getEvents = (eventParams) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_INDEX_START,
    receiveType: actionTypes.EVENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: eventParams,
    errorMessage: 'Something prevented getting an event.',
    caller: 'get events',
    route: `/api/v1/web/events`,
    requestMethod: 'GET'
  })
}
