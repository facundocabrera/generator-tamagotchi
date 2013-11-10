/*global describe, beforeEach, it*/

'use strict';

var path = require('path');
var assert = require('assert');

// Useful set of helpers created by the yeoman creators.
var helpers = require('yeoman-generator').test;

// Each test must run into a temporal directory where we are going to verify
// the output.
var TEST_SANDBOX_DIR = path.join(__dirname, 'test-component');

describe('Tamagotchi component', function () {

  beforeEach(function (done) {

    // Create/Cleanup the test sandbox directory
    helpers.testDirectory(TEST_SANDBOX_DIR, function (err) {
      // Set of files required to startup the generator
      var deps = [
        '../../app'
      ];

      if (err) {
        return done(err);
      }

      // Generator instances for each scenario
      this.tamagotchi = helpers.createGenerator('tamagotchi:app', deps);

      // Configure the generator before run
      helpers.mockPrompt(this.tamagotchi, {
        enableReverseProxy: false
      });

      // Run the sub-generator and validate the output in the filesystem
      this.tamagotchi.run({}, function () {
        done();
      });

    }.bind(this));

  });

  it('should create expected files', function (done) {
    var deps = [
      '../../app',
      '../../component'
    ];

    var expected = [
      'index.html',
      'index.js',
      'style.less'
    ];

    var component = helpers.createGenerator(
      'tamagotchi:component', deps, ['TestComponent']
    );

    component.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

});
