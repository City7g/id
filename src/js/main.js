import development from "./module/development.js"

development()

// Hamburger
const hambuger = document.querySelector('.hamburger')
const body = document.body

hambuger.addEventListener('click', e => {
  e.preventDefault()
  if(body.classList.contains('--menu') || body.classList.contains('--post')) {
    body.classList.remove('--menu')
    body.classList.remove('--post')
    console.log(1)
  } else {
    body.classList.add('--menu')
    console.log(2)
  }
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
const blogLink = document.querySelectorAll(':is(.section-blog, .section-job) .card .card__link')

blogLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()

    document.body.classList.remove('--menu')
    document.body.classList.toggle('--post')
  })
})