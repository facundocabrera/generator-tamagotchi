# First Touch

**You are the father of your code, as a tamagotchi pet, you will need to care of 
it.**

## Basic setup

Before start be sure you already have read all the conventions from
[here](./0007-conventions.md).

Because you don't have code in your machine yet, we need to start cloning the
repository:

    $ git clone <REPOSITORY_URL>

**NOTE:** In windows clone the repository under C:\Project because the OS has a 
          limitation in the number of sub-directories and that restriction is 
          problematic with NodeJS packages.
          
After `git clone` is completed, and accomplish ALL the git configurations, you 
need to run the following commands:

    $ npm install
    $ bower install

Those will be the responsible to install all the required dependencies for the 
project.

If you want to configure a proxy for example, please check:

1. [bower config](https://github.com/bower/bower#configuration)
2. [npm config](https://npmjs.org/doc/config.html)

## Development support

The system provide the concept of [livereload](./0006-livereload.md). At the same time, you
will be able to execute development tasks using the following command:

`grunt watch`

For more information just read the file `Gruntfile.js`.

## Build support

The build process is handled by the system automatically. If you want to create the build version of the system you will only need to do the following:

`grunt build`

For more information just read the file `Gruntfile.js`.





