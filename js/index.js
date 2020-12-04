const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
})

const panelBox = document.querySelectorAll('.panel')

panelBox.forEach((pan) => {
  pan.addEventListener('click', () => {
    removeActiveClass()
    pan.classList.add('active')
  })
})

function removeActiveClass() {
  panelBox.forEach((pan) => {
    pan.classList.remove('active')
  })
}
