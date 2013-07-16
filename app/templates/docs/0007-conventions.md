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

## JS

### Code Style

- [Globant style](https://github.com/globant-ui/javascript-style-guide)
- [YUI documentation style guide](http://yui.github.io/yuidoc/syntax/index.html)

### Sublime

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

> Use the configuration file (.jshintrc) provided into our project.

## CSS/LESS

### LESS

[LESS the language](http://lesscss.org/)

### Code Style

- [Globant style](https://github.com/globant-ui/css-style-guide)
- [TopCoat style](https://github.com/topcoat/topcoat/wiki/Coding-Guidelines)

### Sublime

[CSS Sorter](http://csscomb.com/)
[Prefixr](http://wbond.net/sublime_packages/prefixr)

##Underscore Templates
Using JST to precompile templates in production.

To use templates do the following
```javascript
require(['jst!templates/_module.html'],
    function (template) {
        template(data)
    }
);```

***Filename convention:*** _(filename).html

### Sublime
[EJS](https://github.com/falsefalse/sublime-ejs)