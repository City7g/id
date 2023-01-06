import development from "./module/development.js"

development()

// Hamburger
const hambuger = document.querySelector('.hamburger')

hambuger.addEventListener('click', e => {
  e.preventDefault()
  console.log(e)
  document.body.classList.toggle('--menu')
})

// Form
const forms = document.querySelectorAll('form')
forms.forEach(item => {
  item.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(item)

    console.log(formData)
  })
})

// Open single
const blogLink = document.querySelectorAll('.section-blog .card .card__link')
const single = document.querySelector('.single')

blogLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()

    document.body.classList.toggle('--post')
  })
})