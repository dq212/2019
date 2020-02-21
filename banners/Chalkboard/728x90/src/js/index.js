var nameSpace = TIAA || {};

(function() {
  "use strict";

  var timeline;
  var wrapper, clickThrough, logo, copy, cta, width, height, ids;

  nameSpace.init = function() {
    // // Initialize any variables here
    // wrapper = nameSpace.$( '#wrapper' );
    // clickThrough = document.getElementById('click_through');
    // logo = nameSpace.$( '#logo' );
    // copy = nameSpace.$( '#copy' );
    // cta = nameSpace.$( '#cta' );
    /* added by me */
    // Initialize any variables here
    ids = [];

    width = 728;
    height = 90;

    //SET IDs IN DOM TO GLOBAL VARIABLES
    var allElements = document.getElementsByTagName("*");
    //grabs all elements and makes them variables
    for (var q = 0; q < allElements.length; q++) {
      var el = allElements[q];
      if (el.id) {
        window[el.id] = document.getElementById(el.id);
        //separates what we don't want to hide initially
        if (
          el.id !== "wrapper" &&
          el.id !== "click_through" &&
          el.id !== "bg"
        ) {
          ids.push(el);
        }
      }
    }
    // ids.forEach(function(element) {
    // 	TweenMax.to(element, 0, {autoAlpha:0});
    //   });
    //
    TweenMax.set(["#copy-2", "#copy-3"], { x: -width, autoAlpha: 1 });
    TweenMax.set(["#copy-1", "#copy-2", "#img-mask", "#bg-img"], {
      autoAlpha: 1
    });
    TweenMax.set(["#logo", "#cta", "#code"], { autoAlpha: 0 });
    TweenMax.set(["#shape", "#shape2" ],{ scale: 1, autoAlpha: 0 });
    TweenMax.set("#copy-1", { y: -10 });

    wrapper = nameSpace.$("#wrapper");
    clickThrough = document.getElementById("click_through");
    cta = nameSpace.$("#cta");
    /* end added by me */

    wrapper.addClass("show");

    nameSpace.initClickTag();
    nameSpace.initAnimation();

    if (nameSpace.useFallback()) {
      nameSpace.injectFallback();
    } else {
      nameSpace.startAnimation();
    }

    click_through.onmouseover = function() {
      TweenMax.to("#cta", 0.2, {
        scale: 1.1,
        y: 0,
        transformOrigin: "85% 20%",
        z: 0.01,
        force3D: true,
        rotationZ: 0.01,
        transformPerspective: 400
      });
    };

    click_through.onmouseout = function() {
      TweenMax.to("#cta", 0.2, {
        scale: 1,
        force3D: true,
        z: 0.01,
        rotationZ: 0.01,
        transformPerspective: 400,
        y: 0
      });
    };
  };

  nameSpace.initClickTag = function() {
    clickThrough.onclick = function() {
      window.open(window.clickTag);
    };
  };

  nameSpace.injectFallback = function() {
    var body = document.body;

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    var anchor = document.createElement("a");
    anchor.style.cursor = "pointer";

    var img = new Image();
    img.src = "./img/static.jpg";

    anchor.appendChild(img);
    anchor.onclick = function() {
      window.open(window.clickTag);
    };
    document.body.appendChild(anchor);
  };

  nameSpace.initAnimation = function() {
    // TweenMax can be used to set css
    // It will even take care of browser prefixes
    // TweenMax.set(logo, {x:100, y:50, opacity:0});

    timeline = new TimelineMax({
      delay: 0.2,
      onComplete: nameSpace.onAnimationComplete
    });

    timeline.pause();
    //startBgImg();

	TweenMax.delayedCall(5.25, inkingAnimate);
	TweenMax.delayedCall(10.5, inkingAnimate2);
    timeline
	  .to("#copy-1", 0, { autoAlpha: 1 }, "+=0.8")
	  .fromTo("#big-a", 0.5, {scale:3, autoAlpha:0, x:-200}, {scale:1, autoAlpha:1,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut, x:0}, "+=.4")
      //.fromTo("#bg-color", 1, {y:450}, {y:370,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut}, "+=1")
      .to("#copy-1", 0.5, { x: -width }, "+=1.2")
      .to("#big-a", 0.5, { x:width }, "-=.5")
      .to("#copy-2", 0.5, { x: 0 })
      //.to("#big-a", 0.5, { scale: 0.125, x: -108, y: -32, autoAlpha: 0 }, "+=2")

	   .to("#copy-2", 0.5, { x: -width,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut }, "+=5")

		.to("#svg1", 0.5, {x:width,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut}, "-=.5")


	   .to("#copy-3", 0.5, { x: 0 })

       .to(["#img-mask"], 0.8, { x: -width,transformStyle: "preserve-3d", force3D:true, rotationZ: 0.01, ease:Cubic.easeInOut }, "+=3.25")
       .set(["#icon-1", "#copy-4"], { autoAlpha: 1 }, "-=0.8")

       .to(["#logo", "#cta", "#code"], 1, {autoAlpha: 1,ease: Cubic.easeInOut});
  };

  nameSpace.startAnimation = function() {
    // Code for animation
    timeline.play();  
  };

  nameSpace.onAnimationComplete = function() {
    // Log duration of timeline
    console.log("Animation Duration: " + timeline.time() + "s");

    // Show a CTA or any animations outside main timeline
    // TweenMax.from( cta, 0.4, { y: '110%' } );
    // TweenMax.to( cta, 0.4, { opacity: 1 } );
  };

  function inkingAnimate() {
    TweenMax.set("#shape", { autoAlpha: 1 });
    var svg1 = document.getElementById("svg1");
    var paths = svg1.getElementsByTagName("path");
    // holds the paths translated to points for the entire svg
    var svgPaths = [];

    for (var i = 0; i < paths.length; i++) {
     // length = paths[i].getTotalLength() + 2;
     // paths[i].style["stroke-dasharray"] = 10;
      svgPaths.push(length);
    }

    //console.log(svgPaths.length);
    // example of doing the animation for stroke-dashoffset and the 'marker' element
    // set or animate the marker to the starting point of the next stroke path to be animated prior to starting the two concurrent animations
    var tl = new TimelineMax();

    tl.fromTo(
      paths[0],
      0.15,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[1],
      0.15,
      { "stroke-dashoffset": 40, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[2],
      0.1,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[3],
      0.05,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[4],
      0.15,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[5],
      0.05,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[6],
      0.15,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[7],
      0.05,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );

    tl.fromTo(
      paths[8],
      0.15,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[9],
      0.05,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[10],
      0.1,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[11],
      0.05,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[12],
      0.15,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[13],
      0.15,
      { "stroke-dashoffset": 20, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[14],
      0.05,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[15],
      0.25,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );

    tl.fromTo(
      paths[16],
      0.35,
      { "stroke-dashoffset": 10, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
  }

  function inkingAnimate2() {
    TweenMax.set("#shape2", { autoAlpha: 1 });
    //var svg2 = document.getElementById("svg2");
   // var paths = svg2.getElementsByTagName("path");
    // holds the paths translated to points for the entire svg
    var svgPaths = [];

    for (var i = 0; i < paths.length; i++) {
      length = paths[i].getTotalLength() + 2;
      paths[i].style["stroke-dasharray"] = length + " " + length;
      svgPaths.push(length);
    }

    //console.log(svgPaths.length + " from 2");
    // example of doing the animation for stroke-dashoffset and the 'marker' element
    // set or animate the marker to the starting point of the next stroke path to be animated prior to starting the two concurrent animations
    var tl = new TimelineMax();

     tl.fromTo(
      paths[0],
      0.25,
      { "stroke-dashoffset": 0, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[1],
      0.15,
      { "stroke-dashoffset": 0, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );
    tl.fromTo(
      paths[2],
      0.1,
      { "stroke-dashoffset": 0, autoAlpha: 0 },
      { "stroke-dashoffset": 0, autoAlpha: 1 }
    );

  }
})();
