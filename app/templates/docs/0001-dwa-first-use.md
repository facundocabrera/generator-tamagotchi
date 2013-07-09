# Deloitte Web Application (DWA)

If you want to give a try of the framework, here is the list of steps you
need to follow:

1. Install git for windows.

2. Install nodejs (>= 0.8) for windows.

3. Install npm for windows.

        C:\Projects>npm bin -g
        C:\Users\emilio.cabrera\AppData\Roaming\npm
        (not in PATH env variable)

    **You must have this configuration to be able to with with the tools
    installed via `npm install`**

2. Go to the root of your partition and clone the project.

    `c:\Projects>git clone https://github.com/krosti/users-deloitte-poc.git poc`

3. cd poc\www

4. npm install (*This will take cake of everything you need for start
   developing with the framework.*)

5. grunt

        c:\Projects\poc\deloitte\www>grunt
        Running "less:development" (less) task
        File lib\assets\css\application.css created.

        Done, without errors.

    With this step we have created the application styles, so now we are
    ready to test the application.

6. node server.js

        c:\Projects\poc\deloitte\www>node server.js
        === Server running! === http://127.0.0.1:8080

    With this command we are starting up the web server.

7. [See the app in my browser](http://127.0.0.1:8080)
