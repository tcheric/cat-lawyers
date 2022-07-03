const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="../css/styles.css">
  <footer>
    <div id="footer-flex">
      <div>
        <h4>MAY WE HELP YOU?</h4>
        <ul>
          <p>Book An Appointment</p>
          <p>Email Newsletter</p>
          <p>Contact Us</p>
        </ul>
      </div>
      <div>
        <h4>THE COMPANY</h4>
        <ul>
          <p>About Us</p>
          <p>Code of Ethics</p>
          <p>Careers</p>
          <p>Corporate Information</p>
        </ul>
      </div>
      <div>
        <h4>SOCIAL MEDIA</h4>
        <ul>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </ul>
      </div>
      <div id="bottom-right-logo">
        <h3>Meow<br><span>&</span> Co.</h3>
      </div>
      <p id="bottomest-text">
        &copy 2020-2022 Meow & Co. Ltd. - All rights reserved. <br>We pay our respects to ancestors and Elders, past, present and future.
      </p>
    </div>
  </footer>
`

class Footer extends HTMLElement {
  constructor() {
      // Always call super first in constructor
      super()
  } 

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(footerTemplate.content)
  }
}

customElements.define('footer-component', Footer)
