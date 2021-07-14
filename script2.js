(function (window) {
var byespeaker={};
byespeaker.name ="abdu";
var speakworld="Good bye ";
byespeaker.speak = function  () {
	console.log( speakworld + byespeaker.name);
}
window.byespeaker = byespeaker;
})(window);