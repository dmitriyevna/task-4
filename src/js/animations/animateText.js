'use strict';

import { TimelineLite, EasePack } from 'gsap';
import randomNumber from './../utils/randomNumber';

const tl = new TimelineLite;

const textAnimate = (elementsArr = 0) => {

	tl.kill();

	let arrX =[];
	let arrY =[];
	let arrScale =[];
	let arrRotation =[];

	for (let i = 0, iter = elementsArr.length; i <= iter; i++) {
		
		arrX.push(randomNumber.random(-200,200));
		arrY.push(randomNumber.random(-100,100));
		arrScale.push(randomNumber.random(1,5));
		arrRotation.push(randomNumber.random(-360,360) + 'deg');

	}

	tl.staggerTo(elementsArr, 0.3, { cycle: { x: arrX, y: arrY, scale: arrScale, rotation: arrRotation, stagger: [ 0.1, 0.04, 0.09 ]  }, ease: Sine.easeOut }, 0);
}

const textNormalize = (elementsArr) => {

	tl.kill();
	tl.staggerTo(elementsArr, 0.2, { cycle: { x: [0], y: [0], scale: [1], rotation: [0]  }, ease: Power3.easeNone }, 0);
}

module.exports = {
	textAnimate,
	textNormalize
};



