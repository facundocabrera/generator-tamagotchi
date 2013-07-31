'use strict';

var util   = require('util');
var fs     = require('fs');
var yeoman = require('yeoman-generator');

module.exports = ComponentGenerator;

function ComponentGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.on('end', function() {
    console.log('Creation complete'.yellow.bold);
  });

  console.log('Creating a ' + 'new component'.yellow.bold + ' ' + this.name.magenta);
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
      name: 'Invalid Argument'.yellow.bold,
      message: 'The Component you want create already exists'.magenta
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
