(function (window)

{
var speakworld= "hello ";	
var hellospeaker={};


hellospeaker.speak = function () {

	var names =["Yaakov","Paul","Frank","Larry","Paula","Laura"];
for (var name in names){
console.log( speakworld + "" + names[name]);
}
}

window.hellospeaker = hellospeaker;
})(window);

