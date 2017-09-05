import common from '../../js/common';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';

import animate from '../../js/animate';

$(document).ready(function () {
	$("body").addClass("index ink-transition");

	// $(".sticky").sticky({
	// 	topSpacing: 0,
	// 	widthFromWrapper: false
	// });

	// инициализация tooltipster
	if (window.matchMedia("(min-width: 992px)").matches) {
		$(".header__modal a").tooltipster({
			plugins: ['follower'],
			theme: 'tooltipster-shadow'
		});
		$(".header__logo a").tooltipster({
			theme: 'tooltipster-light'
		});
	}

	// Инициализация маски в input
	$(".mask").mask("+38(999) 999-99-99");
});

$(window).resize(function () {

});

$(window).scroll(function () {

});
setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);
