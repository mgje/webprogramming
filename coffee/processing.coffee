#
# Initialize Ace editor and UI elements
#
init_f = () ->
	@editor = ace.edit "editor"
	@editor.getSession().setMode "ace/mode/processing"
	# @editor.session = @editor.getSession()
	@editor.setTheme "ace/theme/processing"
    #@editor.renderer.setShowGutter false 
	@editor.setShowFoldWidgets false
	@editor.setHighlightActiveLine false
	@editor.renderer.setShowPrintMargin false
	#@editor.setValue "void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  if (mousePressed) {\n    background(0);\n  }\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}",-1
	@editor.setValue Processing_Code ? "rect(50,50,100,100);",-1
	@runCode()
	@setupUI()

	# Resize callback
	$(window).resize ()=>
		@refreshUI();
      
    # Color Picker
	$('#colorPicker').spectrum
		showInput: false
		showInitial: true
		className: "colorPicker"
		chooseText: "Select"
		cancelText: "Cancel"
		show: ()=>
			#console.log("SHOWING");
			return
		hide: ()=>
			@editor.focus()
		change: ()=>
			color = $("#colorPicker").spectrum("get").toRgb()
			range = $("#colorPicker").spectrum.range
			token = $("#colorPicker").spectrum.token
			@editor.session.replace range, token.value + "(" + color.r + "," + color.g + "," + color.b + ");"
			false
	@refreshUI();
	false
#
# Initialize UI elements
#
setupUI_f = () ->
	$("#runButton").click( ()=>
		@runCode()
		@editor.focus()
		false
	).tooltip
		container: 'body'

	# Canvas UI 

	$("#toggleRulers").click( ()->
		$("#horizontalRuler").toggle
			effect: 'slide'
			direction: 'down'
		$("#verticalRuler").toggle
			effect: 'slide'
			direction: 'right'
    ).tooltip
		placement: 'bottom'

	# Color Picker 

	$(@editor).on "click", ()->
		$("#colorPicker").spectrum "hide"
		position = @getCursorPosition()
		token = @session.getTokenAt position.row, position.column
		if (token && /\bcolor\b/.test(token.type))
			line = @session.getLine position.row
			range = new Range position.row, token.start, position.row, line.length
			pixelPosition = @renderer.$cursorLayer.getPixelPosition position, true
			currentValue = /\w*\s?\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/.exec line
			if (currentValue) 
				$("#colorPicker").spectrum 'set', 'rgb(' + currentValue[1] + ', ' + currentValue[2] + ', ' + currentValue[3] + ')'
			else
				$("#colorPicker").spectrum 'set', 'black'

			$("#colorPicker").spectrum.token = token;
			$("#colorPicker").spectrum.range = range;

			$("#colorPicker").css
				top: pixelPosition.top
				left: pixelPosition.left

			$("#colorPicker").spectrum "show"
			false
	false

refreshUI_f = ()->
	viewportWidth = $("#interface").width()
	viewportHeight = $("#interface").height() - $("#header").height()
	false
	# $("#header").width "95%"
	# $("#editorContainer").css
	# 	width: 300
	# 	height: viewportHeight - 500 - 32
	# 	top:  20 + $("#header").height()
	# 	left: 8

	# $("#canvasContainer")
 #    	.height(viewportHeight)
 #    	.width(viewportWidth)
 #    	.css
 #    		top: 0 + $("#header").height()
 #    		left: 0

#
# Reset the Processing.js instance
#
resetInstance_f = () ->
	if @processingInstance
		@processingInstance.exit();
		@processingInstance.background "#cfcfcf"
		@processingInstance = null
	false
 #
 # Run current code in Ace
 #
runCode_f = () ->
	@resetInstance()
	try
		processingSource = this.editor.getValue()
		processingCanvas = document.getElementById "editorCanvas"
		if !(/size\(\s*\d+\s*,\s*\d+\s*\)/.test(processingSource))
			processingSource = "size(500,400);\n\n" + processingSource

		#this.processingInstance = new Processing(processingCanvas, processingSource);
		@processingInstance = new Processing "editorCanvas", processingSource
		if typeof this.processingInstance.draw == 'function' 
			@processingInstance.draw()   

		$("#editorCanvasBox").css
			width: @processingInstance.width
			height: @processingInstance.height
			marginTop: "0px"
			marginLeft: "0px"
		$("#horizontalRuler").css
			width: @processingInstance.width
			top: (-1)*@processingInstance.height-25
		$("#verticalRuler").css
			height: @processingInstance.height
			top: (-1)*@processingInstance.height-25
	catch error
		alert error
	false

processingEditor = 
	editor: null
	processingInstance: null
	init: init_f
	setupUI: setupUI_f
	refreshUI: refreshUI_f
	resetInstance: resetInstance_f
	runCode: runCode_f
    
processingEditor.init()