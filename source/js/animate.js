// подключение animate.js
require("../libs/libs").greenSock();
require("../libs/libs").DrawSVG();

class Animation {
	constructor() {
		this.tl1 = new TimelineMax();
		this.logo = new TimelineMax();
		this.logo = new TimelineMax();
		this.tl2 = new TimelineMax();


		this.tl1.pause();
		this.logo.pause();
		this.tl2.pause();
	}

	description() {

		this.tl1.staggerFrom('.top-section__title .anim', 0.8, {
			y: -30,
			autoAlpha: 0,
			ease: Power1.easeOut
		}, 0.6, '+=1')
			.add('top-section', '-=0.6')
			.staggerFrom('.header__nav ul li', 0.6, {
				y: -30,
				autoAlpha: 0,
				ease: Power1.easeOut
			}, 0.3 ,'top-section');

		this.logo.staggerFrom('.logo-letter', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.2, '+=0.5')
			.from('#path72231313213', 0.5, {
				skewX: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, 1, '0.5')
			.from('#path51313213', 0.5, {
				skewX: 100,
				opacity: 0,
				ease: Power4.easeOut
			}, 1.2, '0.5')
			.from('#logo-line', 2.3, {
				drawSVG: '50% 50%',
				ease: Power4.easeOut
			}, 1.2, '0.5');
		this.tl2.from('.our-advantages .our-advantages__title h2', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.5, '+=0.5')
			.from('.our-advantages .our-advantages__title p', 0.5, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.6, '0.2')
			.staggerFrom('.our-advantages .our-advantages__item', 0.8, {
				y: -50,
				opacity: 0,
				ease: Power1.easeOut
			}, 0.4, '-=0.2');

	}

	activeSection(section, startTop = 0, startBotton = 0) {
		section = '.' + section;
		if ($(section).offset() !== undefined) {
			let topPosition = $(section).offset().top - startTop,
				bottomPosition = $(section).offset().top + $(section).height() - startBotton;
			if (($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)) {
				return true;
			}
		}
	}

	play() {
		if (this.activeSection('header')) {
			this.tl1.resume();
			this.logo.resume();

		}
		if (this.activeSection('our-advantages', 500, 200)) {
			this.tl2.resume();

		}
	}
}

var anim = new Animation;

$(window).scroll(function() {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {

	if (document.documentElement.clientWidth >= 1200) {
		anim.description();
		anim.play();
	}

});
