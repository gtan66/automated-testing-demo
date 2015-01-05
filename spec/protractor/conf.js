exports.config = {
  seleniumAddress: 'http://192.168.59.103:4444/wd/hub',
  specs: ['tests/spec.js'],
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('xmloutput', true, true)
    )
  }
}
