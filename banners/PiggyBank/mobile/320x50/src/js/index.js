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
			width = 320;
			height = 50;

			posXArray1 = [110, 120, 125, 135, 173, 199, 112, 102, 117, 142, 114 ];
			posYArray1 = [1, 3, 5, 10, 17, 2, 8, 6, 4, 7, 12 ];
			posXArray2 = [183, 192, 175, 165, 136, 110, 118, 160, 153, 144, 149, 178, 120, 172, 169, 137, 162, 154, 157, 150, 128, 164, 162, 150, 145, 176, 127, 161, 198, 167, 150, 132, 159 ];
			posYArray2 = [3, 10, 25, 1, 3, 6, 8, 5, 4, 7, 1, 9, 4, 15, 10, 23, 10, 8, 11, 24, 27, 3 ,2, 1, 5, 6, 5, 1, 3, 7, 14, 8, 1  ];
			

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
		
				 TweenMax.set(['#copy-1' ] , { y:height, autoAlpha:1});
				 TweenMax.set(["#logo", "#cta", "#code", "#coin-holder",  "#coin-holder2"], {autoAlpha:0});
				 TweenMax.set('#shape', {scale:0.9, autoAlpha:0});
				 TweenMax.set(['#bg-color'] , { autoAlpha:1});
				 TweenMax.set("#pig", {scale: 0.21, x: 56, y: -59});
				// TweenMax.set(["#pig"], {scale:0.30})
				 
	
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
	//TweenMax.to("#cta", 0.2, {scale:1.1, y:0, transformOrigin:"90% 25%", z:0.01, force3D:true, rotationZ: 0.01, transformPerspective: 400});
};

click_through.onmouseout = function () {
	//TweenMax.to("#cta", 0.2, {scale:1, force3D:true, z:0.01, rotationZ: 0.01, transformPerspective: 400, y:0});
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

		//TweenMax.set('#anim-wrapper-rel', {scale: .146, x: 44,  y: -94});

		timeline.pause();
		//startBgImg();


		timeline.to("#copy-1", 0.8, {y:0, autoAlpha:1})
				.to("#copy-1", 0.5, {y:-height},"+=1.8")

				.fromTo("#copy-2", 0.8, { y:height}, {y:0, autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=0.5")
				.to("#copy-2", 0.5, {y:-height}, "+=2.4")
				.fromTo("#copy-3", 0.8, { y:height}, {y:0, autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=0.5")
				//.to("#copy-3", 0.5, {y:-height*1.5,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "+=1.8")
				//.to(["#pig", "#coin-holder", "#coin-holder2"], 0.8, {y:-height*1.5,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=0.8")
				// .fromTo("#copy-4", 0.8, { y:height}, {autoAlpha:1,y: 0, transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone})
				//.fromTo("#icon", 0.5,{y:height}, { y: 0, transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Linear.easeNone}, "-=.5")
				.to(["#cta", "#code", "#logo"], 1, { autoAlpha:1,ease:Cubic.easeInOut});
	};

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();

		TweenMax.delayedCall(4, inkingAnimate);
		TweenMax.delayedCall(2, trickleAnimate);
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
		TweenMax.set("#coin-holder", { x:134, y: 29, autoAlpha:1, transformOrigin: '0 0', scale: 0.5});

		var holder = document.getElementById("coin-holder");
		var coins = holder.getElementsByTagName("div");
		// holds the paths translated to points for the entire svg
		var coinsArray = [];
		console.log(coinsArray);

		for (var i = 0; i < coins.length; i++) {
		  //length = paths[i].getTotalLength() + 2;
		 // paths[i].style["stroke-dasharray"] = 10;
		  coinsArray.push(coins[i]);
		  coin_tl.fromTo(coinsArray[i], getRandom(0.3, 0.75),{x:133, y:-13, autoAlpha:1,rotationZ:getRandom(0, 40),rotationY:getRandom(0, 40)}, {x:posXArray2[i], y:posYArray2[i], autoAlpha:1,ease:Cubic.easeIn,rotationX:getRandom(0, 20),rotationY:getRandom(0, 20)}, ["-=" + getRandom(0.09, 0.5)]);
	//	 coin_tl.fromTo(coinsArray[i], getRandom(0.3, 0.55),{x:150, y:-75, autoAlpha:1}, {x:getRandom(100, 220), y:getRandom(10, 80), autoAlpha:1,ease:Cubic.easeIn}, ["-=" + getRandom(0.09, 0.5)])
		}
	}

		function trickleAnimate() {
			TweenMax.set(".coin", {scale: 0.5});
			TweenMax.set("#coin-holder2", { x: 134, y: 29, autoAlpha:1, transformOrigin: '0 0', scale: 0.5});
	
			var tholder = document.getElementById("coin-holder2");
			var tcoins = tholder.getElementsByTagName("div");
			// holds the paths translated to points for the entire svg
			var tcoinsArray = [];
			console.log(tcoinsArray);

			var d= 0;
	
			for (var i = 0; i < tcoins.length; i++) {
			  tcoinsArray.push(tcoins[i]);
			  TweenMax.fromTo(tcoinsArray[i], getRandom(0.3, 0.75),{x:133, y:-13, autoAlpha:1,rotationZ:getRandom(0, 40),rotationY:getRandom(0, 40)}, {x:posXArray1[i], y:posYArray1[i], autoAlpha:1,ease:Cubic.easeIn,rotationZ:getRandom(0, 30),rotationY:getRandom(0, 20)}, ["+=" + (d + getRandom(0.09, 0.5))]);
		//	 tcoin_tl.fromTo(tcoinsArray[i], getRandom(0.25, 0.4),{x:150, y:-75, autoAlpha:1}, {x:getRandom(50, 140), y:getRandom(10, 100), autoAlpha:1,ease:Power1.easeIn})

				d++ ;
			}
			
		}

		
	

	
} ) ();