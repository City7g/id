import Swiper from 'swiper'
import development from "./module/development.js"

development()

// Sliders
new Swiper('.swiper', {
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
  if(body.classList.contains('--menu') || body.classList.contains('--popup')) {
    body.classList.remove('--menu')
    body.classList.remove('--popup')
  } else {
    body.classList.add('--menu')
  }
})

// Open post
const postLink = document.querySelectorAll('.card__more')
const popup = document.querySelector('.popup')

postLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()

    document.body.classList.remove('--menu')

    if(document.body.classList.contains('--popup')) {
      popup.classList.add('close')
      setTimeout(() => {
        popup.classList.remove('close')
      }, 300);
    } else {
      document.body.classList.add('--popup')
    }
  })
})

// Close Popup
window.addEventListener('keyup', e => {
  if(e.key === "Escape") {
    document.body.classList.remove('--menu')
    document.body.classList.remove('--popup')
  }
})

// window.addEventListener('scroll', e => {
//   // console.log(window.pageYOffset)
//   document.querySelector('.popup').scrollTo({top: window.pageYOffset})
// })