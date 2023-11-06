var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//initialize
	video.autoplay = false;
	video.pause();
	video.loop = fasle;

});

//play button + volume
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
});
//pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.slow();
	
});
