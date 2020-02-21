var nameSpace = TIAA || {};

( function () {
	"use strict";
	
	var timeline;
	var coin_tl;
	var tcoin_tl;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids, posXArray1, posYArray1, posXArray2, posYArray2;
	
	nameSpace.init = function () {
			// Initialize any variables here
			ids = [];
			width = 300;
			height = 600;

			posXArray1 = [110, 120, 125, 135, 173, 199, 112, 102, 117, 142, 114 ];
			posYArray1 = [50, 63, 55, 60, 67, 40, 38, 36, 34, 44, 30 ];
			posXArray2 = [183, 192, 175, 165, 136, 110, 118, 160, 153, 144, 149, 178, 120, 172, 169, 137, 162, 154, 157, 150, 128, 164, 162, 150, 145, 176, 127, 161, 198, 167, 150, 132, 159 ];
			posYArray2 = [33, 30, 55, 11, 13, 16, 8, 5, 34, 27, 10, 9, 4, 25, 20, 43, 40, 8, 31, 34, 37, 3 ,12, 11, 15, 6, 15, 10, 13, 17, 24, 18, 10  ];
			

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
		
				 TweenMax.set(['#copy-1' ] , { x:-width, autoAlpha:1});
				 TweenMax.set(["#cta", "#code", "#coin-holder",  "#coin-holder2"], {autoAlpha:0});
				 TweenMax.set('#shape', {scale:0.9, autoAlpha:0});
				 TweenMax.set(['#bg-color'] , { autoAlpha:1});
				 TweenMax.set(["#pig"], {scale:0.9})
				 
	
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
		// TweenMax.set(logo, {x:100, y:50, opacity:0});

		timeline = new TimelineMax( {
			delay: 0.2,
			onComplete: nameSpace.onAnimationComplete
		} );

		coin_tl = new TimelineMax();
		tcoin_tl = new TimelineMax();

		timeline.pause();
		//startBgImg();

		TweenMax.delayedCall(7.5, inkingAnimate)
		TweenMax.delayedCall(4, trickleAnimate)

		timeline.to("#copy-1", 0.8, {x:0, autoAlpha:1})
				.to("#copy-1", 0.5, {x:width},"+=1.8")

				.fromTo("#copy-2", 0.8, { x:-width}, {x:0, autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=0.5")
				.to("#copy-2", 0.5, {x:width}, "+=2.4")
				.fromTo("#copy-3", 0.8, { x:-width}, {x:0, autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=0.5")
				.to("#copy-3", 0.5, {x:width}, "+=2")
				.fromTo("#copy-4", 0.8, { x:-width,}, {autoAlpha:1,x: 0, transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone})
				.to(["#pig", "#coin-holder", "#coin-holder2"], 0.5, {x:width, transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=1.2")
				.fromTo("#icon", 0.5,{x:-width}, { x: 0, transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=.5")
				.to(["#cta", "#code"], 1, { autoAlpha:1,ease:Cubic.easeInOut})
	};

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();
	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );
		// Show a CTA or any animations outside main timeline
	};

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function startBgImg() {
		TweenMax.to("#bg-img", 11.75, {delay:0.5, transformStyle: "preserve-3d", autoAlpha:1, force3D:true, rotationZ: 0.01, scale:0.8,ease:Linear.easeNone, x:-180, y:-225});
	}

	function inkingAnimate() {
		TweenMax.set("#coin-holder", { autoAlpha:1});

		var holder = document.getElementById("coin-holder");
		var coins = holder.getElementsByTagName("div");
		// holds the paths translated to points for the entire svg
		var coinsArray = [];
		console.log(coinsArray);

		for (var i = 0; i < coins.length; i++) {
		  //length = paths[i].getTotalLength() + 2;
		 // paths[i].style["stroke-dasharray"] = 10;
		  coinsArray.push(coins[i]);
		  coin_tl.fromTo(coinsArray[i], getRandom(0.3, 0.75),{x:150, y:-75, autoAlpha:1,rotationZ:getRandom(0, 40),rotationY:getRandom(0, 40)}, {x:posXArray2[i], y:posYArray2[i], autoAlpha:1,ease:Cubic.easeIn,rotationX:getRandom(0, 20),rotationY:getRandom(0, 20)}, ["-=" + getRandom(0.09, 0.5)])
	//	 coin_tl.fromTo(coinsArray[i], getRandom(0.3, 0.55),{x:150, y:-75, autoAlpha:1}, {x:getRandom(100, 220), y:getRandom(10, 80), autoAlpha:1,ease:Cubic.easeIn}, ["-=" + getRandom(0.09, 0.5)])
		}
	}

		function trickleAnimate() {
			TweenMax.set("#coin-holder2", { autoAlpha:1});
	
			var tholder = document.getElementById("coin-holder2");
			var tcoins = tholder.getElementsByTagName("div");
			// holds the paths translated to points for the entire svg
			var tcoinsArray = [];
			console.log(tcoinsArray);
	
			for (var i = 0; i < tcoins.length; i++) {
			  tcoinsArray.push(tcoins[i]);
			  tcoin_tl.fromTo(tcoinsArray[i], getRandom(0.3, 0.75),{x:150, y:-75, autoAlpha:1,rotationZ:getRandom(0, 40),rotationY:getRandom(0, 40)}, {x:posXArray1[i], y:posYArray1[i], autoAlpha:1,ease:Cubic.easeIn,rotationZ:getRandom(0, 30),rotationY:getRandom(0, 20)}, ["-=" + getRandom(0.09, 0.5)])
		//	 tcoin_tl.fromTo(tcoinsArray[i], getRandom(0.25, 0.4),{x:150, y:-75, autoAlpha:1}, {x:getRandom(90, 140), y:getRandom(10, 100), autoAlpha:1,ease:Power1.easeIn})
			}
		}

		
	

	
} ) ();