"use strict";

// lat/lon for NW, NE, SE, SW
// var lls = [
//   [ 35.143264833549786, 135.5543911363731 ],
//   [ 35.143143282957006, 135.92714048710673 ],
//   [ 34.80587324309453, 135.92565928851695 ],
//   [ 34.80641362631187, 135.5539118080542 ]
// ];
// var size = [ 1460, 1560 ];

var lls = [
  [ 35.116381219322605, 135.48437922396454 ],
  [ 35.11638121932261, 136.01299389056422 ],
  [ 34.77773744853221, 136.01299389056422 ],
  [ 34.77773744853221, 135.48437922396454 ]
];
var size = [ 2434, 1560 ];

var proj4 = require('proj4');

var deg = proj4('EPSG:4326');
var web = proj4('GOOGLE');

var f = proj4(deg, web);

var meters = lls.map(([ lat, lon ]) => f.forward([ lon, lat ]));

var vplus = (a, b) => a.map((aa, i) => aa + b[i]);
var vminus = (a, b) => a.map((aa, i) => aa - b[i]);
var vdiv = (a, b) => a.map((aa, i) => aa / b[i]);

// var [a, e] = vdiv(vminus(meters[2], meters[0]), vminus(size, [1, 1]));
// var [a, e] = vdiv(vminus(meters[2], meters[0]), vminus(size, [ -1, -1 ]));
var [a, e] = vdiv(vminus(meters[2], meters[0]), size);
// var [a, e] = vdiv(vminus(meters[2], meters[0]), );

var b = d = 0;

var [c, f] = meters[0];

var worldfile = [ a, d, b, e, c, f ];

console.log(worldfile.map(n => n.toFixed(12)).join('\n'));