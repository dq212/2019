var nameSpace = TIAA || {};

( function () {
	"use strict";
	
	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids, isDark;
	
	nameSpace.init = function () {
		// // Initialize any variables here
		isDark = false;
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
				// ids.forEach(function(element) {
				// 	TweenMax.to(element, 0, {autoAlpha:0});
				//   });
			//
				 // TweenMax.set(['#copy-1', '#icon-1'] , { autoAlpha:1});
				 //TweenMax.set(['#copy-1','#img-mask', "#brick", '#svg1', "#frame", "#doorknob", "#outline", "#sky", "#grass"] , { autoAlpha:1});
				 TweenMax.set(["#moon"], {scale:1.3, x:-30, y:-10, autoAlpha:0});
				 TweenMax.set(["#logo", "#cta", "#code", "#copy-2","#copy-3"], {autoAlpha:0});
				 TweenMax.set('#shape', {scale:1, autoAlpha:0});
				 TweenMax.set(['#bg-color'] , { autoAlpha:1, y:0});
				 TweenMax.set("#outline", {scale:7.0, y:200});
	
			wrapper = nameSpace.$( '#wrapper' );
			clickThrough = document.getElementById('click_through');
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
	TweenMax.to("#cta", 0.2, {scale:1.1, y:0, transformOrigin:"50% 80%", z:0.01, force3D:true, rotationZ: 0.01, transformPerspective: 400});
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
		//startBgImg();
		animateSmoke(isDark);
		//TweenMax.delayedCall(10.5, inkingAnimate)
		timeline.to("#copy-1", 0.5, {autoAlpha:1},"+=1")
				 .to("#house", 1.5, {y:-20, scale:.92})
				.to("#copy-2", 0.8, {autoAlpha:1})
				 .to(".walls", 1.5, {fill:"#f6921e"},"+=1")
				 .to("#sky", 1.5, {backgroundColor:"#2687ff"}, "-=1.5")
				 .to(".window-downstairs", .02, {fill:"#4d4d4f"}, "-=1.5")
				 .to(["#copy-1","#copy-2"], 0.5, {autoAlpha:0})
				 .to("#sky-holder", 1.5, {scale:.55, x:"-5", y:"-30"})
				 .to("#outline",1.5, {scale:1, y:0, onComplete:stopSmoke}, "-=1.5")
				 .to("#house", 1.5, {y:70,x:20}, "-=1.5")
				 .set("#copy-3", {x:width})
				 .to("#copy-3", 0.5, {autoAlpha:1})
				 .to(".walls", 1.5, {fill:"#cb7a17"})
				 .to("#sky", 1.5, {backgroundColor:"#0e4c86"}, "-=1.5")
				 .to("#moon",0.5, {y:86,autoAlpha:1})
				 .to(".window-upstairs", .02, {fill:"#4d4d4f"}, "+=.6")
				 .to(["#logo", "#cta", "#code"], 1, { autoAlpha:1, ease:Cubic.easeInOut})

		};

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();
	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );

		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
	};

	function stopSmoke() {
		isDark = true;
	}

	function animateSmoke() {
		if (!isDark) {
		var ts = new TimelineMax();
			ts.fromTo("#s1", 2, {x:-5, y:10, autoAlpha:1}, {y:-20, autoAlpha:0})
			.fromTo("#s2", 2, {x:-5, y:10, autoAlpha:1}, {y:-20, autoAlpha:0}, "-=2")
			.fromTo("#s3", 2, {x:-5, y:10, autoAlpha:1}, {y:-20, autoAlpha:0,onComplete:animateSmoke}, "-=2");
		}
	}

	function startBgImg() {
		//TweenMax.to("#bg-img", 11.75, {delay:0.5, transformStyle: "preserve-3d", autoAlpha:1, force3D:true, rotationZ: 0.01, scale:0.37,ease:Linear.easeNone, x:-215, y:-175});
		//TweenMax.fromTo("#shape", 14.5,{ autoAlpha:0, y:500, scale:4, ease:Cubic.easeInOut}, { transformPerspective: 160, autoAlpha:1, force3D:true, rotationZ: 0.01, y:0, scale:1,ease:Cubic.easeInOut});
	}
	function inkingAnimate() {
		TweenMax.set("#shape", { autoAlpha:1});
	
		var tl = new TimelineMax();
		//tl.fromTo("#shape", 3, {x:-50}, {x:0})
		tl.fromTo("#svg1",3, {'stroke-dashoffset' :1000, strokeDasharray:1000, autoAlpha:1},{'stroke-dashoffset':0 , autoAlpha:1,ease:Quad.easeInOut}, "-=3");
		tl.fromTo("#svg2",3, {'stroke-dashoffset' :1000, strokeDasharray:1000, autoAlpha:1},{'stroke-dashoffset':0 , autoAlpha:1,ease:Quad.easeInOut}, "-=2.9")


	};
} ) ();