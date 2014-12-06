Application = require 'application'
routes = require 'routes'

# Initialize the application on DOM ready event.
$ ->
  new Application {
    title: 'CS4460 WikiCon',
    controllerSuffix: '-controller',
    routes
  }
