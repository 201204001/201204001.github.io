(function (window)

{
var hellospeaker={};
hellospeaker.name ="hiba";
var speakworld= "hello ";
hellospeaker. speak = function  () {
	console.log( speakworld + hellospeaker.name);
}
window.hellospeaker = hellospeaker;
})(window);