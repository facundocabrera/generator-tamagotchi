# Project directory layout

- [app][app]
    + [assets][app/assets]
        * [css][app/assets/css]
        * [fonts][app/assets/fonts]
        * [less][app/assets/less]
            - [application.less][app/assets/less/application.less]
            - [config.dev.less][app/assets/less/config.dev.less]
            - [config.less][app/assets/less/config.less]
        * [images][app/assets/images]

    + [collections][app/collections]
    + [controllers][app/controllers]
    + [models][app/models]
    + [templates][app/templates]
    + [views][app/views]
    + [app.js][app/app.js]
    + [config.js][app/config.js]
    + [main.js][app/main.js]


        + [components][lib/components]
            * [namespace][lib/components]

        + [helpers][lib/helpers]
            * [namespace][lib/helpers]

    - [vendor][vendor]
        + [namespace][vendor/namespace]

    - [index.html][vendor/index.html]

    - [Gruntfile.js][vendor/Gruntfile.js]

    - [package.json][vendor/package.json]

### Application
[app]: #application

Inside this folder you will find everything about the application
we are building.

#### Collections
[app/collections]: #collections

Backbone collections will be all placed in this directory. If you
consider necessary, create namespaces.

#### Controllers
[app/controllers]: #controllers

All the global controllers must be placed here. The idea is mainly
for controllers provided by Marionette.

#### Models
[app/models]: #models

Backbone models will be all placed in this directory. If you
consider necessary, create namespaces.

#### Templates
[app/templates]: #templates

All the templates which will be reused across several
Backbone/Marionette Views must be placed here.

Remember we are going to use underscore templates by default. One
conventions is the following: `_myTemplate.html`.

Pay attention to the _ at the beginning.

If you consider necessary, create namespaces.

#### Views
[app/views]: #views

All the Views which will be reused across several components must
be placed here.

### Application Libraries
[lib]: #application-libraries

#### Assets
[lib/assets]: #assets

##### CSS
[lib/assets/css]: #css

##### LESS
[lib/assets/less]: #less

##### Images
[lib/assets/images]: #images

#### Components
[lib/components]: #components

#### Helpers
[lib/helpers]: #helpers

### Vendor
[vendor]: #vendor

#### Vendor namespaces
[vendor/namespace]: #vendor-namespaces

### index.html
[vendor/index.html]: #indexhtml

#### App.js
[app/app.js]: #appjs

#### Config.js
[app/config.js]: #configjs

#### Main.js
[app/main.js]: mainjs

### Gruntfile.js
[vendor/Gruntfile.js]: #gruntfilejs

### package.json
[vendor/package.json]: #packagejson
