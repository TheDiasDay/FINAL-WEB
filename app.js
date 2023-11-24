// ...

// Get the audio element
const audioElement = document.getElementById('quiz-audio');

// Get the play sound button
const playAudioButton = document.getElementById('play-audio-btn');

// Add a click event to play the sound when the button is clicked
playAudioButton.addEventListener('click', () => {
  audioElement.play();
});

// ...
