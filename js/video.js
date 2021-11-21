var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// document.querySelector("#volume").innerHTML = (100 * video.volume) / video.volume+"%";
	document.querySelector("#volume").innerHTML = 100 * video.volume +"%";
});





document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Slow Down");
	// console.log("Old video speed is " + video.playbackRate);
	video.playbackRate -= video.playbackRate*0.05;
	console.log("New speed is " + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Speed Up");
	// console.log("Old video speed is " + video.playbackRate);
	video.playbackRate += video.playbackRate*0.05;
	console.log("New speed is " + video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location");
	console.log(video.currentTime);

	console.log("New location");
	video.currentTime = video.currentTime + 15;
	if(video.currentTime<67.403333){
		console.log(video.currentTime);

	}
	else{
		console.log("Going back to beginning");
		video.currentTime = 0;
		console.log(video.currentTime);
		video.play();
		
	}
	
	
});	

// document.querySelector("#skip").addEventListener('ended', function(){
// 	// Reset the video to 0
// 	console.log("Going back to beginning");
// 	video.currentTime = 0;
// 	// And play again
// 	video.play();
//   });





    



document.querySelector("#mute").addEventListener("click", function() {
	
	if(this.textContent == "Mute"){
        this.textContent = "Unmute";
    }
	else{
        this.textContent = "Mute";
    }

	

	video.muted = !video.muted;
	
	
});	



// volumn
// document.querySelector("#slider").addEventListener("change", function()
// {
// 	// console.log('Before: ' + video.volume);
// 	video.volume = document.getElementById('slider').value / 100;
// 	console.log(video.volume);

// 	document.querySelector("#volume").innerHTML = 100 * video.volume +"%";
// })

// volume v
document.querySelector("#slider").addEventListener("change", function()
{
	console.log(video.volume);
	video.volume = document.querySelector('input').value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
})

// old school
document.getElementById("vintage").addEventListener("click", function()
{
	var video = document.getElementById("player1");
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function()
{
	var video = document.getElementById("player1");
	video.classList.remove("oldSchool");
});