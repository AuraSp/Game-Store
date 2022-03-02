import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div class="loginBlock"> {/*loginPage*/}
      <div class="loginForm"> {/*item-1*/}
        <form>
          <h2>SIGN IN</h2>
          <input class="loginEmail-Input" type="email" id="log-email" placeholder='Account email'/>
          <input class="loginPassword-Input" type="password" id="log-password" placeholder='Password'/>
          <button class='signIn-Btn' id="signInSubmit">Sign in</button>
          <a class="passwordLink" href="#">Forgot your password?</a>
        </form>
      </div>
      <div class="loginAd"> {/*item-2*/}
        <p class="loginAd-HeaderText">Join and discover thousands of games to play.</p>
        <a class="loginAd-MainLink" href="#">Learn More</a>
        <img src="./img/Gaming Illustration in PNG, SVG.png" alt="img" />
        <p class="loginAd-footerText">It's free and easy to use.</p>
        {/* <div class="logUtilities">
        <button id="logout">LOG OUT</button>
        <button id="checkUser">CURRENT USER</button>
        </div> ??????????*/}
      </div>
    </div>
  )
}

export default Login