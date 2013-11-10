/*global describe, beforeEach, it*/

'use strict';

var path = require('path');
var assert = require('assert');

// Useful set of helpers created by the yeoman creators.
var helpers = require('yeoman-generator').test;

// Each test must run into a temporal directory where we are going to verify
// the output.
var TEST_SANDBOX_DIR = path.join(__dirname, 'test-sandbox');

describe('Tamagotchi bases', function () {

  beforeEach(function (done) {
    // Create/Cleanup the test sandbox directory
    helpers.testDirectory(TEST_SANDBOX_DIR, function (err) {
      // Set of files required to startup the generator
      var deps = [
        '../../app',
        '../../component'
      ];

      if (err) {
        return done(err);
      }

      // Generator instance for each scenario
      this.tamagotchi = helpers.createGenerator('tamagotchi:app', deps);

      done();
    }.bind(this));
  });

  it('should create expected files', function (done) {
    // List of expected files after run the generator
    var expected = [
      // hidden config files
      '.bowerrc',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.jshintrc',
      // deps
      'bower.json',
      'package.json',
      // grunt
      'Gruntfile.js',
      // scaffold
      'app/index.html',
      'app/main.js',
      'app/controllers/.gitkeep',
      'app/collections/.gitkeep',
      'app/models/.gitkeep',
      'app/views/.gitkeep',
      'app/templates/.gitkeep',
      'app/helpers/.gitkeep',
      'app/components/.gitkeep',
      'app/assets/images/.gitkeep',
      'app/assets/fonts/.gitkeep',
      'app/assets/less/application.less',
      'app/assets/less/config.dev.less',
      'app/assets/less/config.less'
    ];

    // Configure the generator before run
    helpers.mockPrompt(this.tamagotchi, {
      enableReverseProxy: false
    });

    // Run the generator and validate the output in the filesystem
    this.tamagotchi.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

});
