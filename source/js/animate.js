// подключение animate.js
require("../libs/libs").greenSock();
require("../libs/libs").DrawSVG();

class Animation {
	constructor() {
		this.tl1 = new TimelineMax();
		this.logo = new TimelineMax();
		this.logo = new TimelineMax();
		this.tl2 = new TimelineMax();
		this.tl3 = new TimelineMax();
		this.tl4 = new TimelineMax();
		this.tl5 = new TimelineMax();
		this.tl6 = new TimelineMax();
		this.tl7 = new TimelineMax();


		this.tl1.pause();
		this.logo.pause();
		this.tl2.pause();
		this.tl3.pause();
		this.tl4.pause();
		this.tl5.pause();
		this.tl6.pause();
		this.tl6.pause();

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
		this.tl3.from('.how-it-works .how-it-works__title h2', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.5, '+=0.5')
			.staggerFrom('.how-it-works__item', 0.8, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, '-=0.2')
			.staggerFrom('.how-it-works__item img', 0.8, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, '-=1.8');
		this.tl4.from('.material-requirements .material-requirements__title h2', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.5, '+=0.5')
			.staggerFrom('.material-requirements__item', 0.8, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, '-=0.2')
			.staggerFrom('.material-requirements__item img', 0.8, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, '-=1.8');
		this.tl5.from('.post-your-publication .post-your-publication__title h2', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.5, '+=0.5')
			.from('.post-your-publication__carousel', 0.5, {
			scaleX: 0,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.5, '+=0.3');
		this.tl6.from('.get-more .get-more__title h2', 0.5, {
			y: -50,
			opacity: 0,
			ease: Power4.easeOut
		}, 0.5, '+=0.5')
			.staggerFrom('.get-more__title p', 0.8, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.3, '-=0.2')
			.staggerFrom('.get-more .get-more__title .anim', 0.5, {
				y: -50,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.5);
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
		if (this.activeSection('how-it-works', 500, 200)) {
			this.tl3.resume();

		}
		if (this.activeSection('material-requirements', 500, 200)) {
			this.tl4.resume();

		}
		if (this.activeSection('post-your-publication', 500, 200)) {
			this.tl5.resume();

		}
		if (this.activeSection('get-more', 800, 0)) {
			this.tl6.resume();

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
