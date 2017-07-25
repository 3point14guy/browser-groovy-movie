'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('api signUp')
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log('api signIn')
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  console.log('api changePassword')
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const logout = function () {
  console.log('api logout')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const requestAllMovies = function (data) {
  console.log('api requestAllMovies')
  return $.ajax({
    url: config.apiOrigin + '/movies'
  })
}

const deleteAMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addAMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateARating = function (movie) {
  const data = movie
  return $.ajax({
    url: config.apiOrigin + '/movies/' + movie.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  logout,
  requestAllMovies,
  deleteAMovie,
  addAMovie,
  updateARating
}
