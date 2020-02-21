var CRAFTWW = CRAFTWW || {};

(function() {
	CRAFTWW.checkFallback = function() {
		if ( useFallback() ) {
			var body = document.body;

			while ( body.firstChild ) {
				body.removeChild( body.firstChild );
			}

			var anchor = document.createElement("a");
				anchor.href = "#";
				anchor.onclick = function() {

				Enabler.exit('Background Exit');
			    window.open(window.clickTag);
						return false;
					};

			var img = new Image();
				img.src = './static.jpg';
				img.style.border = '0';

			anchor.appendChild( img );
			document.body.appendChild( anchor );
		} else {
			this.startAd();
		}

		function useFallback() {
			var rv = -1;
			var ua = navigator.userAgent;
			var re = new RegExp( "MSIE ([0-9]{1,}[\.0-9]{0,})" );

			if ( re.exec( ua ) != null )
				rv = parseFloat( RegExp.$1 );

			if ( rv > 0 && rv <= 9 ) 
				return true;
			else
				return false;
		}
	};
})();