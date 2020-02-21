var fs = require('fs'); 
var imageSize = require('image-size');  


describe('zipfile', function() {
	it('should be under 100kb', function() {

		var zip = fs.statSync('W10_AngelaMultitaskingOffer_300x250_Ban_V1.zip'); 
		var fileSizeInKB = zip['size']/1000;  

		expect(fileSizeInKB).not.toBeGreaterThan(200); 
	}); 
}); 

describe('static image', function() {
	it('should match dimensions of the creative', function() {
		
		var dimensions = imageSize('src/img/static.jpg'); 
			
		expect(dimensions.width).not.toBeGreaterThan(300); 
		expect(dimensions.height).not.toBeGreaterThan(250); 
	}); 
});


describe('assets', function() {

	

	//html build and imgs 
	var html = fs.readFileSync('dist/index.html', 'utf8'); 
	//array of all the assets in the img folder
	var assets = (assetList('src/img/')); 


	//counts the frequency of asset used in compiled html
	function count(str, subStr){
		var matches = str.match(new RegExp(subStr, "g"));
		return matches ? matches.length:0;
	}

	function assetList(dir, filelist) {
	  var files = fs.readdirSync(dir);

	  filelist = filelist || [];
	  files.forEach(function(file) {
	    if (fs.statSync(dir + file).isDirectory()) {
	      filelist = assetCheck(dir + file + '/', filelist);
	    }
	    else {
	      filelist.push(file);
	    }
	  }); 

	  return filelist; 

	};

	it('should reference all assets', function(){

		function assetCheck(){
			for(var i = 0; i < assets.length; i++){
							  	if(count(html, assets[i]) < 1 && assets[i] !== '.DS_Store' && assets[i] !== 'static.jpg') {
			  				  		//notifies the user in the console which assets are not used 
			  		// console.log(assets[i]); 
			  		return false; 
			  	}
			 }
		}

		expect(assetCheck()).not.toEqual(false);

	});

	it('should have no more than 15 assets', function(){
		
		expect(assets.length).toBeLessThan(16); 

	});

	it('should have no http calls', function(){
	
		expect(count(html, "http://")).toEqual(0); 
	
	});


});
