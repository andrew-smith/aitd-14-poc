
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

  var isMouseDown = false;
  var lastCoords = {x: -1, y:-1};

  stage.on('mousedown touchstart dragstart', function(event) {
    console.debug(event.type);
    isMouseDown = true;
    lastCoords.x = event.evt.layerX;
    lastCoords.y = event.evt.layerY;

  });
  stage.on('mouseup touchend mouseenter mouseleave dragend', function(event) {
    console.debug(event.type);
    isMouseDown = false;
    lastCoords = {x: -1, y:-1};
  });


  stage.on('mousemove touchmove dragmove', function(event) {
    console.debug(event.type);


    if(isMouseDown && lastCoords.x !== -1){

      var line = new Kinetic.Line({
        stroke: 'red',
        x:0,
        y:0,
        points: [event.evt.layerX,event.evt.layerY,lastCoords.x, lastCoords.y]

      })
      drawingLayer.add(line);


      var circle = new Kinetic.Circle({
        radius: 15,
        fill: 'red',
        x: event.evt.layerX,
        y: event.evt.layerY
      });
      //drawingLayer.add(circle);
      drawingLayer.draw();
    }

    lastCoords.x = event.evt.layerX;
    lastCoords.y = event.evt.layerY;
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