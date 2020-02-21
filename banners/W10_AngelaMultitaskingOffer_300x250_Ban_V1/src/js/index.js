"use strict";

var nameSpace = craft || {};

(function() {

    var
    wrapper,
    bg1,
    bg2,
    bg3,
    f1_copy,
    f2_copy,
    f3_copy,
    f4_copy1,
    product,
    cta,
    disclaimer_box,
    rolloverActive,
    setValues,
    t,
    clickThrough,
    learnMore,
    learnMore1,
    learnMore2;


    nameSpace.init = function() {
        // Initialize any variables here

        wrapper = nameSpace.$('#wrapper');
        clickThrough = document.getElementById('click_through');

        bg1 = document.getElementById('bg1');
        bg2 = document.getElementById('bg2');
        bg3 = document.getElementById('bg3');
        f1_copy = document.getElementById('f1_copy');
        f2_copy = document.getElementById('f2_copy');
        f3_copy = document.getElementById('f3_copy');
        f4_copy1 = document.getElementById('f4_copy1');
        product = document.getElementById('product');
        cta = document.getElementById('cta');
        disclaimer_box = document.getElementById('disclaimer_box');

        learnMore = document.getElementById('learnmore');
        learnMore1 = document.getElementById('learnmore1');
        learnMore2 = document.getElementById('learnmore2'); 
        
        wrapper.addClass('show');

        setValues = { x: 0, y: 0, autoAlpha: 0 };
        t = TweenMax;
        rolloverActive = false,

        
        nameSpace.initClickTag();
        nameSpace.initClickTag2();
        nameSpace.initAnimation();
       
        if (nameSpace.useFallback()) {
            nameSpace.injectFallback();
        } else {
            nameSpace.startAnimation();
        }

        clickThrough.addEventListener('mouseover', ctaMouseover.bind(null, learnMore), false);
        clickThrough.addEventListener('mouseout', ctaMouseout.bind(null, learnMore), false);
    };

    function ctaMouseover(target){
        console.log('over');
            var specs = 'top 0.2s ease-in-out';
            target.style.transition = specs;
            target.style.webkitTransition = specs;
            target.style.top = "-28px";
        };

    function ctaMouseout(target){
        var specs = 'top 0s';
            target.style.transition = specs;
            target.style.webkitTransition = specs;
            target.style.top = "0px";
        };

    nameSpace.initClickTag = function() {

        clickThrough.onclick = function() {
            window.open(window.clickTag);
        };
    };

        nameSpace.initClickTag2 = function() {

        legal.onclick = function() {
            window.open(window.clickTag);
        };
    };

    nameSpace.injectFallback = function() {

        var body = document.body;

        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        var mydiv = document.createElement('div');
        mydiv.style.width = '300px';
        mydiv.style.height = '250px';
        mydiv.style.cursor = 'pointer';

        mydiv.addEventListener("click", function() {
            window.open(window.clickTag); 
        });

        var img = new Image();
        img.src = './img/static.jpg';

        mydiv.appendChild(img);
        document.body.appendChild(mydiv);

    };

    document.getElementById('legal').onmouseover =
        function(event) {
            {
                if (rolloverActive) {
                    
                    t.to(disclaimer_box, .5, { y: 0, ease: Power1.easeOut });
                }
            }
        };

    document.getElementById('legal').onmouseout =
        function(event) {
            {
                if (rolloverActive) {
                     t.to(disclaimer_box, .3, { y: 50, ease: Power3.easeOut });
                }
            }
        };


    nameSpace.initAnimation = function() {
        //setting starting parameters for all elements 
        t.set([cta], setValues);
        t.set([disclaimer_box], { y: "+=50" });


    };

    nameSpace.startAnimation = function() {
        // Frame 01 - product w/copy & highlight animation
        t.from(f1_copy, 1, { x: "-=300", ease: Power2.easeInOut, delay: 0});

        t.to(f1_copy, 1, { x: "+=300", ease: Power2.easeInOut, delay: 3.8,rotationZ: 0.01, force3D:true,transformPerspective:400 });
        t.to(bg1, 1, { x: "+=300", ease: Power2.easeInOut, delay: 4});

        t.from(f2_copy, 1, { x: "-=300", ease: Power2.easeInOut, delay: 4.2});
        t.from(bg2, 1, { x: "-=300", ease: Power2.easeInOut, delay: 4,rotationZ: 0.01, force3D:true,transformPerspective:400});

        t.to(f2_copy, 1, { x: "-=300", ease: Power2.easeInOut, delay: 7.8});
        t.to(bg2, 1, { x: "-=300", ease: Power2.easeInOut, delay: 8,rotationZ: 0.01, force3D:true,transformPerspective:400});

        t.from(f3_copy, 1, { x: "+=300", ease: Power2.easeInOut, delay: 8.2});
        t.from(bg3, 1, { x: "+=300", ease: Power2.easeInOut, delay: 8,rotationZ: 0.01, force3D:true,transformPerspective:400});

        t.to(f3_copy, 1, { x: "-=300", ease: Power2.easeInOut, delay: 12});
        t.to(bg3, 1, { x: "-=300", ease: Power2.easeInOut, delay: 12.2,rotationZ: 0.01, force3D:true,transformPerspective:400});

        t.from(f4_copy1, 1, { x: "-=300", ease: Power2.easeInOut, delay: 12.7});
        t.from(product, 1, { x: "+=300", ease: Power2.easeInOut, delay: 12.2,rotationZ: 0.01, force3D:true,transformPerspective:400});

        t.to(cta, 1, { autoAlpha: 1, ease: Power2.easeInOut, delay: 13.5, onComplete: function() { rolloverActive = true } });
          
      
       
    };


    nameSpace.onAnimationComplete = function() {
        // Log duration of timeline
        console.log('Animation Duration: ' + timeline.time() + 's');

        // Show a CTA or any animations outside main timeline
        //TweenMax.from( cta, 0.4, { y: '110%' } );
        //TweenMax.to( cta, 0.4, { opacity: 1 } );
    };
})();