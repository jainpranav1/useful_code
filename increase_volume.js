// increase volume of youtube videos

var videoElement = document.querySelector("video");
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(videoElement);
var gainNode = audioCtx.createGain();
gainNode.gain.value = 5; // increase volume by 5
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
