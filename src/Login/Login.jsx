import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className="loginBlock"> {/*loginPage*/}
      <div className="loginForm"> {/*item-1*/}
      <button className='signIn-closeBtn'>X</button>
        <form>
          <h2>SIGN IN</h2>
          <input className="loginEmail-Input" type="email" id="log-email" placeholder='Account email' />
          <input className="loginPassword-Input" type="password" id="log-password" placeholder='Password' />
          <button className='signIn-Btn' id="signInSubmit">Sign in</button>
          <a className="passwordLink" href="#">Forgot your password?</a>
        </form>
      </div>
      <div className="loginAd"> {/*item-2*/}
        <p className="loginAd-headerText">Join and discover thousands of games to play.</p>
        <a className="loginAd-mainLink" href="#">Learn More</a>
        <img src="./img/Gaming Illustration in PNG, SVG.png" alt="img" />
        <p className="loginAd-footerText">It's free and easy to use.</p>
        {/* <div class="logUtilities">
        <button id="logout">LOG OUT</button>
        <button id="checkUser">CURRENT USER</button>
        </div> ??????????*/}
      </div>
    </div>
  )
}

export default Login