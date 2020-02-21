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
			// _elem.style.zIndex = _zpos; //==> no longer setting z-index
		}

		function nodeToBlock($nodes) {
			$nodes.forEach(function($node) {
				$node.style.display = 'block';
			});
		}

		function nodeToNone($nodes) {
			$nodes.forEach(function($node) {
				$node.style.display = 'none';
			});
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
			// var border = document.getElementById("border");	

			var copy1 = document.getElementById("copy-l1");
			var copy2 = document.getElementById("copy-l2");
			var copy3 = document.getElementById("copy-l3");
			var copy4 = document.getElementById("copy-l4");
			var copy5 = document.getElementById("copy-l5");
			var copy6 = document.getElementById("copy-l6");

			var copy7 = document.getElementById("copy-l7");
			var copy8 = document.getElementById("copy-l8");
			var copy9 = document.getElementById("copy-l9");
			var copy10 = document.getElementById("copy-l10");
			var copy11 = document.getElementById("copy-l11");
			var copy12 = document.getElementById("copy-l12");

			var copy13 = document.getElementById("copy-l13");
			var copy14 = document.getElementById("copy-l14");
			var copy15 = document.getElementById("copy-l15");
			var copy16 = document.getElementById("copy-l16");
			var copy17 = document.getElementById("copy-l17");
			var copy18 = document.getElementById("copy-l18");

			var copy19 = document.getElementById("copy-l19");
			var copy20 = document.getElementById("copy-l20");

			var frame4 = document.getElementById("frame-4");
			var frame5 = document.getElementById("frame-5");	
			var frame6 = document.getElementById("frame-6");						

			var frameLegal = document.getElementById("frame-legal");		
			var legalHolder = document.getElementById("legal-holder");		
			var legalLink = document.getElementById("legal-link");
			var legalLink2 = document.getElementById("legal-link2");		

			var copyL1Txt = document.getElementById("copy-l1-txt");
			var copyL2Txt = document.getElementById("copy-l2-txt");		
			var copyL3Txt = document.getElementById("copy-l3-txt");
			var copyL4Txt = document.getElementById("copy-l4-txt");
			var copyL5Txt = document.getElementById("copy-l5-txt");
			var copyL6Txt = document.getElementById("copy-l6-txt");
			var copyL6bTxt = document.getElementById("copy-l6b-txt");

			var copyL7Txt = document.getElementById("copy-l7-txt");
			var copyL8Txt = document.getElementById("copy-l8-txt");		
			var copyL9Txt = document.getElementById("copy-l9-txt");
			var copyL10Txt = document.getElementById("copy-l10-txt");			
			var copyL11Txt = document.getElementById("copy-l11-txt");
			var copyL12Txt = document.getElementById("copy-l12-txt");
			var copyL13Txt = document.getElementById("copy-l13-txt");
			var copyL14Txt = document.getElementById("copy-l14-txt");

			var copyL15Txt = document.getElementById("copy-l15-txt");
			var copyL16Txt = document.getElementById("copy-l16-txt");		
			var copyL17Txt = document.getElementById("copy-l17-txt");
			var copyL17bTxt = document.getElementById("copy-l17b-txt");			
			var copyL18Txt = document.getElementById("copy-l18-txt");
			// var copyL19Txt = document.getElementById("copy-l19-txt");
			// var copyL20Txt = document.getElementById("copy-l20-txt");

			var copyHidden1 = document.getElementById("copy-hidden1");
			var copyHidden2 = document.getElementById("copy-hidden2");
			var copyHidden3 = document.getElementById("copy-hidden3");
			var copyHidden4 = document.getElementById("copy-hidden4");

			var copyWhite6 = document.getElementById("copy-white6");
			var copyWhite17 = document.getElementById("copy-white17");

			var copyWhite6Comma = document.getElementById("copy-white6-comma");
			var copyWhite17Comma = document.getElementById("copy-white17-comma");	

			var logo = document.getElementById("logo");

			var tl1 = new TimelineMax();
			var tl2 = new TimelineMax();
			var tl3 = new TimelineMax();
			var tl4 = new TimelineMax();
			var tl5 = new TimelineMax();
			var tl6 = new TimelineMax();
			var tle = new TimelineMax();
				

			// setPos(border, "visible", 0, 0, 11);
			setPos(copy1, "visible", 500, 1, 2);
			setPos(copy2, "visible", -250, 26, 3);
			setPos(copy3, "visible", 500, 50, 4);
			setPos(copy4, "visible", -250, 76, 5);
			setPos(copy5, "visible", 500, 100, 6);
			setPos(copy6, "visible", -250, 126, 7);

			setPos(copy7, "visible", 500, 151, 8);
			setPos(copy8, "visible", -250, 176, 9);
			setPos(copy9, "visible", 500, 201, 10);
			setPos(copy10, "visible", -250, 226, 5);
			setPos(copy11, "visible", 500, 251, 6);
			setPos(copy12, "visible", -250, 276, 7);

			setPos(copy13, "visible", 500, 301, 2);
			setPos(copy14, "visible", -250, 326, 3);
			setPos(copy15, "visible", 500, 351, 4);
			setPos(copy16, "visible", -250, 376, 5);
			setPos(copy17, "visible", 500, 401, 6);
			setPos(copy18, "visible", -250, 426, 7);

			// setPos(copy19, "visible", 500, 451, 2);
			// setPos(copy20, "visible", -250, 476, 3);
	
			setPos(frame4, "hidden", 0, 0, 8);
			setPos(frame5, "hidden", 0, 0, 9);
			setPos(frame6, "hidden", 0, 0, 10);

			setPos(frameLegal, "hidden", 0, 0, 1002);
			setPos(legalLink, "visible", 15, 507, 1003);
			setPos(legalLink2, "visible", 43, 593, 1004);
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
					.to(copy6,19, {left:940, ease:Power0.noEase},"allTxt")
					.to(copy7, 22, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy8, 28, {left:1213, ease:Power0.noEase},"allTxt")
					.to(copy9, 27, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy10, 26, {left:1213, ease:Power0.noEase},"allTxt")
					.to(copy11, 22, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy12, 23, {left:1195, ease:Power0.noEase},"allTxt")
					.to(copy13, 22, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy14, 28, {left:1213, ease:Power0.noEase},"allTxt")
					.to(copy15, 27, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy16, 26, {left:1213, ease:Power0.noEase},"allTxt")
					.to(copy17,20, {left:-1313, ease:Power0.noEase},"allTxt")
					.to(copy18, 23, {left:1195, ease:Power0.noEase},"allTxt")
					// .to(copy19, 22, {left:-913, ease:Power0.noEase},"allTxt")
					// .to(copy20, 27, {left:1195, ease:Power0.noEase},"allTxt")
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

					.to(copy7, 22, {left:copy1w, ease:Power1.easeInOut},"allTxt2")
					.to(copy8, 28, {left:copy2w, ease:Power1.easeInOut},"allTxt2")
					.to(copy9, 32, {left:copy3w, ease:Power1.easeInOut},"allTxt2")
					.to(copy10, 26, {left:copy4w, ease:Power1.easeInOut},"allTxt2")
					.to(copy11, 22, {left:copy5w, ease:Power1.easeInOut},"allTxt2")
					.to(copy12, 24, {left:copy6w, ease:Power1.easeInOut},"allTxt2")

					.to(copy13, 22, {left:copy1w, ease:Power1.easeInOut},"allTxt2")
					.to(copy14, 28, {left:copy2w, ease:Power1.easeInOut},"allTxt2")
					.to(copy15, 32, {left:copy3w, ease:Power1.easeInOut},"allTxt2")
					.to(copy16, 26, {left:copy4w, ease:Power1.easeInOut},"allTxt2")
					.to(copy17, 22, {left:copy5w, ease:Power1.easeInOut},"allTxt2")
					.to(copy18, 24, {left:copy6w, ease:Power1.easeInOut},"allTxt2")

					// .to(copy19, 22, {left:copy5w, ease:Power1.easeInOut},"allTxt2")
					// .to(copy20, 24, {left:copy6w, ease:Power1.easeInOut},"allTxt2")


					.to(copyWhite6Comma, .75, {autoAlpha:0},"allTxt2")
					.to(copyWhite17Comma, .75, {autoAlpha:0},"allTxt2")

					.to(copyL1Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL2Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL3Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL4Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL5Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL6Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL6bTxt, .75, {autoAlpha:0},"allTxt2")

					.to(copyL7Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL8Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL9Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL10Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL11Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL12Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL13Txt, .75, {autoAlpha:0},"allTxt2")

					.to(copyL14Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL15Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL16Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL17Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL17bTxt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL18Txt, .75, {autoAlpha:0, onComplete:step3},"allTxt2")
					// .to(copyL19Txt, .75, {autoAlpha:0},"allTxt2")

					// .to(copyL20Txt, .75, {autoAlpha:0, onComplete:step3},"allTxt2")
					
					colorChange(copyWhite6, 0.75, 'linear', 0);
					colorChange(copyWhite17, 0.75, 'linear', 0);
		};

		function step3() {
			// console.log('made it here....');
					 console.log('made it here....');
			 	tl2.kill();
		// Android-specific Media Query
					var ua = navigator.userAgent.toLowerCase();
					var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
					var isIphone = ua.indexOf("iphone") > -1;

		if (isAndroid) {
			TweenMax.set(copyHidden1, {top:83});
			TweenMax.set(copyHidden2, {top:153});
			TweenMax.set(copyHidden3, {top:207});
			
			tl3.to(copy6, .5, {autoAlpha:1})//this is just to pause
				.to(copy6, .5, {left:110, top:118, ease:Power1.easeInOut},"allTxt3")
				.to(copy17, .5, {left:-43, top:149, ease:Power1.easeInOut}, "allTxt3")
				.to(copyHidden1, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(copyHidden2, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(copyHidden3, .4, {autoAlpha:1, ease:Power1.easeInOut, onComplete:step41, delay:.2}, "allTxt3")
				.to(copyHidden4, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				//
		} 

		else if(isIphone)
		{
			TweenMax.set(copyHidden1, {top:83});
			TweenMax.set(copyHidden2, {top:153});
			TweenMax.set(copyHidden3, {top:207});
			tl3.to(copy6, .5, {autoAlpha:1})//this is just to pause
				.to(copy6, .5, {left:110, top:118, ease:Power1.easeInOut},"allTxt3")
				.to(copy17, .5, {left:-43, top:149, ease:Power1.easeInOut}, "allTxt3")
				.to(copyHidden1, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(copyHidden2, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(copyHidden3, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2, onComplete:step41}, "allTxt3")
				.to(copyHidden4, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")

		}
		else {
			tl3.to(copy6, .5, {autoAlpha:1})//this is just to pause
				.to(copy6, .5, {left:110, top:118, ease:Power1.easeInOut},"allTxt3")
				.to(copy17, .5, {left:-43, top:149, ease:Power1.easeInOut}, "allTxt3")
				.to(copyHidden1, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(copyHidden2, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(copyHidden3, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2, onComplete:step4}, "allTxt3")
				.to(copyHidden4, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
		}
	};

		function step4() {
			tl4.to([copy6, copy17, copyHidden1, copyHidden2, copyHidden3, copyHidden4], .5, {delay:1.5, autoAlpha:0, ease:Power1.easeInOut})
				.to(frame4, .5, {autoAlpha:1, ease:Power1.easeInOut}, "-=.25")
				.to(frame5, .5, {autoAlpha:1, ease:Power1.easeInOut, onComplete:step5}, "+=1.25")
		
		};

		function step5() {
			tl5.to([frame4, frame5], .5, {autoAlpha:0, ease:Power1.easeInOut}, "+=2")
				.to(frame6, .5, {autoAlpha:1, ease:Power1.easeInOut, onComplete:step6})

		};

		function step6(){
			nodeToBlock([legalLink, legalLink2]);
			tl6.to([logo, frame6], .5, { autoAlpha:0, ease:Power1.easeInOut}, "+=2")
				.to(frameLegal, .5, {autoAlpha:1, ease:Power1.easeInOut})
				.to([frameLegal, legalLink, legalLink2], 9, {top: '-=594px', ease:Linear.easeNone}, "+=2")
				.to(frameLegal, 2, {onComplete:endStep})
				.call(nodeToNone, [[legalLink, legalLink2]], null);
		}

		function endStep(){
			// legalHolder.addEventListener("click", bgExitHandler, false);
			tle.to(legalHolder, .5, {autoAlpha:0, ease:Power1.easeInOut})
				.to([logo, frame6], .5, {autoAlpha:1, ease:Power1.easeInOut})
		};


				/// add event listener to clicktags
				legalLink.addEventListener("click", legalClicked, false);
				legalLink2.addEventListener("click", legal2Clicked, false);
				frameLegal.addEventListener("click", bgExitHandler, false);
				bgExit.addEventListener("click", bgExitHandler, false);
				



		 function legalClicked(e) {
		 		    e.stopPropagation();
		 			e.stopImmediatePropagation();
		 			e.preventDefault();
		            try {
		                   Enabler.exit('Legal link');
		                    //window.open(window.clickTag2);
		              
		            } catch (err) {
						//put backup link here if necessary
		            }

		            	//window.event.cancelBubble = true;
		 		

		    // console.log('legal clicked');
		}

		function legal2Clicked(e) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			try {
				Enabler.exit('Legal link 2');
			} catch (err) {
				console.error(err);
			}
			
		}

            function bgExitHandler(e) {
            		e.stopPropagation();
		 		e.stopImmediatePropagation();
		 		e.preventDefault();
            try {
                    Enabler.exit('Background Exit');
                    // window.open(window.clickTag);
            } catch (err) {
            		//put backup link here if necessary	
            }
           // window.event.cancelBubble = true;
		 	
    };

		
		var timer = setInterval(advance, 200);
		var phase = 0;

		
	};
})();