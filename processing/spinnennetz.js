Processing_Code="size(550,500);\nbackground(182, 222, 217);\nvar geschichte = [];\nvar staerke=160.0;\nstroke(0,0,0,10);\nsmooth();\n\n// wenn die Maus gedrückt ...\nvoid mouseDragged()  {\n    var i,p,v,l,chance,dist;\n    p = [mouseX,mouseY];\n    if (!geschichte){\n       geschichte = [];\n    }\n    geschichte.push(p);\n    l = geschichte.length;\n    for (i = 0; i<l; i+=1 ) {\n        v=geschichte[i];\n        dist = sqrt((p[0]-v[0])*(p[0]-v[0])+\n         (p[1]-v[1])*(p[1]-v[1]));\n        chance = (l-i)/l+dist/staerke;\n        if(chance < random(0.4)){\n          line(v[0],v[1],p[0],p[1]);\n        }\n    }\n};\n\nvoid keyPressed(){\n    background(182, 222, 217);\n};";