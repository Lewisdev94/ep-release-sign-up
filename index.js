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

emailCollectorForm.addEventListener('submit', function (e) {
  e.preventDefault()
  sendForm(this)
})

async function sendForm (data) {
  const formData = new FormData(data)
  const options = {
    method: 'POST',
    body: formData
  }

  const uploadPromise = await fetch(
    'https://gmail.us1.list-manage.com/subscribe/post?u=047627b66c958da931e184a22&amp;id=99e0cd9d01/',

    options
  )
  if (uploadPromise.ok) {
    const uploadResp = await uploadPromise.json()
    console.log(uploadResp)
    console.log('if ok:' + uploadPromise.status)
  } else {
    console.error('if error' + uploadPromise.status)
  }
}

//   signUpSection.style.display = 'none'
//   signUpSuccess.style.display = 'flex'
//   let ourFormData = new FormData(e.target)
//   let userFirstName = ourFormData.get('FNAME')
//   // let userEmailAddress = ourFormData.get('emailAddress')

//   let updatedHtmlContent = `
//         <h2>Thanks, ${userFirstName}.</h2>

//         <p>We'll let you know when it's on Spotify.</p>

//     `

//   let updatedContentContainer = document.getElementById('sign-up-success')
//   updatedContentContainer.innerHTML = updatedHtmlContent
// // })
