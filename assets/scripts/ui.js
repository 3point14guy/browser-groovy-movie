'use strict'

const store = require('./store')
const displayMoviesTemplate = require('./templates/movie-listing.handlebars')

const signUpSuccess = (data) => {
  $('.sign-up-message').text(data.user.email + ' now has an account. Please login.').fadeIn('fast').delay(3000).fadeOut('slow')
  $('.form-clear').trigger('reset')
  $('#submit-register').modal('hide')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('.title-top').show()
  $('.display').show()
  $('.login-screen').hide()
  $('.api-buttons').show(1700)
  $('.logout-buttons').show(2100)
  $('.instructions').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(1700)
  // $('.sign-up').text(data.uesr.email + ' is now signed in.').fadeIn('fast').delay(3000).fadeOut('slow')
  $('.form-clear').trigger('reset')
  $('#submit-login').modal('hide')
}
const signInFailure = (error) => {
  $('.login-message').text('Login failure. ', error).fadeIn('fast').delay(2000).fadeOut('slow').modal('hide')
}
const signUpFailure = (error) => {
  $('.sign-up-message').text('There was an error creating the account ', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

const passwordChangeSuccess = function () {
  $('.form-clear').trigger('reset')
  // $('.change-pswrd-message').text('Password changed!').fadeIn('fast').delay(3000).fadeOut('slow')
  $('#submit-change-password').modal('hide')
}
const passwordChangeFailure = function (error) {
  $('.change-pswrd-message').text('Password change failed', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

const logoutSuccess = function () {
  $('.logout-message').text('You are now logged out.').fadeIn('fast').delay(3000).fadeOut('slow')
  $('#user-buttons').hide(1700)
  $('.api-buttons').hide(1700)
  $('.login-buttons').show(2300)
  $('.display-list').hide()
  $('.instructions').text('Please login to begin')
  $('#log-out').modal('hide')
  $('.display').hide()
  $('.login-screen').show()
}

const logoutFailure = function (error) {
  $('.logout-message').text('Oops! Something went wrong.', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

const allMoviesSuccess = function (data) {
  store.movie = data.movie
  const displayMoviesHTML = displayMoviesTemplate({ movies: data.movies })
  $('.display-list').empty()
  $('.display').show()
  $('.show-buttons').show(300)
  $('.display-list').append(displayMoviesHTML)
  $('api-buttons').show()
  $('.all-movie-show').show()
}
const allMoviesFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

const deleteMovieSuccess = function () {
  $('.form-clear').trigger('reset')
  // $('.delete-movie').text('Movie deleted succssfully!').fadeIn('fast').delay(3000).fadeOut('slow')
  $('#delete-a-movie').modal('hide')
}
const deleteMovieFailure = function (error) {
  $('.delete-movie').text('Oops, something went wrong.', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

const addMovieSuccess = function () {
  $('.form-clear').trigger('reset')
  // $('.add-movie').text('Movie succssfully added!').fadeIn('fast').delay(3000).fadeOut('slow')
  $('#add-a-movie').modal('hide')

  // would really love to run this here while maintaining separate files getAllMovies()
}
const addMovieFailure = function (error) {
  $('.add-movie').text('Oops, something went wrong.', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

const updateRatingSuccess = function (data) {
  $('.form-clear').trigger('reset')
  // $('.update-a-rating').text('Movie succssfully Updated!').fadeIn('fast').delay(3000).fadeOut('slow')
  $('#update-a-movie').modal('hide')
}
const updateRatingFailure = function (error) {
  $('.update-a-rating').text('Oops, something went wrong.', error).fadeIn('fast').delay(3000).fadeOut('slow')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure,
  allMoviesSuccess,
  allMoviesFailure,
  deleteMovieSuccess,
  deleteMovieFailure,
  addMovieSuccess,
  addMovieFailure,
  updateRatingSuccess,
  updateRatingFailure
}
