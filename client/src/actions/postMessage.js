import axios from "axios";
import { CREATE, UPDATE, DELETE, FETCH_ALL } from "./actionsTypes";
import { BASE_URL } from "../constants/config";

export const fetchAll = () => dispatch => {
  axios
    .get(`${BASE_URL}/postMessages`)
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_ALL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const create = (data, onSuccess) => dispatch => {
  axios
    .post(`${BASE_URL}/postMessages`, data)
    .then(res => {
      dispatch({
        type: CREATE,
        payload: res.data
      });
      onSuccess();
    })

    .catch(err => console.log(err));
};

export const update = (id, data, onSuccess) => dispatch => {
  axios
    .put(`${BASE_URL}/postMessages/${id}`, data)
    .then(result => {
      dispatch({
        type: UPDATE,
        payload: result.data
      });
      onSuccess();
    })
    .catch(err => console.log(err));
};

export const Delete = (id, onSuccess) => dispatch => {
  axios
    .delete(`${BASE_URL}/postMessages/${id}`)
    .then(res => {
      dispatch({
        type: DELETE,
        payload: id
      });
      onSuccess();
    })
    .catch(err => console.log(err));
};
