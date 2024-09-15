// console.log("Hii RAHUL RAJPUT WELCOME TO SPOTIFY");
// let songIndex=0;
// let audioElement = new Audio('Faraar.mp3');
// let masterPlay =document.getElementById("masterPlay");
// let myProgressBar=document.getElementById("myProgressBar");
// let gif=document.getElementById("gif");

// let song =[{songName:"DARUBADNAAM",filePath:"Faraar.mp3",coverPath:"cover1.jpg"},]

// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         gif.style.opacity=1;
//     }
//      else{ 
//         audioElement.pause();
//         gif.style.opacity=0;
//      }

// audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate');
// progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
// myProgressBar.value=progress;
// })



// })
// Initialize audio element and other necessary elements
let audioElement = new Audio('Faraar.mp3'); // Ensure the path to the song is correct
let masterPlay = document.getElementById('masterPlay'); // Play button
let myProgressBar = document.getElementById('myProgressBar'); // Progress bar
let gif = document.getElementById('gif'); // Gif image for when music plays

// Play/Pause event listener
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // Play the song
        audioElement.play();
        gif.style.opacity = 1; // Show the gif when playing
        masterPlay.innerHTML = 'pause_circle'; // Change the icon to pause
    } else {
        // Pause the song
        audioElement.pause();
        gif.style.opacity = 0; // Hide the gif when paused
        masterPlay.innerHTML = 'play_circle'; // Change the icon back to play
    }
});

// Update progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    // Update progress
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Sync progress bar changes with the audio playback
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
