var logos = require('../');
var assert = require('assert');
var browsers = [];
function browser(name) {
  browsers.push(name);
  describe('.' + name + '(options)', function () {
    it('is a string', function () {
      assert(typeof logos[name]() === 'string');
    });
  });
}

describe('exports', function () {
  browser('ie');
  browser('chrome');
  browser('firefox');
  browser('opera');
  browser('android');
  browser('apple');

  browser('pass');
  browser('pending');
  browser('fail');
});

if (!process.env.CI) {
  (function () {
    var open = require('open');
    var fs = require('fs');
    var read = fs.readFileSync;
    var write = fs.writeFileSync;
    var mkdir = fs.mkdirSync;
    var join = require('path').join;
    var template = read(join(__dirname, 'render-results', 'test-pane-template.svg'), 'utf8');

    describe('rendering images test-pane', function () {
      it('works', function () {
        try {
          mkdir(join(__dirname, 'render-results', 'browsers'));
        } catch (ex) {}//already exists
        for (var i = 0; i < browsers.length; i++) {
          write(join(__dirname, 'render-results', 'browsers', browsers[i] + '.svg'), logos[browsers[i]]());
        }
        write(join(__dirname, 'render-results', 'test-pane-images.svg'), template.replace('{{content}}',
          browsers.map(function (b, i) {
            return '<image x="' + ((i % 3) * 200) + '" y="' + (Math.floor(i / 3) * 200) + '" width="200" height="200" xlink:href="browsers/' + b + '.svg" />';
          }).join('\n')));
        open(join(__dirname, 'render-results', 'test-pane-images.svg'));
      });
    });
    describe('rendering inline svg test-pane', function () {
      it('works', function () {
        write(join(__dirname, 'render-results', 'test-pane-inline.svg'), template.replace('{{content}}',
          browsers.map(function (b, i) {
            return logos[b]({
              x: (i % 3) * 200, 
              y: Math.floor(i / 3) * 200,
              width: 200,
              height: 200});
          }).join('\n')));
        open(join(__dirname, 'render-results', 'test-pane-inline.svg'));
      });
    });
  }());
}