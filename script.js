$(document).ready(function() 
{ 
	var sFilename = getRandomImageFilename();
	loadImage(sFilename);
	
	$("#control_panel span").click(function()
	{
		var sClickedNote = $(this).text();
		var sCurrentNote = getCurrentNote();
		var bNotesMatch = doNotesMatch(sClickedNote,sCurrentNote);

		updateStatusBar(bNotesMatch);

		
	});
	
	$('body').bind('keydown', function(e) 
	{
		// a=65 and g=71
		var nKeyPressed = e.keyCode;
	  if(nKeyPressed >= 65 && nKeyPressed <= 71)
	  {
			var sTypedNote = keyCodeToLetter(nKeyPressed);
			var sCurrentNote = getCurrentNote();
			var bNotesMatch = doNotesMatch(sTypedNote,sCurrentNote);
			updateStatusBar(bNotesMatch);

	  }
	});
	  
	

	
	

});

function getCurrentNote()
{
	var sCurrentNote = $("#flashcard img").attr("src");
	sCurrentNote = sCurrentNote.substring(0, 1);
	sCurrentNote = sCurrentNote.toUpperCase();
	return sCurrentNote;
	
}


function updateStatusBar(bNotesMatch)
{
		// user gets the correct note
		if(bNotesMatch)
		{
			fadeOutImage();
			oStatusDiv = $("#status");
			oStatusDiv.addClass("correct");
			oStatusDiv.removeClass("incorrect");

			$("#status").text("Correct");
		}
		else
		{
			oStatusDiv = $("#status");
			oStatusDiv.addClass("incorrect");
			oStatusDiv.removeClass("correct");
			$("#status").text("Nope");

		}
}

function keyCodeToLetter(nKeyCode)
{
	var aKeyCodes = new Array();
	aKeyCodes[65] = 'A';
	aKeyCodes[66] = 'B';
	aKeyCodes[67] = 'C';
	aKeyCodes[68] = 'D';
	aKeyCodes[69] = 'E';
	aKeyCodes[70] = 'F';
	aKeyCodes[71] = 'G';
	return aKeyCodes[nKeyCode];
}

function fadeOutImage()
{
	$("#flashcard img").fadeOut("fast", function () {
		sFilename = getRandomImageFilename();
		loadImage(sFilename);
	});
	$("#flashcard img").fadeIn("fast");
				
}

// BKM20120709
// aNotes:	array holding filenames of images used on page
// sNote:	string that holds the name of the image file (c1.png)
function getRandomImageFilename()
{
	// hold all filenames in an array
	var aNotes = new Array("a1","a2","b1","b2","c1","c2","c3","d1","d2","d3","e1","e2","e3","f1","f2","g1","g2");
	
	var sNote = aNotes[Math.floor(Math.random()*aNotes.length)];
	sNote += ".png";
	return sNote;
}

function loadImage(sImageFilename)
{
	$("#flashcard img").attr("src", sImageFilename);
}

function doNotesMatch(sNote1, sNote2)
{
	if(sNote1 == sNote2)
	{
		return true;
	}
	else
	{
		return false;
	}
}