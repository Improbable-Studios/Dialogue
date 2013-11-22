#pragma strict

var talkGUI:GUIText;
var lines:String[];

private var envSet:int;			// 0 = images not loaded, 1 = images loaded

private var currLine:int;
private var isScrolling:int;	// 0 = not scrolling, 1 = scrolling
private var centerWidth:int;	// Width/2 (X)
private var centerHeight:int;	// Height/2 (Y)
private var textLen:int;		// Text length

private var currExpression:int;
private var currCharacter:int;

/*
 * Initialise elements
 */
function Start () {
	envSet = 0;

	currLine = 0;
	isScrolling = 0;
	
	currExpression = 0;
	currCharacter = 0;
}

//TODO: Implement graphical mapping
function setupEnvironment() {
	envSet = 1;
}

/*
 * Does nothing for a specific amount of time
 */
function wait(time:int) {
	for(var i = 0; i < time; i++) {
	}
}

/*
 * Runs appropriately ASSUMING all textures are applied to the screen FIRST
 *TODO:
 *	-Implement sound plays per print
 */
function speak(Character_Name, Expression, text:String) {
	if(envSet) {
		isScrolling = 1;
		
		//textLen = text.length - 1;
		var pos = Screen.width - (text.length - 1) / 2;
		
		// Iterates and prints the text letter-by-letter with a delay
		for(var i = 0; i < pos; i++) {
			wait(100);
			talkGUI.text = text.Substring(0, i);
			GUI.Label(Rect(0,0,Screen.width,Screen.height), talkGUI.text);
			//play sound "SFX_UI-GameText.wav"
		}	
	}
}

/*
function Update () {
	if(Input.GetButtonDown("talk") && currLine < lines.Length-1){
			talkGUI.text = lines[currLine]; 
			currLine++;
	}
}
*/