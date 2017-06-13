"use strict";

function rubyfy(s) {
  var reg = /\[([^\]]+)\]\(([^\)]+)\)/g;
  var rubied =
      s.replace(reg, (_, base, ruby) => `<ruby>${base}<rt>${ruby}</rt></ruby>`);
  var baseOnly = s.replace(reg, (_, base) => `${base}`);
  return `${baseOnly}: ${rubied}`;
}

function rubyfyFileContents(all) {
  return all.replace(/\n- Ruby: (.*?)\n/g, (_, s) => `\n- ${rubyfy(s)}\n`);
}

module.exports = {
  rubyfy,
  rubyfyFileContents
};

if (require.main === module) {
  var fs = require('fs');
  var all = fs.readFileSync('README.md', 'utf8');
  console.log(rubyfyFileContents(all));
}