Processing_Code="void setup(){\n  stroke(255);\n  strokeWeight(4);\n  background(0,0,0);\n  size(500,445);\n}\nvoid draw(){\n  var dx = random(-100,100);\n  var dy = random(-100,100);\n  stroke(random(220), random(155), random(100));\n  line(mouseX,mouseY,mouseX+dx,mouseY+dy);\n  fill (0, 0, 0, 10);\n  noStroke();\n  rect (0, 0, width, height);\n}";
$("a[data-index=5]").addClass("active");
