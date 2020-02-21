var nameSpace = TIAA || {};


(function () {
	"use strict";

	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids;

	nameSpace.init = function () {

		// Initialize any variables here
		ids = [];
		width = 320;
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

		// TweenMax.set("#rooster", {x:50, y:200, scale:2});
		TweenMax.set("#rooster-object",{scale:1, x:5, y:0})

		TweenMax.set(["#speak-1", "#speak-2", "#speak-3"], {autoAlpha:0});
		TweenMax.set(['#copy-1'], { autoAlpha: 1 });
		TweenMax.set(['#hand', "#btn-plus", "#btn-minus"], {autoAlpha: 1 });
		TweenMax.set(["#copy-2", "#copy-3"], { x: 0, autoAlpha: 0 });
		TweenMax.set(["#cta", "#code"], { autoAlpha: 0 });
		TweenMax.set(["#rooster"], { scale:1});


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
			TweenMax.to("#cta", 0.1, { scale: 1.1, y: 0, transformOrigin: "85% 80%", z: 0.01, force3D: true, rotationZ: 0.01, transformPerspective: 400 });
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
			
			.to(["#copy-1"], 0, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=3")
			
			.to(["#copy-2"], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn })

			.fromTo("#copy-2", 0, { autoAlpha: 0 }, { autoAlpha: 0, transformPerspective: 320, force3D: true, rotationZ: 0.01, ease: Power2.easeOut }, "+=4")

			.to("#copy-3", 0.1,  { autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeOut })

			.to(["#cta", "#code"], 0, { autoAlpha: 1, ease: Cubic.easeInOut }, "+=0.75");
	};

	// function traceTime(){
	// 	console.log("slideTime: " + timeline.time());
	// }

	nameSpace.startAnimation = function () {

		// Code for animation		
		timeline.play();
		TweenMax.delayedCall(0.5, nameSpace.speak);
		TweenMax.delayedCall(3.25, nameSpace.bob);
		TweenMax.delayedCall(4.5, nameSpace.turn);
		TweenMax.delayedCall(5.75, nameSpace.bob);
		TweenMax.delayedCall(6.25, nameSpace.turn2);
		TweenMax.delayedCall(7.25, nameSpace.walk);
		TweenMax.delayedCall(7.25, nameSpace.speak);
		// startBgImg();

		// TweenMax.delayedCall(7.5, loop);
	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log('Animation Duration: ' + timeline.time() + 's');

		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
	};

	nameSpace.speak = function() {
		var t = new TimelineMax();
		t
		.to(["#speak-1", "#speak-2", "#speak-3"], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn })
		.to(["#beak-1"], 0, {rotation:15})
		.to(["#beak-2"], 0, {rotation:-15})

		.to(["#speak-1", "#speak-2", "#speak-3"], 0, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.3")
		.to(["#beak-1"], 0, {rotation:-5})
		.to(["#beak-2"], 0, {rotation: 5})

		.to(["#speak-1", "#speak-2", "#speak-3"], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.3")
		.to(["#beak-1"], 0, {rotation:15})
		.to(["#beak-2"], 0, {rotation:-15})
	
		.to(["#speak-1", "#speak-2", "#speak-3"], 0, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.3")
		.to(["#beak-1"], 0, {rotation:-5})
		.to(["#beak-2"], 0, {rotation: 5})

		.to(["#speak-1", "#speak-2", "#speak-3"], 0, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.1")
		.to(["#beak-1"], 0, {rotation:15})
		.to(["#beak-2"], 0, {rotation:-15})

		.to(["#speak-1", "#speak-2", "#speak-3"], 0, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.22")
		.to(["#beak-1"], 0, {rotation:0})
		.to(["#beak-2"], 0, {rotation:0})
	}

	nameSpace.walk = function() {
		var tl = new TimelineMax();
		var tl2 = new TimelineMax();
		var tl3 = new TimelineMax();

		tl.to("#leg-1", 0.2, {rotation:10, yoyo:true, repeat:20});
		tl2.to("#leg-2", 0.2, {rotation:-10, yoyo:true, repeat:20}, "-=0.2");
		tl3.to('#rooster', 1.5 ,{x:-width/4,transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power0.easeInOut});
	}

	nameSpace.bob = function() {
		var tl = new TimelineMax();
		tl.to("#main", 0, {rotation:30, transformOrigin:"50% 50%"})
		tl.to("#main", 0, {rotation:0, transformOrigin:"50% 50%"}, "+=0.1")
	}

	nameSpace.turn = function() {
		var tl = new TimelineMax();
		tl.to("#main", 0, {skewY:180, transformOrigin:"55% 50%"})
		tl.to("#main", 0, {skewY:0, x:0}, "+=0.75")
	}

	nameSpace.turn2 = function() {
		var tl = new TimelineMax();
		tl.to("#main", 0, {skewY:180, transformOrigin:"55% 50%"})
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

