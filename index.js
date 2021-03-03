// Cookies

let accept = document.getElementById('accept-btn')
let cookies = document.getElementById('cookie-container')

accept.addEventListener('click', function () {
  cookies.style.display = 'none'
})

// Input fields

let nameLabel = document.getElementById('name-label')
let emailLabel = document.getElementById('email-label')
let nameInput = document.getElementById('name-input')
let emailInput = document.getElementById('email-input')

nameInput.addEventListener('focus', function () {
  nameLabel.textContent = 'Your First Name'
})

nameInput.addEventListener('focusout', function () {
  nameLabel.textContent = ''
})

emailInput.addEventListener('focus', function () {
  emailLabel.textContent = 'Your Email Address'
})

emailInput.addEventListener('focusout', function () {
  emailLabel.textContent = ''
})
