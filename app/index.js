'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

// Common JS export
module.exports = DeloitteGenerator;

/**
 * @constructor
 */
function DeloitteGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DeloitteGenerator, yeoman.generators.Base);

/**
 * Configuration
 */
DeloitteGenerator.prototype.askFor = function askFor() {
  var cb = this.async(),
      welcome,
      prompts;

  // welcome message
  welcome = 'Welcome to '.yellow.bold + 'Deloitte'.red + ' web app generator'.yellow.bold + '\n';
  console.log(welcome);

  prompts = [];

  this.prompt(prompts, function (props) {
    cb();
  }.bind(this));
};

/**
 * Directory structure
 */
DeloitteGenerator.prototype.app = function app() {
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
DeloitteGenerator.prototype.package = function() {
  this.template('_package.json', 'package.json');
};

/**
 * Grunt
 */
DeloitteGenerator.prototype.grunt = function() {
  this.template('_gruntfile.js', 'Gruntfile.js');
};

/**
 * Git
 */
DeloitteGenerator.prototype.git = function() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

/**
 * Bower
 */
DeloitteGenerator.prototype.bower = function() {
  this.copy('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
};

/**
 * JSHint
 */
DeloitteGenerator.prototype.jshint = function() {
  this.template('_jshintrc', '.jshintrc');
};

/**
 * Text Editor preferences
 */
DeloitteGenerator.prototype.editorConfig = function() {
  this.copy('editorconfig', '.editorconfig');
};

/**
 * index.html
 */
DeloitteGenerator.prototype.index = function() {
  this.copy('main.js', 'app/main.js');
  this.copy('index.html', 'app/index.html');
};

/**
 * Less
 */
DeloitteGenerator.prototype.less = function() {
  this.copy('less/application.less', 'app/assets/less/application.less');
  this.copy('less/config.dev.less', 'app/assets/less/config.dev.less');
  this.copy('less/config.less', 'app/assets/less/config.less');
};

/**
 * Base documentation
 */
DeloitteGenerator.prototype.docs = function() {
  this.copy('docs/0000-todo-list.md', 'docs/0000-todo-list.md');
  this.copy('docs/0001-dwa-first-use.md', 'docs/0001-dwa-first-use.md');
  this.copy('docs/0002-application-structure.md', 'docs/0002-application-structure.md');
  this.copy('docs/0003-web-components.md', 'docs/0003-web-components.md');
  this.copy('docs/0005-disable-cors-for-services-integration.md', 'docs/0005-disable-cors-for-services-integration.md');
};
