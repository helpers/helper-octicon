'use strict';

var octicons = require('octicons');
var extend = require('extend-shallow');

module.exports = function(name, locals, options) {
  if (!name || typeof name !== 'string') {
    throw new Error('expected first argument to be a string');
  }

  if (typeof options !== 'object' && locals && locals.hash) {
    options = locals;
    locals = {};
  }
  locals = locals || {};
  options = options || {};

  // use `options.hash` when set from handlebars
  var opts = extend({}, locals, options.hash);

  if (!octicons[name]) {
    if (opts.strict === false) {
      return '';
    }
    throw new Error(`octicon "${name}" is not available`);
  }
  return octicons[name].toSVG(opts);
};
