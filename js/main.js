
function parallax(){
	var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
	var prlx_lyr_0 = document.getElementById('prlx_lyr_0');
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
	prlx_lyr_4.style.left = 800 -(window.pageYOffset / 4)+'px';
	prlx_lyr_0.style.right = 600 -(window.pageXOffset / 4)+'px';
	prlx_lyr_1.style.top = 710 -(window.pageYOffset / 4)+'px';
	prlx_lyr_2.style.top = 1420 -(window.pageYOffset / 4)+'px';
}
window.addEventListener("scroll", parallax, false);

$( document ).ready(function() {
	$("#image").empty();		
	$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
		{
			  tags: "catholic students",
			  tagmode: "any",
			  format: "json"
		}, function(data){
			$.each(data.items, function(i, item){
			
				$('<img/>').attr("src", item.media.m).appendTo('#images');
				if(i==4) return false;
		});	  
	});
	parallax();
	
});
