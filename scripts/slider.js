const container = document.querySelector(".slider__list")
const description = document.querySelector(".slider__text")

let currentIndex = 0
let slides = []
let dots = []

function render() {
  let offset = 0
  slides.forEach((slide, index) => {
    if (index < currentIndex) {
      offset += slide.offsetWidth
    }
  })
  container.style.transform = `translateX(-${offset}px)`

  description.textContent = list[currentIndex].text

  dots.forEach((dot, index) => {
    index === currentIndex
      ? dot.classList.add("active")
      : dot.classList.remove("active")
  })
}

function goto(newIndex) {
  if (newIndex < 0 || newIndex > slides.length - 1) return
  currentIndex = newIndex

  render()
}

function init() {
  const newSlides = document.querySelectorAll(".slider__item")
  const newDots = document.querySelectorAll(".slider__dot-item")
  newDots.forEach((dot, index) => {
    dot.onclick = () => goto(index)
  })
  slides = newSlides
  dots = newDots

  render()
}

init()
