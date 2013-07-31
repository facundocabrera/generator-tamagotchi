## Install for developers

- Make sure you have [yo](https://github.com/yeoman/yo) installed:

    `npm install -g yo bower grunt-cli`

- Clone the project

    `git clone git@github.com:dendril/generator-tamagotchi.git`

- Create a branch for your code (only required if you will do a change inside
  the generator).

    `git checkout -b my-changes-proposal`

- Link (simulate the standard installation till we have an official package)

    `cd generator-tamagotchi`

    `npm link`

> NOTE: ONLY WINDOWS ENVIROMENT If you change between branches you must execute
  `npm rm -g generator-tamagotchi` and `npm link` to update the generator

## Usage

### WebApp creation

- Create a project folder

    `mkdir MyApp`

    `cd MyApp`

- Run the generator to create the base app

    `yo tamagotchi`

### Component creation

- Run the sub-generator for components skeleton (you must be at the app root)

    `yo tamagotchi:component my-first-component`
