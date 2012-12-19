var fs = require('fs');
var path = require('path');

var cache = {};
function load(name) {
  return cache[name] || (cache[name] = fs.readFileSync(path.join(__dirname, 'images', name + '.svg'), 'utf8'));
}
function render(text, options) {
  if (options && typeof options == 'object') {
    var width = options.width || 256;
    var height = options.height || 256;
    var x = options.x || 0;
    var y = options.y || 0;
    return text.replace(/^\<svg /, '<svg x="' + x + '" y="' + y + '" ')
      .replace(/^(\<svg [^\>]*width=\")[^\"]+(\")/, '$1' + width + '"')
      .replace(/^(\<svg [^\>]*height=\")[^\"]+(\")/, '$1' + height + '"');
  } else {
    return text;
  }
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