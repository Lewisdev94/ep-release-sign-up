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

const emailCollectorForm = document.getElementById('Email-Collector')
let signUpSection = document.getElementById('sign-up-form')
let signUpSuccess = document.getElementById('sign-up-success')
let signUpBtn = document.getElementById('submitButton')
const errorMsg = document.getElementById('formErrorMsg')

// JQUERY

jQuery(document).ready(function ($) {
  $('#Email-Collector').submit(function (e) {
    e.preventDefault()
    $.ajax({
      url:
        'https://gmail.us1.list-manage.com/subscribe/post-json?u=047627b66c958da931e184a22&amp;id=99e0cd9d01&c=?',
      type: 'GET',
      data: $('#Email-Collector').serialize(),
      dataType: 'jsonp',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        if (data['result'] != 'success') {
          console.log('Form has an error.')
          if (data['msg'].includes('already')) {
            let emailError = 'already'
            errorFunc(e, emailError)
          } else if (data['msg'].includes('invalid')) {
            let emailError = 'invalid'
            errorFunc(e, emailError)
          } else {
            let emailError = 'unknown'
            errorFunc(e, emailError)
          }
        } else {
          console.log('Form sent successfully.')
          successFunc(e)
        }
      }
    })
  })
})

function errorFunc (formPass, reason) {
  if (reason === 'invalid') {
    errorMsg.innerText = `That email appears to be invalid.`
    console.log(`The email address submission was ${reason}.`)
  } else if (reason === 'already') {
    errorMsg.innerText = `You are already subscribed!`
    console.log(`The user is ${reason} subscribed.`)
  } else if (reason === 'unknown') {
    errorMsg.innerText = `Unknown error has occurred.`
    console.log('An ${reason} has occurred.')
  }
}

function successFunc (formPass) {
  signUpSection.style.display = 'none'
  signUpSuccess.style.display = 'flex'
  let ourFormData = new FormData(formPass.target)
  let userFirstName = ourFormData.get('FNAME')

  let updatedHtmlContent = `
      <h2>Thanks, ${userFirstName}.</h2>

      <p>We'll let you know when it's on Spotify.</p>

  `

  let updatedContentContainer = document.getElementById('sign-up-success')
  updatedContentContainer.innerHTML = updatedHtmlContent
}
