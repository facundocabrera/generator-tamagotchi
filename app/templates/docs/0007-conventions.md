# Conventions

## Git

[Configuration](http://git-scm.com/book/en/Customizing-Git-Git-Configuration)

    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    $ git config --global color.ui true

On Windows:

    $ git config --global core.autocrlf true

On Mac or Linux:

    $ git config --global core.autocrlf input

If you need TFS integration, [please check this as well](./0008-git-tfs.md)

## Text editor

By default we use [sublime text editor](http://www.sublimetext.com/) +
[editorconfig.org](http://editorconfig.org/).

After install sublime, please add
[editorconfig plugin for sublime](https://github.com/sindresorhus/editorconfig-sublime)

## JS

### Code Style

- [Globant style](https://github.com/globant-ui/javascript-style-guide)
- [YUI documentation style guide](http://yui.github.io/yuidoc/syntax/index.html)

### Sublime plugins

[Beautifier plugin](https://github.com/jdc0589/JsFormat)

```
{
  "indent_size": 2,
  "indent_char": " ",
  "indent_level": 0,
  "indent_with_tabs": false,
  "preserve_newlines": true,
  "max_preserve_newlines": 10,
  "jslint_happy": false,
  "brace_style": "collapse",
  "keep_array_indentation": false,
  "keep_function_indentation": false,
  "space_before_conditional": true,
  "break_chained_methods": false,
  "eval_code": false,
  "unescape_strings": false,
  "wrap_line_length": 0
}
```

[JSHint plugin](https://github.com/uipoet/sublime-jshint)

> Please use the configuration file (.jshintrc) provided into our project.

## CSS/LESS

### LESS

[LESS the language](http://lesscss.org/)

### Code Style & conventions

- [Globant style guide](https://github.com/globant-ui/css-style-guide)
- [TopCoat style guide](https://github.com/topcoat/topcoat/wiki/Coding-Guidelines)
- [iunit style guide](https://github.com/csswizardry/CSS-Guidelines)
- [How to manage hacks - shame.css](http://csswizardry.com/2013/04/shame-css/)
- [BEM naming convention](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

### Sublime plugins

- [CSS Sorter](http://csscomb.com/)
- [Prefixr](http://wbond.net/sublime_packages/prefixr)

### Linters & code analysis

- [csslint](http://csslint.net/)
- [csscss](http://zmoazeni.github.io/csscss/)

## HTML

### Underscore template

Use the requirejs **jst** plugin, as follow:

```javascript
require(['jst!templates/_module.html'], function (template) {
  var data = {
    d: 'hello world'
  };

  return template(data);
});
```

***Filename convention:*** _templateName.html

### Sublime plugins

[EJS template highlighting](https://github.com/falsefalse/sublime-ejs)
