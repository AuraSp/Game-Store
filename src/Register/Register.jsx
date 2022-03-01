import React from 'react'

import './Register.css';
const Register = () => {
  return (
    <div class="registerPage">
      <p class="errs">
      </p>
      <form class="main-form" id="signUpForm">
        <h3 class="form-h3">Create your personal account</h3>
        <label class="main-label">Username</label>
        <input class="main-input" type="text" id="reg-username" required />
        <label class="main-label">Surname</label>
        <input class="main-input" type="text" id="reg-surname" required />
        <label class="main-label">Email</label>
        <input class="main-input" type="email" id="reg-email" required />
        <label class="main-select-label" htmlFor="country">Country of Residence</label>
        <select class="main-select" id="reg-country" name="countrylist" form="countryform" required>
          <option value="----">----</option>
          <option value="----">----</option>
          <option value="----">----</option>
          <option value="----">----</option>
        </select>
        <label class="main-label">Password</label>
        <input class="main-input" type="password" id="reg-password" required />
        <label class="main-label">Repeat Password</label>
        <input class="main-input" type="password" id="repeat-password" required />
        <label class="label-bottom">
          <input type="checkbox" name="confirm" id="agreement" value="agreement" required />
          I am 13 years of age or older and agree to the terms of the
          <a class="bottom-links" href="#">Subscriber Agreement</a> and the
          <a class="bottom-links" href="#">Privacy Policy</a>.</label>

        <input type="submit" class="btn-form" id="signUpSubmit" value="Confirm" />
      </form>


    </div>
  )
}

export default Register