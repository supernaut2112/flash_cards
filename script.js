$(document).ready(function() 
{ 
	var sFilename = getRandomImageFilename();
	loadImage(sFilename);
	
	$("#control_panel span").click(function()
	{
		var sClickedNote = $(this).text();
		var sCurrentNote = $("#flashcard img").attr("src");
		sCurrentNote = sCurrentNote.substring(0, 1);
		sCurrentNote = sCurrentNote.toUpperCase();
		var bNotesMatch = doNotesMatch(sClickedNote,sCurrentNote);

		// user gets the correct note
		if(bNotesMatch)
		{
			sFilename = getRandomImageFilename();
			loadImage(sFilename);
			oStatusDiv = $("#status");
			oStatusDiv.css("color","green");
			$("#status").text("Correct");
		}
		else
		{
			oStatusDiv = $("#status");
			oStatusDiv.css("color","red");
			$("#status").text("Nope");

		}
		
	});
	
	

});

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