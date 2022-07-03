/**
 * Scroll top navbar show/hide:
 * 1. Removes event listener that called this function
 * 2. Calls if statement 20 times
 * 3. Adds another similar event listener 
 */
 const onScroll = (event) => {
  document.removeEventListener("scroll", onScroll)
  let iterations = 0
  let intervalID = setInterval(() => {
    iterations++
    if ( window.scrollY === 0 ) {
      document.documentElement.setAttribute("scroll-top", "true")
    } else {
      document.documentElement.setAttribute("scroll-top", "false")
    }
    if (iterations === 20) {
      clearInterval(intervalID)
      document.addEventListener("scroll", onScroll)
    }
  }, 250)
}

// 1st call
if ( window.scrollY === 0 ) {
  document.documentElement.setAttribute("scroll-top", "true")
} else {
  document.documentElement.setAttribute("scroll-top", "false")
}

document.addEventListener("scroll", onScroll)