# Tamagotchi - The yeoman pet

## Basic usage

### WebApp creation

- Create a project folder

    `mkdir MyApp`

    `cd MyApp`

- Run the generator to create the base app

    `yo tamagotchi`

### Component creation

- Run the sub-generator for components skeleton (you must be at the app root)

    `yo tamagotchi:component my-first-component`

## Reverse proxy support (optional)

![reverse proxy sample](https://lh3.googleusercontent.com/-VsphwK0Q2gc/Uf2dIFBKraI/AAAAAAAAKcc/vvTpvvM6r-M/w686-h217-no/01-reserve-proxy-sample.png)

1 - If you answer **yes** tamagotchi will add support for *reverse proxy* and 
    will make some questions.

2 - Generally there is a prefix in the URLs which helps you to separate the 
webapp from the services.

For example:
- https://100.200.50.10/ => here you have the webapp deployed
- https://100.200.50.10/services/ => here you have the services you target

***In this case the URL prefix is /services***

3 - In the example I'm using **100.200.50.10** as backend, but my webapp is 
running in my local computer *(for example 192.168.1.2)*.

4 - For the port, I'm using 8081, but it could be any valid port number.

5 - The last question is related to the protocol, in the example I'm using https.

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

- If you are updating your local copy of master, after merge the last changes:

  `npm install`

  With this, any dependency updated inside the generator will be automatically
  installed :smile:
