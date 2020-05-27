/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cssStyles from "./cssStyle.module.css";
import { TextField } from "@material-ui/core";
const LoginForm = ({ setValue }) => {
  return (
    <form noValidate>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="standard-helperText"
          label="Email ID / Mobile number"
          variant="outlined"
        />
      </div>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="filled-required"
          label="Password"
          variant="outlined"
        />
      </div>
      <div className="d-flex justify-content-end w-75 my-2 mx-auto">
        <a href="#" className={cssStyles.greyColor} onClick={() => setValue(2)}> Forget Password?</a>
      </div>
      <div className="d-flex justify-content-center w-75 my-4 mx-auto">
        <button type="button" className={`btn btn-secondary ${cssStyles.btnLogin} w-50`} data-dismiss="modal" aria-label="Close">Login</button>
      </div>
      <div className="d-flex justify-content-center w-75 my-2 mx-auto">
        <span>Don't have account? </span><a href="#" className={cssStyles.greyColor} onClick={() => setValue(1)}><strong> Sign up here</strong></a>
      </div>
    </form>
  );
};

export { LoginForm };
