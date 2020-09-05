import {
  FETCH_REQUEST,
  FETCH_CUISINES_SUCCESS,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTUARANT_DATA_SUCCESS,
  FETCH_DAILY_MENU_SUCCESS,
  FETCH_FAILURE,
  SET_SEARCH,
  SET_CHANGE,
  SET_XPOSITION
} from './userTypes'

const initialState = {
  loading: false,
  searchAction:false,
  entityId:5,
  entityType:"city",
  locationTitle:"",
  country:"India",
  cuisines: [],
  restaurants:[],
  places:[],
  restaurantData:[],
  dailyMenu:[],
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case SET_SEARCH:
      console.log(action.payload[0]);
      state = {
        ...state,
        searchAction:true,
        places:action.payload,
        entityId:action.payload[0].entity_id,
        entityType:action.payload[0].entity_type,
        locationTitle:action.payload[0].title,
        country:action.payload[0].country_name,
      }
      break;
    case SET_CHANGE:
      state = {
        ...state,
        // searchAction:true,
        // entityId:action.payload.entity_id,
        // entityType:action.payload.entity_type,
        // locationTitle:action.payload.title,
        // country:action.payload.country_name,
        // places:action.payload
      }
      break;
    case SET_XPOSITION:
      state = {
        ...state,
        xPosition: action.payload
      }
      break;
    case FETCH_CUISINES_SUCCESS:
      state = {
        ...state,
        searchAction:false,
        loading: false,
        cuisines: action.payload,
        error: ''
      }
      break;
    case FETCH_RESTAURANTS_SUCCESS:
      state = {
        ...state,
        searchAction:false,
        loading: false,
        restaurants: action.payload,
        error: ''
      }
      break;
    case FETCH_RESTUARANT_DATA_SUCCESS:
      state = {
        ...state,
        loading: false,
        restaurantData: action.payload,
        error: ''
      }
      break;
    case FETCH_DAILY_MENU_SUCCESS:
      state = {
      ...state,
      loading: false,
      dailyMenu: action.payload,
      error: ''
    }
    break;
    case FETCH_FAILURE:
      state = {
        ...state,
        loading: false,
        cuisines: [],
        error: action.payload
      }
    break;
  }
  return state;
}

export default reducer
