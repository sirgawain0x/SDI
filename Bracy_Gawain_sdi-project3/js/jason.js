// Author: Gawain Bracy II
// Data File

var json = {
	"tracks" : {
		"001" : {
			"name" : "Who's Gonna Love Me",
			"genre" :  "pop",
			"elements" : "melody driven",
			"hours" : 4
		},
		"002" : {
			"name" : "Wild One",
			"genre" : "urban",
			"elements" : "drum driven",
			"hours" : 2
		}
	}
};
/*
for (var key in json.tracks) {
	var track = json.friends[key];
};
*/
var json2 = {
	"tracks" : [
		{
			"trackNo" : "001",
			"name" : "Who's Gonna Love Me",
			"genre" : "pop",
			"elements" : "melody driven",
			"hours" : 4
		},
		{
			"trackNo" : "002",
			"name" : "Wild One",
			"genre" : "urban",
			"elements" : "drum driven",
			"hours" : 2
		}
	]
};