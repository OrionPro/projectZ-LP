jQuery(document).ready(function ($) {
	function n() {
		var n = $(window).width(), i = $(window).height(), e, t;
		n / i > a ? (t = n, e = t / a) : (e = 1.2 * i, t = e * a), o.css({
			width: t * s + "px",
			height: e + "px"
		}), d = !1
	}
	var i = $(".open-popup-link"), e = $(".cd-transition-layer"), o = e.children(), t = $("#popup"), a = 1.78,
		s = e.data("frame"), d = !1;
	n(), $(window).on("resize", function () {
		d || (d = !0, window.requestAnimationFrame ? window.requestAnimationFrame(n) : setTimeout(n, 300))
	}), i.on("click", function (n) {
		n.preventDefault();
		var i = $(n.target).attr("href");
		e.addClass("visible opening");
		var o = $(".no-cssanimations").length > 0 ? 0 : 800;
		setTimeout(function () {
			t.filter(i).addClass("visible"), e.removeClass("opening")
		}, o)
	});
});