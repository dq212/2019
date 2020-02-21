var nameSpace = TIAA || {};

( function () {
	"use strict";
	
	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids;
	
	nameSpace.init = function () {

		// Initialize any variables here
		ids = [];

		width = 160;
		height = 600;
	
			//SET IDs IN DOM TO GLOBAL VARIABLES
			var allElements = document.getElementsByTagName("*");
			//grabs all elements and makes them variables
			for (var q = 0; q<allElements.length; q++){
				 var el = allElements[q];
				 if (el.id){
					window[el.id]=document.getElementById(el.id);
					//separates what we don't want to hide initially
					 if (el.id !== 'wrapper' && el.id !== 'click_through' && el.id !== 'bg') {
							ids.push(el);
						}
					}
				}
				 TweenMax.set("#check-3", {rotation:100, x:-width*2, y:-200})
				
				 TweenMax.set(['#img-mask', '#bg-img', '#svg1'] , { autoAlpha:1});
				 TweenMax.set(["#copy-1", "#copy-2", "#copy-3", "#copy-4"], {x: -width});
				 TweenMax.set(['#bumper-1'], {x:50});
				 TweenMax.set(['#bumper-2'], {x: width});
				 TweenMax.set(["#logo", "#cta", "#code", "#icon", "#copy-5", "#pen"], {autoAlpha:0});
				 TweenMax.set('#shape', {scale:1.02, x: 0, y: -23, autoAlpha:0});
				 TweenMax.set("#bg-color", {autoAlpha:1, y:163})
	
			wrapper = nameSpace.$( '#wrapper' );
			clickThrough = document.getElementById('click_through');	
			cta = nameSpace.$( '#cta' );
	/* end added by me */

		wrapper.addClass( 'show' );

		nameSpace.initClickTag();
		nameSpace.initAnimation();

		if ( nameSpace.useFallback() ) {
			nameSpace.injectFallback();
		} else {
		nameSpace.startAnimation();
		}

click_through.onmouseover = function () {	
	TweenMax.to("#cta", 0.2, {scale:1.1, y:0, transformOrigin:"50% 75%", z:0.01, force3D:true, rotationZ: 0.01, transformPerspective: 400});
};

click_through.onmouseout = function () {
	TweenMax.to("#cta", 0.2, {scale:1, force3D:true, z:0.01, rotationZ: 0.01, transformPerspective: 400, y:0});
};
	};

	nameSpace.initClickTag = function () {
		clickThrough.onclick = function () {
			window.open( window.clickTag );
		};		
	};

	nameSpace.injectFallback = function() {
		var body = document.body;

		while ( body.firstChild ) {
			body.removeChild( body.firstChild );
		}

		var anchor = document.createElement('a');
		anchor.style.cursor = 'pointer';

		var img = new Image();
			img.src = './img/static.jpg';

		anchor.appendChild( img );
		anchor.onclick = function() { window.open(window.clickTag); };
		document.body.appendChild( anchor );
	};

	nameSpace.initAnimation = function () {
		// TweenMax can be used to set css
		// It will even take care of browser prefixes
		// TweenMax.set(logo, {x:100, y:50, opacity:0});

		timeline = new TimelineMax( {
			delay: 0.5,
			onComplete: nameSpace.onAnimationComplete
		} );

		timeline.pause();


		timeline.to("#copy-1", 0.8, {x:0, transformStyle: "preserve-3d", autoAlpha:1, force3D:true, rotationZ: 0.01, ease:Power1.easeOut})
			.fromTo(['#bumper-1'], 2, {x:0, ease:Power1.easeNone},{x:10}, '-=0.8')
			.fromTo(['#bumper-2'], 0.5, {x:190},{x:15, ease:Power4.easeNone}, '-=0.6')
			.to(['#bumper-1'], 0.2, {x:-5, ease:Power4.easeNone}, "-=0.2")
			.to(['#bumper-2'], 0.3, {x:30, ease:Power4.easeNone}, "-=0.1")
			.to(['#bumper-1'], 0.2, {x:5, ease:Power2.easeNone}, "-=0.1")
			// .to(['#bumper-2'], 0.2, {x:60, ease:Power1.easeNone}, "-=0.1")
			.to(["#copy-1"], 0.8, {x:160, transformPerspective: 400, autoAlpha:1, force3D:true, rotationZ: 0.01, ease:Power1.easeIn}, "+=.5")
			.fromTo("#copy-2", 0.8, {x:-160}, {x:0,transformPerspective: 400,force3D:true, rotationZ: 0.01,ease:Power2.easeOut},"-=0.2")
			// .to(['#bumper-2'], 0.5, {x:40,ease:Power1.easeOut}, "-=0.4")
			.to(['#bumper-2'], 0.5, {scale:0.85,transformOrigin:"50% 50%",ease:Power1.easeOut})
			.to(['#bumper-1'], 0.4, {x:20, transformOrigin:"55% 50%",scale:1.03, ease:Power1.easeOut}, "-=0.5")
		
			.to(['#bumper-2'], 1,  {x:-width, ease:Power1.easeOut})
			
			.to(["#copy-2"], 0.8, {x:width, transformPerspective: 160, autoAlpha:1, force3D:true, rotationZ: 0.01, ease:Power1.easeOut}, "+=0.6")
			.fromTo("#copy-3", 0.8, {x:-width, autoAlpha:1}, {x:0, autoAlpha:1, force3D:true, rotationZ: 0.01,ease:Power2.easeOut},"-=.4")
			.to(['#bumper-1'], 0.3, {x:12, ease:Power1.easeIn},'+=1')
			.to(['#bumper-1'], 0.8, {x:width+20, rotation:-10, ease:Back.easeIn})
		
			.to(['#check-1'], 1.2, {x:-30, y:-80, rotation:-60, transformOrigin:"20% 50%",ease:Power2.easeOut}, '-=0.4')
			.to(['#bumper-1'], 0.6, {x:width+30, ease:Power1.easeIn}, '-=0.6')
			.to(["#copy-3"], 0.8, {x:width, transformPerspective: 400, autoAlpha:1, force3D:true, rotationZ: 0.01, ease:Power4.easeNone}, "-=1")

			.fromTo("#copy-4", 0.8, {x:-160, autoAlpha:1}, {x:0, autoAlpha:1, force3D:true, rotationZ: 0.01,ease:Power2.easeOut},"-=.4")
	
			.to("#icon", 0.4, {autoAlpha:1}, '-=0.2')
			.to(['#check-3'], 1, {  transformOrigin:"50% 50%", ease:Power2.easeOut, scale:1, x:0, y:0, rotation:0, ease:Power2.easeOut} ,'-=0.3')
			.to("#pen", 0.4, {autoAlpha:1})
			// .to("#icon", 0.8, {autoAlpha:1, scale:0.75, x:-30, y:-10})	
			.to(["#copy-5"], 0.4, { autoAlpha:1, transformPerspective: 160, force3D:true, rotationZ: 0.01, ease:Power2.easeIn})	
			.to(["#logo", "#cta", "#code"], 1, { autoAlpha:1,ease:Cubic.easeInOut});
	};

	// function traceTime(){
	// 	console.log("slideTime: " + timeline.time());
	// }

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();
		// startBgImg();

		// TweenMax.delayedCall(6.25, inkingAnimate);
	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );

		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
	};
} ) ();