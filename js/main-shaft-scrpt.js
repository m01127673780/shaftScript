 $(function() {

"use strict"; // Start of use strict


 
	/*start mag nfcal puoup  video*/
	$('.video').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://www.youtube.com/watch?v=0zZtzeXycW4/embed/video/%id%'
        
      }
    }
  }
  
  
});
 /*End mag nfcal puoup  video*/
	
	


	
	
	
//-----------------End statestk--------------------------//	
	
	
/*start shufil portofile */
$(".buttons button").click(function() {
	
	$(this).addClass("active-btn").siblings().removeClass("active-btn");
	
	var cssFilter = $(this).attr('id');
	
    if( cssFilter === "all" ) {
	$(".images > div").fadeIn();
	$(".red-more").not($(".red-more").fadeIn(".red-more").fadeOut());
 	} else {
 	 $(".images > div ") .fadeOut(500);
		
	 $(".images").contents().filter("." + cssFilter).fadeIn(500);

	}
	

});
	$(".red-more").fadeOut();
 	$(".more").click(function() {
	$(".red-more").fadeToggle(100);
});
/*End shufil portofile */
	
	//--------------//


 
	
	
	 
});






 