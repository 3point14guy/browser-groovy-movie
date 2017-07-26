'use strict'

const store = require('./store')
const displayMoviesTemplate = require('./templates/movie-listing.handlebars')

const signUpSuccess = (data) => {
  $('.sign-up-message').text(data.user.email + ' now has an account. Please login.')
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
  $('.sign-up').text(data.uesr.email + ' is now signed in.')
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
  $('#user-buttons').hide(1700)
  $('.api-buttons').hide(1700)
  $('.login-buttons').show(2300)
  $('.display-list').hide()
  $('.instructions').text('Please login to begin')
}

const logoutFailure = function (error) {
  $('.logout-message').text('Oops! Something went wrong.', error)
}

const allMoviesSuccess = function (data) {
  store.movie = data.movie
  $('.display-list').empty()
  const displayMoviesHTML = displayMoviesTemplate({ movies: data.movies })
  $('.display').show()
  $('.display-list').append(displayMoviesHTML)
  $('api-buttons').show()
  $('.all-movie-show').show()
}
const allMoviesFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error)
}

const deleteMovieSuccess = function () {
  $('.delete-movie').text('Movie deleted succssfully!')
}
const deleteMovieFailure = function (error) {
  $('.delete-movie').text('Oops, something went wrong.', error)
}

const addMovieSuccess = function (event) {
  $('.add-movie').text('Movie succssfully added!')
  // would really love to run this here while maintaining separate files getAllMovies()
}
const addMovieFailure = function (error) {
  $('.add-movie').text('Oops, something went wrong.', error)
}

const updateRatingSuccess = function () {
  $('.update-a-rating').text('Movie succssfully Updated!')
}
const updateRatingFailure = function (error) {
  $('.update-a-rating').text('Oops, something went wrong.', error)
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
