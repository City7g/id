import Swiper from 'swiper'
import development from "./module/development.js"

development()

// Sliders
const swiper = new Swiper('.swiper', {
  spaceBetween: 50,
  initialSlide: 2,
  loop: true,
  breakpoints: {
    760: {
      width: 500
    },
    1200: {
      width: 550
    },
    1900: {
      width: 683
    }
  }
});

// Hamburger
const hambuger = document.querySelector('.hamburger')
const body = document.body

hambuger.addEventListener('click', e => {
  e.preventDefault()
  if(body.classList.contains('--menu') || body.classList.contains('--post')) {
    body.classList.remove('--menu')
    body.classList.remove('--post')
  } else {
    body.classList.add('--menu')
  }
})

// Open single
const blogLink = document.querySelectorAll('.card__link')

blogLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()

    document.body.classList.remove('--menu')
    document.body.classList.toggle('--post')
  })
})

