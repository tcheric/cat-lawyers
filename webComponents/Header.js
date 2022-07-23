const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="../css/styles.css">
  <header>
  <div id="header-wrapper">
    <a href="../index.html">
      <h1>Meow <span>&</span> Co.</h1>
    </a>
    <div class="header-buttons">
      <a href="expertise.html">Expertise</a>
      <a href="cases.html">Cases</a>
      <a href="team.html">Team</a>
      <a href="contact.html">Contact</a>
    </div>
  </div>
</header>
`

class Header extends HTMLElement {
  constructor() {
    super()
  } 

  connectedCallback() {
    if ((window.location.href === "https://cerulean-sopapillas-9177e3.netlify.app/page/cases.html") || 
        (window.location.href === "https://cerulean-sopapillas-9177e3.netlify.app/page/contact.html") ||
        (window.location.href === "file:///home/erictc/misc/cat-lawyers/page/contact.html") ||
        (window.location.href === "file:///home/erictc/misc/cat-lawyers/page/cases.html")) {
      console.log("set white")
      headerTemplate.innerHTML = `
        <link rel="stylesheet" href="../css/alt-header.css">
        <header>
          <div id="header-wrapper">
            <a href="../index.html">
              <h1>Meow <span>&</span> Co.</h1>
            </a>
            <div class="header-buttons">
              <a href="expertise.html">Expertise</a>
              <a href="cases.html">Cases</a>
              <a href="team.html">Team</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>
        </header>
      `
    } else if ((window.location.href === "https://cerulean-sopapillas-9177e3.netlify.app/") || 
      (window.location.href === "https://cerulean-sopapillas-9177e3.netlify.app/index.html") ||
      (window.location.href === "file:///home/erictc/misc/cat-lawyers/index.html")) {
      console.log("set urls")
      headerTemplate.innerHTML = `
        <link rel="stylesheet" href="css/alt-header.css">
        <header>
        <div id="header-wrapper">
          <a href="">
            <h1>Meow <span>&</span> Co.</h1>
          </a>
          <div class="header-buttons">
            <a href="page/expertise.html">Expertise</a>
            <a href="page/cases.html">Cases</a>
            <a href="page/team.html">Team</a>
            <a href="page/contact.html">Contact</a>
          </div>
        </div>
      </header>
      `
    }
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(headerTemplate.content)
  }
}

customElements.define('header-component', Header)