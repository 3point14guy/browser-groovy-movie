'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  console.log('sign UP success')
  $('.sign-up-message').text(data.user.email + ' now has an account. Please login.')
}
const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign IN success')
  $('.api-buttons').show(1700)
  $('.logout-buttons').show(2100)
  $('.login-message').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(1700)
  $('.instructions').text('You are now logged in.')
}
const signInFailure = (error) => {
  console.log('sign IN failure')
  $('.login-message').text('Login failure. ', error)
}
const signUpFailure = (error) => {
  console.log('sign UP failure')
  $('.sign-up-message').text('There was an error creating the account ', error)
}

const passwordChangeSuccess = function () {
  console.log('change password success')
  $('.change-pswrd-message').text('Password changed!')
}
const passwordChangeFailure = function (error) {
  console.log('change password failure')
  $('.change-pswrd-message').text('Password change failed', error)
}

const logoutSuccess = function () {
  console.log('log out success')
  $('.logout-message').text('You are now logged out.')
  $('#user-buttons').hide(1700)
  $('.api-buttons').hide(1700)
  $('.login-buttons').show(2300)
}

const logoutFailure = function (error) {
  console.log('log out failure')
  $('.logout-message').text('Oops! Something went wrong.', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure
}
