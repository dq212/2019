var nameSpace = TIAA || {};


(function () {
	"use strict";

	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids;
	var tArray = ["t3", "t4", "t5", "t6", "t7"];
	var numArray = ["n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7"];

	nameSpace.init = function () {

		// Initialize any variables here
		ids = [];

		width = 300;
		height = 50;

		//SET IDs IN DOM TO GLOBAL VARIABLES
		var allElements = document.getElementsByTagName("*");
		//grabs all elements and makes them variables
		for (var q = 0; q < allElements.length; q++) {
			var el = allElements[q];
			if (el.id) {
				window[el.id] = document.getElementById(el.id);
				//separates what we don't want to hide initially
				if (el.id !== 'wrapper' && el.id !== 'click_through' && el.id !== 'bg') {
					ids.push(el);
				}
			}
		}

		for (var n = 0; n < numArray.length; n++) {
			TweenMax.set('#' + numArray[n], { autoAlpha: 0, x: 8 })
		}

		for (var k = 1; k < tArray.length; k++) {
			TweenMax.set('#' + tArray[k], { autoAlpha: 0, x: 0 })
		}

		TweenMax.set("#nums", {scale:5.5 });
		TweenMax.set(['#' + numArray[0], '#' + tArray[0]], {autoAlpha:0});
		TweenMax.set(['#line', '#hand', "#allNums", '#copy-1'], { autoAlpha: 1 });
		TweenMax.set('#hand', { x: 20, y: 15 });
		TweenMax.set(['#hand', "#btn-plus", "#btn-minus"], {autoAlpha: 1 });
		TweenMax.set(["#copy-2", "#copy-3", "#copy-4", "#copy-5"], { x: 0, autoAlpha: 0 });
		TweenMax.set(["#cta", "#code"], { autoAlpha: 0 });
		TweenMax.set(["#allNums"], { scale:0.65});


		wrapper = nameSpace.$('#wrapper');
		clickThrough = document.getElementById('click_through');
		cta = nameSpace.$('#cta');
		/* end added by me */

		wrapper.addClass('show');

		nameSpace.initClickTag();
		nameSpace.initAnimation();

		if (nameSpace.useFallback()) {
			nameSpace.injectFallback();
		} else {
			nameSpace.startAnimation();
		}

		click_through.onmouseover = function () {
			TweenMax.to("#cta", 0.1, { scale: 1.1, y: 0, transformOrigin: "85% 85%", z: 0.01, force3D: true, rotationZ: 0.01, transformPerspective: 400 });
		};

		click_through.onmouseout = function () {
			TweenMax.to("#cta", 0.1, { scale: 1, force3D: true, z: 0.01, rotationZ: 0.01, transformPerspective: 400, y: 0 });
		};
	};

	nameSpace.initClickTag = function () {
		clickThrough.onclick = function () {
			window.open(window.clickTag);
		};
	};

	nameSpace.injectFallback = function () {
		var body = document.body;

		while (body.firstChild) {
			body.removeChild(body.firstChild);
		}

		var anchor = document.createElement('a');
		anchor.style.cursor = 'pointer';

		var img = new Image();
		img.src = './img/static.jpg';

		anchor.appendChild(img);
		anchor.onclick = function () { window.open(window.clickTag); };
		document.body.appendChild(anchor);
	};

	nameSpace.initAnimation = function () {
		// TweenMax can be used to set css
		// It will even take care of browser prefixes
		// TweenMax.set(logo, {x:100, y:50, opacity:0});


		timeline = new TimelineMax({
			delay: 0.5,
			onComplete: nameSpace.onAnimationComplete
		});

		timeline.pause();

		timeline
			
		.to(["#" + tArray[3]], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.5")
		.to(["#" + numArray[7]], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.5")
		.to(['#hand'], 0.5, { y: -5, x: -30, transformStyle: "preserve-3d", autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power1.easeOut }, "+=1.5")
		
		.to(["#copy-1", "#line", "#btn-minus", "#btn-plus", "#hand", "#allNums"], 0, { autoAlpha: 0, transformPerspective: 400, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=2.25")

			// .to(["#copy-1"], 0, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=2")
			.to(["#copy-2"], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn })
			.to("#copy-3", 0.1,  { autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeOut }, "+=1.5")

			// .fromTo("#copy-2", 0, { autoAlpha: 0 }, { autoAlpha: 1, transformPerspective: 300, force3D: true, rotationZ: 0.01, ease: Power2.easeOut }, '+=0.5')

			 .to(["#copy-2", "#copy-3"], 0, { autoAlpha: 0, transformPerspective: 400, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=2.5")

			.to("#copy-4", 0.1, { autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeOut })
			// .to("#copy-5", 0.1, { autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeOut }, "+=1.5")

			.to(["#cta", "#code"], 0, { autoAlpha: 1, ease: Cubic.easeInOut }, "+=1.5");
	};

	// function traceTime(){
	// 	console.log("slideTime: " + timeline.time());
	// }

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();
		// startBgImg();

		//TweenMax.delayedCall(4.25, countUpTens);
		// TweenMax.delayedCall(4.25, countUp);
		// TweenMax.delayedCall(5, setHigh);
		TweenMax.delayedCall(3.8, countDown2);
		// TweenMax.delayedCall(7.5, loop);


	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log('Animation Duration: ' + timeline.time() + 's');

		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
	};

	function setHigh() {
		TweenMax.set('#' + tArray[0], { autoAlpha: 0 });
		TweenMax.set('#' + tArray[3], { autoAlpha: 1 });

		TweenMax.set('#' + numArray[5], { autoAlpha: 0 });
		TweenMax.set('#' + numArray[5], { autoAlpha: 1 });

	}

	function resetNums() {
		for (var n = 0; n < numArray.length - 1; n++) {
			TweenMax.set('#allNums', { autoAlpha: 0 })
		}
		TweenMax.set('#' + numArray[numArray.length - 1], { autoAlpha: 1 });

	}

	function countUp() {
		var t = new TimelineMax();

		for (var n = 8; n < 26; n++) {
			t.staggerTo('#' + numArray[n], 0.02, { autoAlpha: 1 }, 0)
				.staggerTo('#' + numArray[n - 1], 0.02, { autoAlpha: 0 }, 0)
		}
	}

	function countUpTens() {
		var tt = new TimelineMax();
		for (var n = 0; n < 4; n++) {
			tt.staggerTo('#' + tArray[n], 0.15, { autoAlpha: 1 }, 0)
			tt.staggerTo('#' + tArray[n - 1], 0.05, { autoAlpha: 0 }, -0.2)
		}
	}

	function countDown2() {
		var t = new TimelineMax();
		
		TweenMax.set('#' + numArray[7], { autoAlpha: 0 });
		TweenMax.to('#' + tArray[3], 0, { autoAlpha: 0, delay: 0.3 });
		TweenMax.to('#' + tArray[2], 0, { autoAlpha: 1, delay: 0.3 });

		for (var n = numArray.length - 5; n > 17; n--) {
			t.staggerTo('#' + numArray[n], 0.04, { autoAlpha: 1 }, 0)
				.staggerTo('#' + numArray[n + 1], 0.04, { autoAlpha: 0 }, 10)
		}
	}


})();

var count = 1;
function loop() {
	if (count < 2) {
		console.log(count);
		count++;
		TIAA.init();
	}

}
	//

