// Body Position
document.querySelector('.header-logo').addEventListener('click', e => {
  e.preventDefault()
  document.body.classList.toggle('active')
})


// Hamburger
const hambuger = document.querySelector('.hamburger')

hambuger.addEventListener('click', e => {
  e.preventDefault()
  hambuger.classList.toggle('active')
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

    document.body.classList.toggle('active')
    single.classList.toggle('active')
  })
})