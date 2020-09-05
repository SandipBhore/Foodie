import axios from 'axios'
import {
  FETCH_REQUEST,
  FETCH_CUISINES_SUCCESS,
  FETCH_FAILURE,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTUARANTS,
  FETCH_CUISINES,
  FETCH_PLACES,
  FETCH_RESTUARANT_DATA,
  FETCH_RESTUARANT_DATA_SUCCESS,
  FETCH_DAILY_MENU,
  FETCH_DAILY_MENU_SUCCESS,
  SET_SEARCH,
  SET_CHANGE,
  SET_XPOSITION
} from './userTypes'

export const setXPosition = (x) =>{
  return {
  type: SET_XPOSITION,
  payload:x
  }
}

export const fetchPlaces = (url) =>{
  return {
  type: FETCH_PLACES,
  payload:url
  }
}

export const fetchCuisines = (url) =>{
  return {
  type: FETCH_CUISINES,
  payload:url
  }
}

export const fetchRestaurants = (url) =>{
  return {
  type: FETCH_RESTUARANTS,
  payload:url
  }
}

export const fetchRestaurantData = (id) =>{
  return{
    type: FETCH_RESTUARANT_DATA,
    payload:id
  }
}

export const fetchDailyMenu = (id) =>{
  return{
    type: FETCH_DAILY_MENU,
    payload:id
  }
}

export const setSearch = (state) => {
  return {
    type: SET_SEARCH,
    payload: state
  }
}

export const setChange = (state) => {
  return {
    type: SET_CHANGE,
    payload: state
  }
}

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchCuisinesSuccess = cuisines => {
  return {
    type: FETCH_CUISINES_SUCCESS,
    payload: cuisines
  }
}

export const fetchRestaurantSuccess = restaurants => {
  return {
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: restaurants
  }
}

export const fetchRestaurantHomeSuccess = restaurant => {
  return {
    type: FETCH_RESTUARANT_DATA_SUCCESS,
    payload: restaurant
  }
}

export const fetchDailyMenuSuccess = Menu => {
  return {
    type: FETCH_DAILY_MENU_SUCCESS,
    payload: Menu
  }
}

export const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}
