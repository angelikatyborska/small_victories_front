'use strict';

module.exports = function($resource) {
  return $resource('https://small-victories-api.herokuapp.com/api/v1/victories/:id');
};