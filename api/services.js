import { createNotification } from './notificationevents';
import { get, post, put } from './api';

export const GET_ALL_SERVICE_REQUEST = 'GET_ALL_SERVICE_REQUEST';
export const GET_ALL_SERVICE_SUCCESS = 'GET_ALL_SERVICE_SUCCESS';
export const GET_ALL_SERVICE_FAILURE = 'GET_ALL_SERVICE_FAILURE';


const initialState = {
  services: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        services: action.services,
      };
    case GET_ALL_SERVICE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};



export const getTracks = () => (dispatch) => {
  dispatch({
    type: GET_ALL_SERVICE_REQUEST,
  });
  get('service')
    .then((response) => {
      dispatch({
        type: GET_ALL_SERVICE_SUCCESS,
        employees: response.data.map(track => ({
          trackId: track.TrackId,
          Ttile: track.Title
        })),
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_SERVICE_FAILURE,
        err,
      });
    });
};
