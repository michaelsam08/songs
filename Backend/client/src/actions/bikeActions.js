import axios from "axios";
import { GET_BIKES, ADD_BIKE, DELETE_BIKE, BIKES_LOADING } from "./types";

export const getBikes = () => dispatch => {
  dispatch(setBikesLoading());
  axios
    .get("/api/bikes")
    .then(res => dispatch({ type: GET_BIKES, payload: res.data }));
};

export const deleteBike = id => dispatch => {
  axios.delete(`/api/bikes/${id}`).then(res =>
    dispatch({
      type: DELETE_BIKE,
      payload: id
    })
  );
};
export const addBike = bike => dispatch => {
  axios.post("/api/bikes", bike).then(res =>
    dispatch({
      type: ADD_BIKE,
      payload: res.data
    })
  );
};
export const setBikesLoading = () => {
  return {
    type: BIKES_LOADING
  };
};
