module.exports = function(grunt) {
  grunt.initConfig({
    protractor_webdriver: {
      your_target: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start',
        },
      },
    },
    protractor: {
      options: {
        configFile:  "node_modules/protractor/example/conf.js",
        keepAlive: false,
        noColor: false,
        args: {}
      },
      your_target: {
        options: {
          configFile: "spec/protractor/conf.js",
          args: {}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('default', ['protractor_webdriver','protractor']);

}
