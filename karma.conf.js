module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'closure'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/closure-library/closure/goog/base.js',
      './**/*.spec.js',
      {pattern: './**/!(*.spec).js', included: false},
    ],
    preprocessors: {
      './**/*.spec.js': ['closure', 'closure-iit'],
      './**/!(*.spec).js': ['closure']
    },
    browsers: ['Chrome']
  });
};
