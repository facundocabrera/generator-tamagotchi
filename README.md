# Generator-deloitte

## Install for developers

- Make sure you have [yo](https://github.com/yeoman/yo) installed:

    `npm install -g yo bower grunt-cli`

- Clone the project

    `git clone https://github.com/dendril/generator-deloitte`

- Create a branch for your code (only required if you will do a change inside
  the generator).

    `git checkout -b my-changes-proposal`

- Link (simulate the standard installation till we have an official package)

    `cd generator-deloitte`

    `npm link`

> NOTE: ONLY WINDOWS ENVIROMENT If you change from branches yo must execute
  `npm rm generator-deloite` and `npm link` to update the generator

## Usage

### WebApp creation

- Create a project folder

    `mkdir MyApp`

    `cd MyApp`

- Run the generator to create the base app

    `yo deloitte`

### Component creation

- Run the sub-generator for components skeleton (you must be at the app root)

    `yo deloitte:component my-first-component`

### Server

- By default you have available a local web server with livereload support

    `grunt server`

For more information: [livereload](app/templates/docs/0006-livereload.md)
