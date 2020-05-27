/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import cssStyles from "./cssStyle.module.css";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
const RegisterForm = () => {
  const [terms, setTerms] = useState(false);
  return (
    <form noValidate>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="standard-helperText"
          label="First Name"
          variant="outlined"
        />
      </div>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="standard-helperText"
          label="Last Name"
          variant="outlined"
        />
      </div>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="standard-helperText"
          label="Email"
          variant="outlined"
        />
      </div>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="standard-helperText"
          label="Mobile number "
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
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="filled-required"
          label="Confirm Password"
          variant="outlined"
        />
      </div>
      <div className={`d-flex ${cssStyles.loginInptCont}`}>
        <TextField
          className="w-75 my-2 mx-auto"
          required
          id="filled-required"
          label="Confirm Password"
          variant="outlined"
        />
      </div>
      <div className={`d-flex w-75 my-2 mx-auto ${cssStyles.loginInptCont}`}>
        <FormControlLabel
          control={
            <Checkbox
              checked={terms}
              onChange={(event) => setTerms(event.target.checked)}
              name="terms"
              color="primary"
            />
          }
          label="Agree to the terms of use"
        />
      </div>
      <div className="d-flex justify-content-center w-75 mx-auto">
        <button type="button" className={`btn btn-secondary ${cssStyles.btnLogin} w-50`} data-dismiss="modal" aria-label="Close">Signup</button>
      </div>
    </form>
  );
};

export { RegisterForm };
