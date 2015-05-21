# Bookshop

The online bookshop of Henri Potier, a skills assessment from xebia.

This project is splitted into two parts :

* Front-end : [https://github.com/hjumeau/bookshop.git](https://github.com/hjumeau/bookshop.git) (this repository)
* Back-end : [https://github.com/hjumeau/bookshop-api.git](https://github.com/hjumeau/bookshop-api.git)

Front and Back resources are deployed separately on Heroku.

* https://henri-bookshop.herokuapp.com/ -> Expose JavaScript and CSS files
* https://henri-bookshop-api.herokuapp.com/ -> Include JavaScript and CSS files

*Visit bookshop app at [https://henri-bookshop-api.herokuapp.com/](https://henri-bookshop-api.herokuapp.com/)*

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200). (with api mock)

* `ember server --proxy https://henri-bookshop-api.herokuapp.com`
* Visit your app at [http://localhost:4200](http://localhost:4200). (with api proxy)

### Running Tests

* `ember test` 
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

I want a better way to deploy my MVC * applications.
Do you have a suggestion ? : -)
