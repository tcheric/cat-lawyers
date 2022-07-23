document.addEventListener('DOMContentLoaded', () => {
  console.log("page waiting...")
  document.body.classList.add('js-loading')
})

window.addEventListener("load", () => {
  console.log("page loaded!")
  document.body.classList.remove('js-loading')
})
