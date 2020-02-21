var nameSpace = TIAA || {};


( function () {
	"use strict";
	
	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids, ba, bs;
	
	nameSpace.init = function () {
			// Initialize any variables here
			ids = [];

			width = 300;
			height = 600;
			ba = [];
		    bs = [{x:25, y:220, s:0.6, r:-20, ex:-100, ey:-100},  {x:200, y:200, s:0.6, r:-180, ex:-200, ey:-200},{x:230, y:320, s:0.7, r:-90, ex:-200, ey:-200},  {x:10, y:340, s:0.8, r:0, ex:-200, ey:-200},  {x:100, y:300, s:0.5, r:-60, ex:-200, ey:-200},{x:220, y:230, s:0.55, r:-120, ex:-200, ey:-200},  {x:20, y:470, s:0.55, r:0, ex:-200, ey:-200},  {x:150, y:500, s:0.6, r:-40, ex:-200, ey:-200},{x:100, y:130, s:0.7, r:0, ex:-200, ey:-200},{x:200, y:440, s:0.6, r:0, ex:-200, ey:-200 } ];
	
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
			
				 TweenMax.set(["#cta", "#code"], {autoAlpha:0});
				 TweenMax.set(["#copy-1", "#copy-2", "#copy-3","#copy-4"],{x:-width});
				 TweenMax.set(["#endBee1", "#endBee2"], {x:-width});
	
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

		timeline = new TimelineMax( {
			delay: 0.2,
			onComplete: nameSpace.onAnimationComplete
		} );

		timeline.pause();
		startBgImg();
		buzz();
		setup(ba);

		TweenMax.delayedCall(4, moveDirection);
		TweenMax.delayedCall(9.7, moveDirection2);
		TweenMax.delayedCall(5.5, directionChange);

		//TweenMax.delayedCall(10.5, inkingAnimate)
		timeline.to("#copy-1", 0.8, {x:0, autoAlpha:1, delay:1})
				.to("#copy-1", 0.8, {x:width},"+=3")
				.fromTo("#copy-2", 0.8, {x:-300, autoAlpha:1}, {x:0,autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=0.8")
				.to(["#copy-2"], 0.8, {x:300,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut}, "+=2.8")
				.fromTo("#copy-3", 1, {x:-300, autoAlpha:1}, {x:0,autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut}, "-=.8")
				.fromTo("#icon",0.8, {x:-width, autoAlpha:0}, { x:0, autoAlpha:1, ease:Power1.easeInOut}, "-=.5")
				.to("#copy-3", 0.8, {x:width}, "+=3")
				.fromTo("#copy-4", 1, {x:-300, autoAlpha:1}, {x:0,autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut}, "-=.7")
				.to(["#cta", "#code"], 1, { autoAlpha:1,ease:Cubic.easeInOut});
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

	function startBgImg() {
		TweenMax.to("#bg-img", 11.75, {delay:0.5, transformStyle: "preserve-3d", autoAlpha:1, force3D:true, rotationZ: 0.01, scale:0.8,ease:Power1.easeNone, x:-180, y:-225});
	}

	function inkingAnimate() {
		TweenMax.set("#shape", { autoAlpha:1});
		// example of doing the animation for stroke-dashoffset and the 'marker' element
		// set or animate the marker to the starting point of the next stroke path to be animated prior to starting the two concurrent animations
		var tl = new TimelineMax();
		tl.fromTo("#svg1",3, {'stroke-dashoffset' :1000, strokeDasharray:1000, autoAlpha:1},{'stroke-dashoffset':0 , autoAlpha:1,ease:Quad.easeInOut}, "-=3");
		tl.fromTo("#svg2",3, {'stroke-dashoffset' :1000, strokeDasharray:1000, autoAlpha:1},{'stroke-dashoffset':0 , autoAlpha:1,ease:Quad.easeInOut}, "-=2.9");
	}

	function buzz() {
		TweenMax.to(".wings",0.01, {rotation:10, yoyo:true, ease:Power1.easeInOut, repeat:-1});
	}

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function setup() {

		var hive = document.getElementById("hive");
		var bees = hive.getElementsByClassName("bee");
		// holds the paths translated to points for the entire svg	
		 ba = [];

		for (var i = 0; i < bees.length; i++) {
		//length = paths[i].getTotalLength() + 2;
		 // paths[i].style["stroke-dasharray"] = 10;
		 ba.push(bees[i]);
		}
		animateBees();
	}

	function moveDirection() {
		var t = new TimelineMax();
		for (var i=0; i<ba.length; i++) {
			var c = getRandom(.5, 1);
		}
		
	}

	function fadeOutBees() {
		for (var k=0; k<6; k++) {
			TweenMax.to(ba[k], 0.5, {autoAlpha:0},"+=.3");
		}
	}

	function moveDirection2() {
		var t = new TimelineMax();
		for (var i=0; i<ba.length; i++) {
		
			var c = getRandom(.5, 1);
			//TweenMax.killTweensOf(ba[i], {x: true, y:true, scale:true,  bezier:true});
			//t.to(ba[i], 3, {x:bs[i].ex, y:bs[i].ey, ease:Power2.easeInOut, autoRotate:90, onComplete:fadeOutBees}, "-=3");
			// .to(ba[i],getRandom(0.8, 1.5), {x:getRandom(140,170), y:getRandom(270, 300), ease:Power2.easeInOut}, -(getRandom(0.8, 1.5)))
			//TweenMax.to(ba[i], 3, { x:150, y:300, scale:.5});
		}

		TweenMax.set("#hive", {x:10, y:10});
					var motionPath11 = MorphSVGPlugin.pathDataToBezier('#path11') ;
					var motionPath12 = MorphSVGPlugin.pathDataToBezier('#path12') ;
					var motionPath13 = MorphSVGPlugin.pathDataToBezier('#path13') ;
					var motionPath14 = MorphSVGPlugin.pathDataToBezier('#path14') ;
					t.to(ba[0], 1.5, {scale:0.5, bezier:{values:motionPath11, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
					t.to(ba[1], 1.25, {scale:0.5, bezier:{values:motionPath12, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 }, "-=1.1");
					t.to(ba[2], 1.5, {scale:0.5, bezier:{values:motionPath13, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 },"-=1.5");
					t.to(ba[3], 1.25, {scale:0.5, bezier:{values:motionPath14, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 }, "-=1.25");
					t.to(".wings",0.1, {rotation:10, yoyo:true, ease:Power1.easeInOut, repeat:5, onComplete:killWings} );
	  }

	function killWings() {
		TweenMax.killTweensOf(".wings");
	}

	function moveBees() {
				//Create a wiggle with 6 oscillations (default type:"easeOut")
				CustomWiggle.create("wiggle", { wiggles: 1, timingEase:Linear.easeOut, amplitudeEase: Power1.easeInOut});
				//graph it	
				//now use it in an ease. "rotation" will wiggle to 30 and back just as much in the opposite direction, ending where it began. 
				for (var i=0; i<ba.length; i++) {
					var xpos =  getRandom(-100, width);
					var ypos =  getRandom(120, height);
					var rot =  getRandom(0, 180);
					var t =  getRandom(4, 15);
					var s =  i *.2;
					TweenMax.to(ba[i],t, {rotation:rot, x:xpos, y:ypos, scale:s, repeat: -1, ease:"wiggle"});
				}
	}

	function directionChange() {
		var motionPath = MorphSVGPlugin.pathDataToBezier('#path-left');
		TweenMax.to(ba[5], 4, {bezier:{values:motionPath, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		TweenMax.to(ba[6], 4, {bezier:{values:motionPath, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 , delay:0.3});
		TweenMax.to(ba[7], 4, {bezier:{values:motionPath, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0, delay:0.6 });
		var motionPath2 = MorphSVGPlugin.pathDataToBezier('#path-right') ;
		TweenMax.to(ba[8], 4, {bezier:{values:motionPath2, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0, delay:0 });
		TweenMax.to(ba[9], 4, {bezier:{values:motionPath2, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0, delay:0.3 });
		TweenMax.to(ba[10], 4, {bezier:{values:motionPath2, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0, delay:0.6 });
		var motionPath3 = MorphSVGPlugin.pathDataToBezier('#path-middle');
		TweenMax.to(ba[4], 4, {bezier:{values:motionPath2, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0, delay:0 });
	}

	function animateBees() {	
		// bs = [{x:25, y:220, s:0.7, r:-20},  {x:200, y:200, s:0.7, r:-180}, {x:230, y:320, s:1, r:-90},  {x:10, y:340, s:1.25, r:0},  {x:100, y:300, s:.5, r:-60}, {x:220, y:230, s:.55, r:-120},  {x:20, y:470, s:.55, r:0},  {x:150, y:500, s:0.7, r:-40},{x:100, y:130, s:1, r:0},{x:200, y:440, s:.6, r:0} ]
		for (var i=0; i< bs.length; i++) {
			TweenMax.set(ba[i],{x:bs[i].x, y:bs[i].y, scale:bs[i].s, xPercent:-50, yPercent:-50, transformOrigin:"center center"});
		}
		//TweenMax.set("#abeja",{xPercent:-50, yPercent:-50})
		//TweenMax.set(bs[0],{x:bs[0].x, y:bs[0].y, scale:bs[0].s, xPercent:-50, yPercent:-50, transformOrigin:"center center"})
		var motionPath = MorphSVGPlugin.pathDataToBezier('#path1') ;
		TweenMax.to(ba[0], 6.5, {bezier:{values:motionPath, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		var motionPath2 = MorphSVGPlugin.pathDataToBezier('#path2') ;
		TweenMax.to(ba[1], 6.5, {bezier:{values:motionPath2, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0});
		var motionPath3 = MorphSVGPlugin.pathDataToBezier('#path3') ;
		TweenMax.to(ba[2], 6.5, {bezier:{values:motionPath3, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		var motionPath4 = MorphSVGPlugin.pathDataToBezier('#path4') ;
		TweenMax.to(ba[3], 6.5, {bezier:{values:motionPath4, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		var motionPath5 = MorphSVGPlugin.pathDataToBezier('#path5') ;
		TweenMax.to(ba[4], 6.5, {bezier:{values:motionPath5, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		var motionPath6 = MorphSVGPlugin.pathDataToBezier('#path6') ;
		TweenMax.to(ba[5], 6.5, {bezier:{values:motionPath6, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		var motionPath7 = MorphSVGPlugin.pathDataToBezier('#path7') ;
		TweenMax.to(ba[6], 6.5, {bezier:{values:motionPath7, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
		var motionPath8 = MorphSVGPlugin.pathDataToBezier('#path8') ;
		TweenMax.to(ba[7], 6, {bezier:{values:motionPath8, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });

		var motionPath9 = MorphSVGPlugin.pathDataToBezier('#path9') ;
		TweenMax.to(ba[8], 6.5, {bezier:{values:motionPath9, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });

		var motionPath10 = MorphSVGPlugin.pathDataToBezier('#path10') ;
		TweenMax.to(ba[9], 6.5, {bezier:{values:motionPath10, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat: 0 });
	}

} ) ();	