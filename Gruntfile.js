module.exports = function(grunt) {
  grunt.initConfig({
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
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('default', ['protractor']);
}
