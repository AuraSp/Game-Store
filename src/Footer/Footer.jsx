import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="mainFooter">
      <div class="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>

        <p class='faqQuestions' onclick='transitionFAQFirst()'>I received my game(s) as a gift, will I gain access to
          all
          features?
        </p>

        <p class='faqQuestions' onclick='transitionFAQSecond()'>How will know that I added exactly $5.00 USD to my
          Wallet?
        </p>

        <p class='faqQuestions' onclick='transitionFAQThird()'>I recently added Wallet funds but they have not appeared,
          what do
          I do?</p>

        <p class='faqQuestions' onclick='transitionFAQFourth()'>What kind of Steam Wallet and item listing restrictions
          apply?
        </p>
      </div>

      <div class="logo-end">
        <div class="logo"><img src="../img/LOGO.png" alt="logo" /></div>
        <div class='display-none'>
          <div class='closeFormBtn' type='button'>&times;</div>
          <form>
            <label for="username"></label>
            <input type="text" id="username" name="username" placeholder="Account username..."/>
            <label for="topic"></label>
            <input type="text" id="topic" name="topic" placeholder="Topic..."/>
            <label for="question"></label>
            <textarea id="question" cols="50" rows="5" placeholder='Leave your question here...'></textarea>
            <input type="submit" value="&rarr;"/>
          </form>
        </div>
        <div class="endFooter">
          <p>
            © 2022 Internetinė žaidimų parduotuvė. All rights reserved. All
            trademarks are property of their respective owners in the LTU and
            other countries.
          </p>
          <p>
            VAT included in all prices where applicable. Privacy Policy |
            Legal | IŽP Subscriber Agreement | Refunds | Cookies
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer