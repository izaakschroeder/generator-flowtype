var NEWLINE = /\r\n|[\n\v\f\r\x85\u2028\u2029]/;
var SECTION = /\[([^\]]+)\]/;
var WHITESPACE = /^\s*$/;

function uniq(a) {
  return a.reduce(function(p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
};

function parse(input) {
  var sections = { };
  var section = '_';
  var lines = input.split(NEWLINE);

  lines.forEach(function(line) {
    var parts = SECTION.exec(line);
    if (parts) {
      section = parts[1];
    } else if (!WHITESPACE.exec(line)) {
      if (!(section in sections)) {
        sections[section] = [];
      }
      sections[section].push(line);
    }
  });

  return sections;
}

module.exports = function merge(dst, src) {
  var result = [ ];

  dst = parse(dst);
  src = parse(src);

  Object.keys(src).forEach(function(section) {
    if (!(section in dst)) {
      dst[section] = src[section];
    } else {
      dst[section].push.apply(dst[section], src[section]);
    }
  });

  Object.keys(dst).forEach(function(section) {
    dst[section] = uniq(dst[section]);
    result.push('[' + section + ']');
    result.push.apply(result, dst[section]);
    result.push('');
  });

  return result.join('\n');
}
