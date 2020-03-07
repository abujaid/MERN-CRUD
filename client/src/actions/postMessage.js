import axios from "axios";
import { CREATE, UPDATE, DELETE, FETCH_ALL } from "./actionsTypes";

export const fetchAll = () => dispatch => {
  axios
    .get("http://localhost:4000/postMessages")
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
    .post("http://localhost:4000/postMessages", data)
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
    .put(`http://localhost:4000/postMessages/${id}`, data)
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
    .delete(`http://localhost:4000/postMessages/${id}`)
    .then(res => {
      dispatch({
        type: DELETE,
        payload: id
      });
      onSuccess();
    })
    .catch(err => console.log(err));
};
