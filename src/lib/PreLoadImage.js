export function preloadImages(urls, allImagesLoadedCallback){
	let loadedCounter = 0;
  let toBeLoadedNumber = urls.length;
  urls.forEach(function(url){
  	preloadImage(url, function(){
    	loadedCounter++;
			console.log('Number of loaded images: ' + loadedCounter);
      if(loadedCounter === toBeLoadedNumber){
      	allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback){
      let img = new Image();
      img.src = url;
      img.onload = anImageLoadedCallback;
  }
}

