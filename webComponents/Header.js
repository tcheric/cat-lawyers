const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="../css/styles.css">
  <header>
    <a href="../index.html">
      <h1>Meow <span>&</span> Co.</h1>
    </a>
    <div class="header-buttons">
      <div class="arrow-down"></div>
      <a href="expertise.html">Expertise</a>
      <a href="cases.html">Cases</a>
      <a href="team.html">Team</a>
      <a href="contact.html">Contact</a>
    </div>
  </header>
`

class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super()
  } 

  connectedCallback() {
    if ((window.location.href === "file:///home/erictc/misc/cs50/cs50xW8/Homepage/page/cases.html") || 
        (window.location.href === "file:///home/erictc/misc/cs50/cs50xW8/Homepage/page/contact.html")) {
      console.log("set white")
      headerTemplate.innerHTML = `
        <link rel="stylesheet" href="../css/cases.css">
        <header>
          <a href="../index.html">
            <h1>Meow <span>&</span> Co.</h1>
          </a>
          <div class="header-buttons">
            <div class="arrow-down"></div>
            <a href="expertise.html">Expertise</a>
            <a href="cases.html">Cases</a>
            <a href="team.html">Team</a>
            <a href="contact.html">Contact</a>
          </div>
        </header>
      `
    }
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(headerTemplate.content)
  }
}

customElements.define('header-component', Header)