/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(document).ready(inicialSetUp);

var langEs = true;
function inicialSetUp() {
	//$("#ejecutar_1").click(validate_1);
	$("#switchLanguage").click(toggleLanguage);
}



function toggleLanguage() {
	var ifTrigered = false;
	console.log("i get clicked");
	var introEs = "<h1>Soy <strong>Manuel De Armas</strong>, este es mi portfolio.<br />Sientase libre de revisar mis trabajos previos o medios de contacto.</h1><br />";
	var introEn = "<h1>I am <strong>Manuel De Armas</strong>, this is my porfolio.<br/>Feel free to browse through my previous works or means of contact.</h1><br/>";

	var textThumb1Es = '<h3>Reel producido en 2017</h3>';
	var textThumb1En = '<h3>Reel produced in 2017</h3>';

	var textThumb2Es = '<h3>Corto de efectos especiales, Fireball</h3>';
	var textThumb2En = '<h3>VFX short, Fireball </h3>';


	var footerEn = '<p>&copy; Untitled. All rights reserved. Design: <a href="http://templated.co">TEMPLATED</a>. <br /> Modified by: Manuel De Armas.</p>';
	var footerEs = '<p>&copy; Untitled. Todos los derechos reservados. Diseño: <a href="http://templated.co">TEMPLATED</a>. <br /> Modificado por: Manuel De Armas.</p>';

	if (langEs) {
		$("#introText").html(introEn);

		$("#textThumb1").html(textThumb1En);
		$("#textThumb2").html(textThumb2En);

		$("#footer").html(footerEn);

		setLangSelectorTo("en");
		langEs = false;
		ifTrigered = true;
	}
	if (!langEs && !ifTrigered) {
		$("#introText").html(introEs);

		$("#textThumb1").html(textThumb1Es);
		$("#textThumb2").html(textThumb2Es);

		$("#footer").html(footerEs);

		setLangSelectorTo("es");
		langEs = true;
	}
	$("#switchLanguage").click(toggleLanguage);
}

function setLangSelectorTo(pLang) {
	var esSelected = '<i id="switchLanguage" class="icon style2 fa-language"></i><br/><span id="selectedLang" class="label">Es</span><br/><span id="unselectedLang" class="label">En</span><br/>';
	var enSelected = '<i id="switchLanguage" class="icon style2 fa-language"></i><br/><span id="selectedLang" class="label">En</span><br/><span id="unselectedLang" class="label">Es</span><br/>';

	switch (pLang) {
		case "es":
			$("#languageSelect").html(esSelected);
			break;
		case "en":
			$("#languageSelect").html(enSelected);
			break;
	}
}


$(function () {

	// Vars.
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	// Disable animations/transitions until everything's loaded.
	$body.addClass('is-loading');

	$window.on('load', function () {
		$body.removeClass('is-loading');
	});

	// Poptrox.
	$window.on('load', function () {

		$('.thumbnails').poptrox({
			onPopupClose: function () { $body.removeClass('is-covered'); },
			onPopupOpen: function () { $body.addClass('is-covered'); },
			baseZIndex: 10001,
			useBodyOverflow: false,
			usePopupEasyClose: true,
			overlayColor: '#000000',
			overlayOpacity: 0.75,
			popupLoaderText: '',
			fadeSpeed: 500,
			usePopupDefaultStyling: false,
			windowMargin: (skel.breakpoint('small').active ? 5 : 50)
		});

	});

});



