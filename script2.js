(function (window) {
var byespeaker={};

var speakworld="Good bye ";
byespeaker.speak = function  () {
var names =["John","Jen","Jason","Jim"];
for (var name in names){


	console.log( speakworld + "" + names[name]);
}
}
window.byespeaker = byespeaker;
})(window);