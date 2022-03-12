import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://e-commerce-srvr.herokuapp.com/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = (dispatch, user) => {
  dispatch(logoutSuccess());
};
