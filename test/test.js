'use strict';

require('mocha');
var assert = require('assert');
var octicon = require('../');
var Engine = require('engine');
var Handlebars = require('handlebars');

describe('helper-octicon', function() {
  it('should export a function', function() {
    assert.equal(typeof octicon, 'function');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      octicon();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      cb();
    }
  });

  it('should throw an error when octicon is not found and strict is not false', function(cb) {
    try {
      octicon('doowb');
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'octicon "doowb" is not available');
      cb();
    }
  });

  it('should not throw an error when octicon is not found and strict is false', function() {
    assert.equal(octicon('doowb', {strict: false}), '');
  });

  it('should return the svg for an octicon', function() {
    assert.equal(octicon('x'), '<svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>');
  });

  it('should return the svg for an octicon with custom locals', function() {
    assert.equal(octicon('x', {width: 48, height: 60, class: 'close'}), '<svg version="1.1" width="48" height="60" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>');
  });

  it('should return the svg for an octicon with custom options on a `.hash` property', function() {
    assert.equal(octicon('x', {}, {hash: {width: 48, height: 60, class: 'close'}}), '<svg version="1.1" width="48" height="60" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>');
  });

  it('should return the svg for an octicon with custom locals and custom options on a `.hash` property', function() {
    assert.equal(octicon('x', {class: 'close'}, {hash: {width: 48, height: 60}}), '<svg version="1.1" width="48" height="60" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>');
  });

  it('should hash options should override locals', function() {
    assert.equal(octicon('x', {class: 'toggle'}, {hash: {width: 48, height: 60, class: 'close'}}), '<svg version="1.1" width="48" height="60" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>');
  });

  describe('ejs', function() {
    it('should work with ejs style template engines', function() {
      var engine = new Engine();
      engine.helper('octicon', octicon);

      var tmpl = '<div class="alert alert-success"><%= msg %><span><%= octicon("x", {class: "close"}) %></span></div>';
      var fn = engine.compile(tmpl);
      var content = fn({msg: 'Success!'});
      assert.equal(content, '<div class="alert alert-success">Success!<span><svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg></span></div>');
    });
  });

  describe('handlebars', function() {
    it('should work with handlebars', function() {
      Handlebars.registerHelper('octicon', octicon);

      var tmpl = '<div class="alert alert-success">{{msg}}<span>{{{octicon "x" class="close"}}}</span></div>';
      var fn = Handlebars.compile(tmpl);
      var content = fn({msg: 'Success!'});
      assert.equal(content, '<div class="alert alert-success">Success!<span><svg version="1.1" width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x close" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg></span></div>');
    });
  });
});
