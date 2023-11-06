var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//initialize
	video.autoplay = false;
	video.pause();
	video.loop = false;

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
	video.playbackRate *= .9;
	console.log('Playback speed is', video.playbackRate);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.1;
	console.log('Playback speed is', video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	
	if (video.currentTime > 67) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 10;
	}
	console.log('The current time is', video.currentTime);
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
	}
	else {
		video.muted = true;
		console.log('Muted')
	}
	console.log('Mute status is', video.muted);
	
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").textContent = this.value + "%";
	
});