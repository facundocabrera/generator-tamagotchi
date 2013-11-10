'use strict';

module.exports = ComponentGenerator;

var util   = require('util'),
    fs     = require('fs'),
    yeoman = require('yeoman-generator'),
    chalk  = require('chalk');

function ComponentGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.on('end', function() {
    console.log(chalk.yellow.bold('Creation complete'));
  });

  console.log(
    'Creating a ' +
    chalk.yellow.bold('new component') + ' ' +
    chalk.magenta(this.name)
  );
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

/**
 * Initialization process of the sub-component.
 */
ComponentGenerator.prototype.setup = function() {
  var name = this.name.trim(),
      dest = 'app/components/' + name;

  if (name && !fs.existsSync(dest)) {
    // Define the new working root for this class.
    this.destinationRoot(dest);
  } else {
    throw {
      name: chalk.yellow.bold('Invalid Argument'),
      message: chalk.magenta('The Component you want create already exists')
    };
  }
};

/**
 * Copy component skeleton.
 */
ComponentGenerator.prototype.files = function() {
  this.copy('index.js', 'index.js');
  this.template('_index.html', 'index.html');
  this.template('_style.less', 'style.less');
};
