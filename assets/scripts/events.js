'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('events onSignUp')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('events onSignIn')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('events onChangePassword')
  api.changePassword(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFailure)
}
const onLogout = function (event) {
  event.preventDefault()
  console.log('events onLogout')
  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

const getAllMovies = function (event) {
  event.preventDefault()
  console.log('events getAllMovies')
  api.requestAllMovies()
    .then(ui.allMoviesSuccess)
    .catch(ui.allMovieFailure)
}

// const allUserlMovies = function (event) {
//   event.preventDefault()
//   console.log('events allUserMovies')
//   api.requestUserMovies()
//     .then(ui.userMoviesSuccess)
//     .catch(ui.userMovieFailure)
// }

// const addMovie = function (event) {
//   event.preventDefault()
//   console.log('events addMovie')
//   api.addAMovie()
//     .then(ui.addMovieSuccess)
//     .catch(ui.addMovieFailure)
// }

// const deleteMovie = function (event) {
//   event.preventDefault()
//   console.log('events deleteMovie')
//   api.deleteAMovie()
//     .then(ui.deleteMovieSuccess)
//     .catch(ui.deleteMovieFailure)
// }

// const updateRating = function (event) {
//   event.preventDefault()
//   console.log('events updateRating')
//   api.updateARating()
//     .then(ui.updateRatingSuccess)
//     .catch(ui.updateRatingFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
  $('#all-movies').on('click', getAllMovies)
  // $('#all-user-movies').on('click', allUserMovies)
  // $('#add-movie').on('click', addMovie)
  // $('.delete-movie').on('click', deleteMovie)
  // $('.update-rating').on('click', updateRating)
}

module.exports = {
  addHandlers
}
