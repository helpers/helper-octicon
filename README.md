# helper-octicon [![NPM version](https://img.shields.io/npm/v/helper-octicon.svg?style=flat)](https://www.npmjs.com/package/helper-octicon) [![NPM monthly downloads](https://img.shields.io/npm/dm/helper-octicon.svg?style=flat)](https://npmjs.org/package/helper-octicon)  [![NPM total downloads](https://img.shields.io/npm/dt/helper-octicon.svg?style=flat)](https://npmjs.org/package/helper-octicon) [![Linux Build Status](https://img.shields.io/travis/helpers/helper-octicon.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/helper-octicon)

> Template helper for displaying octicon SVGs. Should work with any Handlebars, Lo-Dash, underscore or any template engine that allows helper functions to be registered. Also compatible with verb, assemble, and templates.

## Install

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm install --global helper-octicon
```

## Usage

The main export is a function that can be called directly:

```js
var octicon = require('helper-octicon');
console.log(octicon('x'));
//=> '<svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>'
```

## Examples

With Handlebars:

> use triple curly braces to unescape the svg tag so it's rendered correctly.

```handlebars
{{{octicon "x" class="close"}}}
//=> <svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
```

### Usage with [assemble](https://github.com/assemble/assemble)

_(This example also works for [verb](https://github.com/verbose/verb), [update](https://github.com/update/update), [generate](https://github.com/generate/generate), or any other lib based on the [templates](https://github.com/jonschlinkert/templates) library)_

Register the helper for use with any template engine

```js
var templates = require('templates');
var app = templates();

app.helper('octicon', require('helper-octicon'));

app.task('default', function() {
  app.src('templates/.hbs')
    .pipe(app.dest('dist'));
});
```

**Helper usage**

Delimiters depend on the engine registered. For example, with Lo-Dash or Underscore templates:

```js
<%= octicon("x") %>
//=> <svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
```

Or with Verb, which uses special delimiters to avoid delimiter collision when the documentation itself includes templates that should not render (like these docs):

```js
{%= octicon("x") %}
//=> <svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
```

### Usage with [handlebars](http://www.handlebarsjs.com/)

To use the helper directly with handlebars:

```js
var handlebars = require('handlebars');
handlebars.registerHelper('octicon', require('helper-octicon'));
```

Template examples:

```handlebars
{{{octicon "x"}}}
{{{octicon "x" class="close"}}}
{{{octicon "x" width="48" height="60"}}}
```

### Usage with [lodash](https://lodash.com/) or [underscore](http://underscorejs.org)

Use directly with Lo-Dash or underscore:

```js
var octicon = require('helper-octicon');

// as a mixin
_.mixin({octicon: octicon});
_.template('<%= _.octicon("x") %>');
//=> '<svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>'

// or pass the helper on the context
_.template('<%= octicon("x") %>')({octicon: octicon});
//=> '<svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>'
```

To contribute a helper to the [github.com/helpers](https://github.com/fshost/helpers) org, follow these steps:

### 1. Install the helper generator

Install [generate](https://github.com/generate/generate) and [generate-helper][]:

```sh
npm install --global generate generate-helper
```

### 2. Generate your project

To initialize the project, including documentation and unit tests, in the command line, run:

```sh
gen helper
```

### 3. Create a repo

Create a repo on GitHub under your own account.

### 4. Last, request a transfer

Create an issue to [request a transfer](https://github.com/helpers/requests/issues/new) to the [helpers](https://github.com/helpers) org.

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [engine](https://www.npmjs.com/package/engine): Template engine based on Lo-Dash template, but adds features like the ability to register helpers… [more](https://github.com/jonschlinkert/engine) | [homepage](https://github.com/jonschlinkert/engine "Template engine based on Lo-Dash template, but adds features like the ability to register helpers and more easily set data to be used as context in templates.")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate… [more](https://github.com/assemble/handlebars-helpers) | [homepage](https://github.com/assemble/handlebars-helpers "More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.")
* [octicons](https://www.npmjs.com/package/octicons): A scalable set of icons handcrafted with <3 by GitHub. | [homepage](https://octicons.github.com "A scalable set of icons handcrafted with <3 by GitHub.")
* [templates](https://www.npmjs.com/package/templates): System for creating and managing template collections, and rendering templates with any node.js template engine… [more](https://github.com/jonschlinkert/templates) | [homepage](https://github.com/jonschlinkert/templates "System for creating and managing template collections, and rendering templates with any node.js template engine. Can be used as the basis for creating a static site generator or blog framework.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](contributing.md) for avice on opening issues, pull requests, and coding standards.

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](http://twitter.com/doowb)

### License

Copyright © 2017, [Brian Woodward](https://github.com/doowb).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.3, on January 04, 2017._