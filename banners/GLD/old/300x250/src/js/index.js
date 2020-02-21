var CRAFTWW = CRAFTWW || {};

(function() {
	CRAFTWW.startAd = function() {
		// Set positioning or setPos() is used to position Div element, sets initially opacity, and z-index positioning
	
		function setPos(_elem, _visi, _xpos, _ypos, _zpos){
			_elem.style.position = "absolute";
			_elem.style.left = _xpos + "px";
			_elem.style.top = _ypos + "px";
			if(_visi === "hidden"){
				_elem.style.opacity = 0;
			}else{
				_elem.style.opacity = 1;
			}
			_elem.style.zIndex = _zpos;
		}



		function colorChange(_elem, _duration, _ease, _delay){
				// var specs = 'color ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				// _elem.style.color = '#3e692d';
				// _elem.style.transition = specs;
				// _elem.style.webkitTransition = specs;
				// _elem.style.color = '#fff'; 
				TweenMax.to(_elem, _duration, {color:"#fff", ease:Cubic.easeOut, delay:_delay});
			}




			var adBox = document.getElementById("adBox");
			var bgExit = document.getElementById("bgExit");
			var border = document.getElementById("border");	

			var copy1 = document.getElementById("copy-l1");
			var copy2 = document.getElementById("copy-l2");
			var copy3 = document.getElementById("copy-l3");
			var copy4 = document.getElementById("copy-l4");
			var copy5 = document.getElementById("copy-l5");
			var copy6 = document.getElementById("copy-l6");

			var frame4 = document.getElementById("frame-4");
			var frame5 = document.getElementById("frame-5");	
			var frame6 = document.getElementById("frame-6");						

			var frameLegal = document.getElementById("frame-legal");		
			var legalHolder = document.getElementById("legal-holder");		
			var legalLink = document.getElementById("legal-link");		

			var copyL1Txt = document.getElementById("copy-l1-txt");
			var copyL2Txt = document.getElementById("copy-l2-txt");		
			var copyL3Txt = document.getElementById("copy-l3-txt");
			var copyL3bTxt = document.getElementById("copy-l3b-txt");			
			var copyL4Txt = document.getElementById("copy-l4-txt");
			var copyL5Txt = document.getElementById("copy-l5-txt");
			var copyL6Txt = document.getElementById("copy-l6-txt");
			var copyL6bTxt = document.getElementById("copy-l6b-txt");

			var copyHidden1 = document.getElementById("copy-hidden1");
			var copyHidden2 = document.getElementById("copy-hidden2");
			var copyHidden3 = document.getElementById("copy-hidden3");

			var copyWhite3 = document.getElementById("copy-white3");
			var copyWhite6 = document.getElementById("copy-white6");

			var copyWhite3Comma = document.getElementById("copy-white3-comma");
			var copyWhite6Comma = document.getElementById("copy-white6-comma");	

			var logo = document.getElementById("logo");

			var tl1 = new TimelineMax();
			var tl2 = new TimelineMax();
			var tl3 = new TimelineMax();
			var tl4 = new TimelineMax();
			var tl5 = new TimelineMax();
			var tl6 = new TimelineMax();
			var tle = new TimelineMax();
				

			setPos(border, "visible", 0, 0, 11);
			setPos(copy1, "visible", 500, 1, 2);
			setPos(copy2, "visible", -250, 26, 3);
			setPos(copy3, "visible", 500, 50, 4);
			setPos(copy4, "visible", -250, 76, 5);
			setPos(copy5, "visible", 500, 100, 6);
			setPos(copy6, "visible", -250, 126, 7);

			setPos(frame4, "hidden", 0, 0, 8);
			setPos(frame5, "hidden", 0, 0, 9);
			setPos(frame6, "hidden", 0, 0, 10);

			setPos(frameLegal, "hidden", 0, 0, 1002);
			setPos(legalLink, "visible", 15, 478, 1003);
			setPos(legalHolder, "visible", 1, 1, 1001)

			adBox.style.visibility = "visible";


		function advance(){

			clearInterval(timer);
			
			if(phase === 0){
			
				var t = TweenMax.to(adBox, 3, {onComplete:step2});
				tl1.to(copy1, 22, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy2, 28, {left:1213, ease:Power0.noEase},"allTxt")
					.to(copy3, 27, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy4, 26, {left:1213, ease:Power0.noEase},"allTxt")
					.to(copy5, 22, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy6, 23, {left:1195, ease:Power0.noEase},"allTxt");
				}
		};

		function step2(){	
				tl1.kill();
				var copy1w = copy1.offsetLeft;
				var copy2w = copy2.offsetLeft;
				var copy3w = copy3.offsetLeft;
				var copy4w = copy4.offsetLeft;
				var copy5w = copy5.offsetLeft;
				var copy6w = copy6.offsetLeft;

				tl2.to(copy1, 22, {left:copy1w, ease:Power1.easeInOut},"allTxt2")
					.to(copy2, 28, {left:copy2w, ease:Power1.easeInOut},"allTxt2")
					.to(copy3, 32, {left:copy3w, ease:Power1.easeInOut},"allTxt2")
					.to(copy4, 26, {left:copy4w, ease:Power1.easeInOut},"allTxt2")
					.to(copy5, 22, {left:copy5w, ease:Power1.easeInOut},"allTxt2")
					.to(copy6, 24, {left:copy6w, ease:Power1.easeInOut},"allTxt2")

					.to(copyWhite3Comma, .75, {autoAlpha:0},"allTxt2")
					.to(copyWhite6Comma, .75, {autoAlpha:0},"allTxt2")

					.to(copyL1Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL2Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL3Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL3bTxt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL4Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL5Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL6Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL6bTxt, .75, {autoAlpha:0, onComplete:step3},"allTxt2")

					colorChange(copyWhite3, 0.75, 'linear', 0);
					colorChange(copyWhite6, 0.75, 'linear', 0);
		};

		function step3() {
// console.log('made it here....');
					 // console.log('made it here....');
			 	tl2.kill();
		// Android-specific Media Query
					var ua = navigator.userAgent.toLowerCase();
					var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

if (isAndroid) {
		
			tl3.to(copy6, .5, {autoAlpha:1})//this is just to pause
				.to(copy3, .5, {left:182, top:32, ease:Power0.easeInOut},"allTxt3")
				.to(copy6, .5, {left:83, top:82, ease:Power0.easeInOut}, "allTxt3")
				.to(copyHidden1, .5, {autoAlpha:1, ease:Power0.easeInOut}, "allTxt3")
				.to(copyHidden2, .5, {autoAlpha:1, ease:Power0.easeInOut}, "allTxt3")
				.to(copyHidden3, .5, {autoAlpha:1, ease:Power0.easeInOut, onComplete:step4}, "allTxt3")

		} else {
			tl3.to(copy6, .5, {autoAlpha:1})//this is just to pause
				.to(copy3, .5, {left:170, top:31, ease:Power0.easeInOut},"allTxt3")
				.to(copy6, .5, {left:81, top:81, ease:Power0.easeInOut}, "allTxt3")
				.to(copyHidden1, .5, {autoAlpha:1, ease:Power0.easeInOut}, "allTxt3")
				.to(copyHidden2, .5, {autoAlpha:1, ease:Power0.easeInOut}, "allTxt3")
				.to(copyHidden3, .5, {autoAlpha:1, ease:Power0.easeInOut, onComplete:step4}, "allTxt3")
		}
	};

		function step4() {
			tl4.to([copy3, copy6, copyHidden1, copyHidden2, copyHidden3], .5, {delay:3, autoAlpha:0, ease:Power0.easeInOut})
				.to(frame4, 1, {autoAlpha:1}, "-=.25")
				.to(frame5, 1, {autoAlpha:1, onComplete:step5}, "-=.25")
		
		}

		function step5() {
			tl5.to([frame4, frame5], 1, {autoAlpha:0}, "+=2")
				.to(frame6, 1, {autoAlpha:1,onComplete:step6})

		}

		function step6(){
			tl6.to([logo, frame6], 1, { autoAlpha:0, ease:Power0.easeInOut}, "+=2")
				.to(frameLegal, 1, {autoAlpha:1, ease:Power0.easeInOut})
				.to(frameLegal, 5, {top:-460, ease:Power0.easeIn}, "+=3")
				.to(frameLegal, 2, {onComplete:endStep})
		}	;

		function endStep(){
			// legalHolder.addEventListener("click", bgExitHandler, false);
			tle.to([logo, frame6], .6, {autoAlpha:1, ease:Power0.easeInOut})
				.to(legalHolder, .6, {autoAlpha:0, ease:Power0.easeInOut}, "-=.3")
		};


				/// add event listener to clicktags
				legalLink.addEventListener("click", legalClicked, false);
				frameLegal.addEventListener("click", bgExitHandler, false);
				bgExit.addEventListener("click", bgExitHandler, false);
				



		 function legalClicked(e) {
		 		    
		            try {
		                   Enabler.exit('Legal link');
		                    //window.open(window.clickTag2);
		              
		            } catch (err) {
						//put backup link here if necessary
		            }

		            	//window.event.cancelBubble = true;
		 			e.stopPropagation();
		 			e.stopImmediatePropagation();
		 			e.preventDefault();

		    // console.log('legal clicked');
		};

            function bgExitHandler(e) {
            	
            try {
                    Enabler.exit('Background Exit');
                    // window.open(window.clickTag);
            } catch (err) {
            		//put backup link here if necessary	
            }
           // window.event.cancelBubble = true;
		 		e.stopPropagation();
		 		e.stopImmediatePropagation();
		 		e.preventDefault();
    };

		
		var timer = setInterval(advance, 200);
		var phase = 0;
	};

	

})();