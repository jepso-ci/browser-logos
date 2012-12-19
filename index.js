var fs = require('fs');
var path = require('path');

var cache = {};
function load(name) {
  return cache[name] || (cache[name] = fs.readFileSync(path.join(__dirname, 'images', name + '.svg'), 'utf8'));
}
function render(text, options) {
  options = options || {};
  var viewbox = /^\<svg [^\>]*viewBox\=\"([\-\d\.]+)[px ]+([\-\d\.]+)[px ]+([\d\.]+)[px ]+([\d\.]+)[px ]*\"/.exec(text);
  if (!viewbox) throw new Error('SVG must have viewBox and nothing can precede <svg');
  var width = options.width || viewbox[3];
  var height = options.height || viewbox[4];
  var x = options.x || 0;
  var y = options.y || 0;
  return text.replace(/^\<svg /, '<svg x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" ');
}

module.exports = {
  ie: function (options) {
    return render(load('ie'), options);
  },
  chrome: function chrome(options) {
    return render(load('chrome'), options);
  },
  firefox: function firefox(options) {
    return render(load('firefox'), options);
  },
  opera: function opera(options) {
    return render(load('opera'), options);
  },
  android: function android(options) {
    return render(load('android'), options);
  },
  apple: function apple(options) {
    return render(load('apple'), options);
  }
};