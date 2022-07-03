// Form submit popup:
var form = document.getElementById("contact-form");
form.addEventListener('submit', e => {
  e.preventDefault()
})

const showMsgConfirm = () => {
  // show popup
  const popup = document.getElementById("contact-form-popup")
  popup.style.visibility = "visible"
  popup.classList.add("show")
  setTimeout(() => popup.classList.add("go"), 1500)

  // clear form
  setTimeout(() => {
    const elemlist = document.querySelectorAll("input")
    for (let input of elemlist) {
      input.value = ""
    }
    var textarea = document.querySelector("textarea")
    textarea.value = ""
  }, 2000)

  setTimeout(() => {
    popup.style.visibility = "hidden"
    popup.classList.remove("show")
    popup.classList.remove("go")
  }, 2500)
}