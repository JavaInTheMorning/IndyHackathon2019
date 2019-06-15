import { createNotification } from './notificationevents';
import { get, post, put } from './api';

export const GET_ALL_TRACKS_REQUEST = 'GET_ALL_TRACKS_REQUEST';
export const GET_ALL_TRACKS_SUCCESS = 'GET_ALL_TRACKS_SUCCESS';
export const GET_ALL_TRACKS_FAILURE = 'GET_ALL_TRACKS_FAILURE';


const initialState = {
  tracks: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRACKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_TRACKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tracks: action.tracks,
      };
    case GET_ALL_TRACKS_FAILURE:
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
    type: GET_ALL_TRACKS_REQUEST,
  });
  get('track')
    .then((response) => {
      dispatch({
        type: GET_ALL_TRACKS_SUCCESS,
        employees: response.data.map(track => ({
          trackId: track.TrackId,
          Ttile: track.Title
        })),
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_TRACKS_FAILURE,
        err,
      });
    });
};
