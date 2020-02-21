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
			// _elem.style.zIndex = _zpos; // ==> don't set z-index
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

			var copy1 = document.getElementById("copy-l1");
			var copy2 = document.getElementById("copy-l2");
			var copy3 = document.getElementById("copy-l3");
			var copy4 = document.getElementById("copy-l4");

			var frame4 = document.getElementById("frame-4");
			var frame5 = document.getElementById("frame-5");	
			var frame6 = document.getElementById("frame-6");						

			var frameLegal = document.getElementById("frame-legal");		
			var legalHolder = document.getElementById("legal-holder");		
			var legalLink = document.getElementById("legal-link");
			var legalLink2 = document.getElementById("legal-link2");		

			var copyL1Txt = document.getElementById("copy-l1-txt");
			var copyL2Txt = document.getElementById("copy-l2-txt");		
			var copyL2bTxt = document.getElementById("copy-l2b-txt");
			var copyL3Txt = document.getElementById("copy-l3-txt");
			var copyL4Txt = document.getElementById("copy-l4-txt");
			var copyL4bTxt = document.getElementById("copy-l4b-txt");

			var copyWhite2 = document.getElementById("copy-white2");
			var copyWhite4 = document.getElementById("copy-white4");

			var copyWhite2Comma = document.getElementById("copy-white2-comma");
			var copyWhite4Comma = document.getElementById("copy-white4-comma");	

			var logo = document.getElementById("logo");
			var hiddenCopy = document.getElementById("hiddenCopy");
			var markets = document.getElementById("markets");
			var diversify = document.getElementById("diversify");

			var tl1 = new TimelineMax();
			var tl2 = new TimelineMax();
			var tl3 = new TimelineMax();
			var tl4 = new TimelineMax();
			var tl5 = new TimelineMax();
			var tl6 = new TimelineMax();
			var tle = new TimelineMax();

			setPos(copy1, "visible", 500, 0, 2);
			setPos(copy2, "visible", -250, 23, 3);
			setPos(copy3, "visible", 500, 45, 4);
			setPos(copy4, "visible", 160, 68, 5);
	

			setPos(frame4, "hidden", 0, 0, 8);
			setPos(frame5, "hidden", 0, 0, 9);
			setPos(frame6, "hidden", 0, 0, 10);

			setPos(frameLegal, "hidden", 0, 4, 1002);
			setPos(legalLink, "visible", 368, 206, 1003);
			setPos(legalLink2, "visible", 297, 236, 1004);
			setPos(legalHolder, "visible", 1, 1, 1001)

			adBox.style.visibility = "visible";
			TweenMax.set(logo, {autoAlpha:0});

			setPos(hiddenCopy, "hidden", 0, 0, 12);
			setPos(markets, "hidden", 198, 23, 13);
			setPos(diversify, "hidden", 466, 46, 14);


		function advance(){

			clearInterval(timer);
			
			if(phase === 0){
			
				var t = TweenMax.to(adBox, 3, {onComplete:step2});
				tl1.to(copy1, 22, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy2, 17, {left:1413, ease:Power0.noEase},"allTxt")
					.to(copy3, 27, {left:-913, ease:Power0.noEase},"allTxt")
					.to(copy4, 16, {left:1213, ease:Power0.noEase},"allTxt")
			
				}
		};

		function step2(){	
				tl1.kill();
				var copy1w = copy1.offsetLeft;
				var copy2w = copy2.offsetLeft;
				var copy3w = copy3.offsetLeft;
				var copy4w = copy4.offsetLeft;
			

				tl2.to(copy1, 22, {left:copy1w, ease:Power1.easeInOut},"allTxt2")
					.to(copy2, 28, {left:copy2w, ease:Power1.easeInOut},"allTxt2")
					.to(copy3, 32, {left:copy3w, ease:Power1.easeInOut},"allTxt2")
					.to(copy4, 26, {left:copy4w, ease:Power1.easeInOut},"allTxt2")
					// .to(copy5, 22, {left:copy5w, ease:Power1.easeInOut},"allTxt2")
					// .to(copy6, 24, {left:copy6w, ease:Power1.easeInOut},"allTxt2")

					.to(copyWhite2Comma, .75, {autoAlpha:0},"allTxt2")
					.to(copyWhite4Comma, .75, {autoAlpha:0},"allTxt2")

					.to(copyL1Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL2Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL2bTxt, .75, {autoAlpha:0},"allTxt2")

					.to(copyL3Txt, .75, {autoAlpha:0},"allTxt2")
		
					.to(copyL4Txt, .75, {autoAlpha:0},"allTxt2")
					.to(copyL4bTxt, .75, {autoAlpha:0, onComplete:step3},"allTxt2")
					.to(copyWhite2, .75, {autoAlpha:0},"allTxt2")
					.to(copyWhite4, .75, {autoAlpha:0},"allTxt2")
					.to(markets, .75, {autoAlpha:1},"allTxt2")
					.to(diversify, .75, {autoAlpha:1},"allTxt2")
					//
		
					colorChange(copyWhite2, 0.75, 'linear', 0);
					colorChange(copyWhite4, 0.75, 'linear', 0);

					
		};

		function step3() {
			 // console.log('made it here....');
			 	tl2.kill();
		// Android-specific Media Query
					var ua = navigator.userAgent.toLowerCase();
					var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
					var isIphone = ua.indexOf("iphone") > -1;

		if (isAndroid) {
		
			tl3.to([diversify, markets], .6, {autoAlpha:1})//this is just to pause
				.to(markets, .6, {left:110, top:23, ease:Power1.easeInOut},"allTxt3")
				.to(diversify, .6, {left:48, top:50, ease:Power1.easeInOut}, "allTxt3")
				.to(hiddenCopy, .6, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden1, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden2, 0, {left:205}, "allTxt3")
				// .to(copyHidden2, .4, { autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden3, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				 .to(logo, .5, {autoAlpha:1, ease:Power1.easeInOut, onComplete:step4 })
				

			} else if(isIphone){
				
				// TweenMax.set(copyHidden1, {left:51, top:21});
				// TweenMax.set(copyHidden2, {left:199, top:21});
				// TweenMax.set(copyHidden3, {left:51, top:47});

			tl3.to([diversify, markets], .6, {autoAlpha:1})//this is just to pause
				.to(markets, .6, {left:110, top:23, ease:Power1.easeInOut},"allTxt3")
				.to(diversify, .6, {left:48, top:50, ease:Power1.easeInOut}, "allTxt3")
				.to(hiddenCopy, .6, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden1, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden2, 0, {left:200}, "allTxt3")
				// .to(copyHidden2, .4, { autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden3, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				.to(logo, .5, {autoAlpha:1, ease:Power1.easeInOut, onComplete:step4 })

			}
			else {

			//tl3.to([copy2, copy4], .5, {autoAlpha:1})//this is just to pause
			tl3.to([diversify, markets], .6, {autoAlpha:1})
				// .to(copy2, .5, {left:198, top:22, ease:Power1.easeInOut},"allTxt3")
				// .to(copy4, .5, {left:-1, top:49, ease:Power1.easeInOut}, "allTxt3")
				.to(markets, .6, {left:110, top:23, ease:Power1.easeInOut},"allTxt3")
				.to(diversify, .6, {left:48, top:50, ease:Power1.easeInOut}, "allTxt3")
				.to(hiddenCopy, .6, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden1, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden2, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				// .to(copyHidden3, .4, {autoAlpha:1, ease:Power1.easeInOut, delay:.2}, "allTxt3")
				 .to(logo, .5, {autoAlpha:1, ease:Power1.easeInOut, onComplete:step4 }, "allTxt3")
				
			}
				//
		}

		function step4() {
			//tl4.to([copy2, copy4, copyHidden1, copyHidden2, copyHidden3], .5, {delay:1.5, autoAlpha:0, ease:Power1.easeInOut})
			tl4.to([hiddenCopy, diversify, markets], .5, {delay:1.5, autoAlpha:0, ease:Power1.easeInOut})
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
				.to([frameLegal, legalLink, legalLink2], 6, {y: '-=267px', ease:Linear.easeNone, rotationz:.001}, "+=2")	
				.to(frameLegal, 2, {onComplete:endStep})
				.call(nodeToNone, [[legalLink, legalLink2]], null);
		};

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
		};

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