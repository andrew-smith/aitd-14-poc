
//Avoid undefines
console.debug = console.debug || function() {};
console.log = console.log || function() {};
console.warn = console.warn || function() {};
console.error = console.error || function() {};


//main app

var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

$(function() {
  console.debug("app started");


  var stage = new Kinetic.Stage({
    container: 'user-canvas',
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT
  });



  var drawingLayer = new Kinetic.Layer();


  stage.on('mousedown touchstart', function(event) {
    console.debug("mousedown / touchstart");
    var circle = new Kinetic.Circle({
      radius: 15,
      fill: 'red',
      x: event.evt.layerX,
      y: event.evt.layerY
    });
    drawingLayer.add(circle);
    drawingLayer.draw();
  });


  var backgroundLayer = new Kinetic.Layer();
  var backgroundImg = new Kinetic.Rect({
    x: 0,
    y: 0,
    fill: 'blue',
    width: CANVAS_WIDTH,
    height : CANVAS_HEIGHT
  });

  backgroundLayer.add(backgroundImg);
  stage.add(backgroundLayer);




  stage.add(drawingLayer);


});