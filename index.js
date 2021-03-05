// Cookies

let acceptBtn = document.getElementById('accept-btn')
let cookiesDisplay = document.getElementById('cookie-container')

acceptBtn.addEventListener('click', function (event) {
  cookiesDisplay.style.display = 'none'
})

// Input fields

let nameLabel = document.getElementById('name-label')
let emailLabel = document.getElementById('email-label')
let nameInput = document.getElementById('name-input')
let emailInput = document.getElementById('email-input')

nameInput.addEventListener('focus', function () {
  nameLabel.textContent = 'Your Name'
})

nameInput.addEventListener('focusout', function () {
  nameLabel.textContent = ''
})

emailInput.addEventListener('focus', function () {
  emailLabel.textContent = 'Your Email'
})

emailInput.addEventListener('focusout', function () {
  emailLabel.textContent = ''
})

// Sign up Button

let emailCollectorForm = document.getElementById('Email-Collector')
let signUpSection = document.getElementById('sign-up-form')
let signUpSuccess = document.getElementById('sign-up-success')
let signUpBtn = document.getElementById('submitButton')

emailCollectorForm.addEventListener('submit', event => {
  event.preventDefault()
  signUpSection.style.display = 'none'
  signUpSuccess.style.display = 'flex'
  let ourFormData = new FormData(event.target)
  let userFirstName = ourFormData.get('firstName')
  // let userEmailAddress = ourFormData.get('emailAddress')

  let updatedHtmlContent = `
        <h2>Thanks, ${userFirstName}.</h2>

        <p>We'll' let you know when it's on Spotify.</p>

    `

  let updatedContentContainer = document.getElementById('sign-up-success')
  updatedContentContainer.innerHTML = updatedHtmlContent
})
