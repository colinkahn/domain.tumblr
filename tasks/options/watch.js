'use strict';

module.exports = {
  js: {
    files: ['./**/!(*.spec).js'],
    tasks: ['karma:unit']
  },
  unit: {
    files: ['./**/*.spec.js'],
    tasks: ['karma:unit']
  }
};
