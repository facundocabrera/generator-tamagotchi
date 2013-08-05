'use strict';

var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    checker = require('validator').check;

/**
 * @constructor
 */
function Tamagotchi() {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    console.log(
      '\nPlease run ' + 'npm install & bower install '.yellow.bold + 'to install all the dependencies' + '\n'
    );
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  console.log('Welcome to '.yellow.bold + 'Tamagotchi'.red + ' web app generator'.yellow.bold + '\n');
}

util.inherits(Tamagotchi, yeoman.generators.Base);

/**
 * Prompts
 */
Tamagotchi.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    type: 'confirm',
    name: 'enableReverseProxy',
    message: 'Do you need support for cross-origin services?:',
    default: false
  }];

  var reverseProxyPrompts = [{
    type: 'input',
    name: 'urlPrefix',
    message: 'Url prefix to match the remote services (start with /):',
    validate: function (input) {
      try {
        checker(input, 'Please enter a valid url prefix').is(/^\/\w+/);
      } catch (e) {
        return e.message;
      }
      return true;
    }
  }, {
    type: 'input',
    name: 'host',
    message: 'Host IP or Domain name:',
    validate: function (input) {
      try {
        checker(input, 'Please enter a valid IP or Domain').notEmpty();
      } catch (e) {
        return e.message;
      }
      return true;
    }
  }, {
    type: 'input',
    name: 'port',
    message: 'Port number',
    validate: function (input) {
      try {
        checker(input, 'Please enter a valid port number (0 to 65535)').isInt().min(0).max(65535);
      } catch (e) {
        return e.message;
      }
      return true;
    }
  }, {
    type: 'confirm',
    name: 'https',
    message: 'Do you use https?',
    default: false
  }];

  this.prompt(prompts, function (props) {
    this.enableReverseProxy = props.enableReverseProxy;

    // Reverse proxy options requires some extra feedback
    if (this.enableReverseProxy) {
      this.prompt(reverseProxyPrompts, function (props) {

        this.reverseProxy = {
          context : props.urlPrefix,
          host    : props.host,
          port    : props.port,
          https   : props.https
        };

        ////
        // @TODO learn how async module works and implement this correctly
        ////
        cb();
      }.bind(this));
    }

    ////
    // @TODO learn how async module works and implement this correctly
    ////
    !this.enableReverseProxy && cb();
  }.bind(this));
};

/**
 * Directory structure
 */
Tamagotchi.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('docs');

  this.mkdir('app/controllers');
  this.mkdir('app/collections');
  this.mkdir('app/models');
  this.mkdir('app/views');
  this.mkdir('app/templates');
  this.mkdir('app/helpers');

  this.mkdir('app/components');

  this.mkdir('app/assets');
  this.mkdir('app/assets/css');
  this.mkdir('app/assets/images');
  this.mkdir('app/assets/less');
  this.mkdir('app/assets/fonts');

  this.mkdir('app/vendor');
};

/**
 * NPM deps
 */
Tamagotchi.prototype.package = function() {
  this.template('_package.json', 'package.json');
};

/**
 * Grunt
 */
Tamagotchi.prototype.grunt = function() {
  this.template('_gruntfile.js', 'Gruntfile.js');
};

/**
 * Git
 */
Tamagotchi.prototype.git = function() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

/**
 * Bower
 */
Tamagotchi.prototype.bower = function() {
  this.copy('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
};

/**
 * JSHint
 */
Tamagotchi.prototype.jshint = function() {
  this.template('_jshintrc', '.jshintrc');
};

/**
 * Text Editor preferences
 */
Tamagotchi.prototype.editorConfig = function() {
  this.copy('editorconfig', '.editorconfig');
};

/**
 * index.html
 */
Tamagotchi.prototype.index = function() {
  this.copy('main.js', 'app/main.js');
  this.copy('index.html', 'app/index.html');
};

/**
 * Less
 */
Tamagotchi.prototype.less = function() {
  this.copy('less/application.less', 'app/assets/less/application.less');
  this.copy('less/config.dev.less', 'app/assets/less/config.dev.less');
  this.copy('less/config.less', 'app/assets/less/config.less');
};

/**
 * Base documentation
 */
Tamagotchi.prototype.docs = function() {
  this.copy('docs/0000-index.md',
            'docs/0000-index.md');

  this.copy('docs/0001-first-touch.md',
            'docs/0001-first-touch.md');

  this.copy('docs/0002-application-structure.md',
            'docs/0002-application-structure.md');

  this.copy('docs/0003-components.md',
            'docs/0003-components.md');

  this.copy('docs/0005-disable-cors-for-services-integration.md',
            'docs/0005-disable-cors-for-services-integration.md');

  this.copy('docs/0006-livereload.md', 'docs/0006-livereload.md');
  this.copy('docs/0007-conventions.md', 'docs/0007-conventions.md');
  this.copy('docs/0008-git-tfs.md', 'docs/0008-git-tfs.md');

  this.copy('docs/0009-effective_bower_for_beginers.md',
            'docs/0009-effective_bower_for_beginers.md');
};

// Common JS export
module.exports = Tamagotchi;
