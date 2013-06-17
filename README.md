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
