'use strict';

module.exports = function($auth) {
  function login(loginForm, successCallback, errorCallback) {
    $auth.submitLogin(loginForm)
      .then(function(response) {
        if (typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback(response);
        }
      });
  }

  function logout(successCallback, errorCallback) {
    $auth.signOut()
      .then(function(response) {
        if (typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback(response);
        }
      });
  }

  function register(registerForm, successCallback, errorCallback) {
    $auth.submitRegistration(registerForm)
      .then(function(response) {
        if (typeof successCallback === 'function') {
          successCallback(response);
        }
      })
      .catch(function(response) {
        if (typeof errorCallback === 'function') {
          errorCallback(response);
        }
      });
  }

  function validate() {
    $auth.validateUser();
  }

  return {
    login: login,
    logout: logout,
    register: register,
    validate: validate
  }
};
