// Author: Gawain Bracy II
// Date: 03/15/12
// SDI 1202
// Assignment: Project 3

var artistName       = "Ciara",
 	producerName	 = "G2"
 	instruments      = true,
 	allTrackTypes    = ["Pop","Urban"],
 	trackElements    = ["Drum Driven", "Melody Driven"],
 	willYouMakeUrban = false,
 	urban            = "808's",
 	pop              = "beautiful melodies"
;

var say = function(message) {
	console.log(message);
};

if (instruments === true) {
	say("Let's make music " + artistName + "!");
} else {
	say("Something is wrong.");
	}; // Procedure

var decisionByGenre = function(genre) {
	var decision, 
		getdecision;
	
	if (willYouMakeUrban === true) {
		decision = "urban";
	} else if (willYouMakeUrban === false) {
		decision = "pop";
	};
	
	getdecision = "Let's make new a new " + decision + " track first, " 
					+ artistName + ".";
	return getdecision;
	 
};	// Boolean: decisionByGenre

var fullDecision = decisionByGenre("Urban")
say(fullDecision);

var trackTotal = function(need) {
	var tracksCreated = 6, 
		like;
	while (tracksCreated > 2) {
		say("Which two of these " + tracksCreated + 
			" tracks do you like?"), (tracksCreated - 1);
		return 0;
	} // while-loop

	var like = Math.floor(need / tracksCreated);
	return like;
}; // Number: trackTotal
	
var getLike = trackTotal(0);
	if (getLike < 1) {
		var need = 2
		say("Let's make " + need + " more.");
	} else{
	say("Ok, We've found our " + getLike + " tracks!");
}; 

var wholeHoursSpent = [ 4, 2, 2, 1, 3 ];

var makeOneTrack = function(trackType, hoursThisTrack) {
	say("We've started a new " + trackType + " track from scratch, " 
		+ "it will take " + hoursThisTrack + " hours to complete." );
	for (var hours = 0, w = wholeHoursSpent.length; hours <= w; hours += 1) {
		var hoursRemain = hoursThisTrack - hours;
		if (hoursRemain < 0) {
			say("The " + trackType + " track is ready for Ciara!");
			return;
		}; //conditional
			say(hours + " hours down " + hoursRemain + " hours left before the track" + 
				" is ready to be recorded to!");
	}; // for-loop
}; // Array: makeOneTrack

var makeAllTracks = function(tracktypes, hoursPerTrack) {
	for (var trackNumber = 0, t = tracktypes.length; trackNumber < t; trackNumber++) {
		var trackType = allTrackTypes[trackNumber],
			hoursThisTrack = hoursPerTrack[trackNumber];
			makeOneTrack(trackType, hoursThisTrack);
	}; // trackNumber
}; // makeAllTracks

makeAllTracks(allTrackTypes, wholeHoursSpent);

var json = {
	"tracks" : [
		{
			"trackNo" : "001",
			"name" : "Who's Gonna Love Me",
			"genre" : "pop",
			"elements" : "melody driven",
			"hours" : 4,
			key : "A-minor",
			"bpm" : 90
		},
		{
			"trackNo" : "002",
			"name" : "Wild One",
			"genre" : "urban",
			"elements" : "drum driven",
			"hours" : 2,
			key : "G-sharp",
			"bpm" : 72
		}
	]
};

var handleData = function (json) {
	for (var i = 0, j = json.tracks.length; i < j; i++) {
		var track = json.tracks[i],
					best;
		if (json.tracks[i] != null);
		say("We've spent a total of " + (track.hours + 8) + " hours making this " 
			+ track.genre + " song.");

	}
		for(var i = 0, j = json.tracks.length; i < j; i += 1) {
			var track = json.tracks[i];
			say("Track no.: " + track.trackNo + ", Name: " + track.name 
					+ ", Genre: " + track.genre + ", Key: " + track.key);
		}
		var noteChange = "key";

		var best = json.tracks[i];
		return best;

		
tracks.noteChange = "C-sharp";

console.log( tracks[noteChange]);


}; // Object: handleData

handleData(json);

var congrats = function (artistSays) {
	say("The world will love these " + artistSays + " records!");
	return;
}; // String Function: Congrats

congrats(producerName + " and " + artistName);

say("Thank you!"); // Final Output


