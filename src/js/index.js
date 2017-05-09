'use strict';

import animateText from './animations/animateText';

window.onload = function(){

	const songLetter = document.querySelectorAll('.song__letter');
	const song = document.querySelector('.song');

	song.onmouseleave = () => animateText.textAnimate(songLetter);
	song.onmouseenter = () => animateText.textNormalize(songLetter);

}
