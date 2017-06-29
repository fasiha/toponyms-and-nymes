
// Adapted from Gerry Creighton’s 2017/2/2 post:
// https://groups.google.com/d/msg/cesium-dev/qZ8oLz3hFYU/zz4sT7YRCAAJ

var cam = viewer.scene.camera;
var ellipsoid = Cesium.Ellipsoid.WGS84;
var w = viewer.canvas.clientWidth;
var h = viewer.canvas.clientHeight;

var posNW = cam.pickEllipsoid(new Cesium.Cartesian2(1, 1), ellipsoid);
var posSE = cam.pickEllipsoid(new Cesium.Cartesian2(w, h), ellipsoid);
var posSW = cam.pickEllipsoid(new Cesium.Cartesian2(1, h), ellipsoid);
var posNE = cam.pickEllipsoid(new Cesium.Cartesian2(w, 1), ellipsoid);

var posToLL = (pos) => {
  var c = ellipsoid.cartesianToCartographic(pos);
  return [
    Cesium.Math.toDegrees(c.latitude), Cesium.Math.toDegrees(c.longitude)
  ];
};

console.log(JSON.stringify([posNW, posNE, posSE, posSW].map(posToLL)))
