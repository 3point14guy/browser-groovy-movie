'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  $('.sign-up-message').text(data.user.email + ' now has an account. Please login.')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('.logout-buttons').show(2900)
  $('.login-message').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(2600)
}
const signInFailure = (error) => {
  $('.login-message').text('Login failure. ', error)
}
const signUpFailure = (error) => {
  $('.sign-up-message').text('There was an error creating the account ', error)
}

const passwordChangeSuccess = function () {
  $('.change-pswrd-message').text('Password changed!')
}
const passwordChangeFailure = function (error) {
  $('.change-pswrd-message').text('Password change failed', error)
}

const logoutSuccess = function () {
  $('.logout-message').text('You are now logged out.')

}
const logoutFailure = function (error) {
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
