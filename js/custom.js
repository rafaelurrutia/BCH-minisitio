function fixTitle() {
    $('.item-demo').each(function () {
        var $this = $(this);
        var offset = $this.offset().top;
        var offset = offset - 10;
        var scrollTop = $(window).scrollTop();

        if (scrollTop > offset) {
         /*   console.log('funcionaa');*/
            $this.find('.content-btns-login').addClass('fixed');

        } else {
            $this.find('.content-btns-login').removeClass('fixed');
        }
    });
}

$(document).ready(function(){
	$(window).scroll(fixTitle);

    $('[data-toggle="popover"]').popover({
    	html : 'true',
        trigger: 'hover'
    	
    });

//    $('body').on('click', function (e) {
//	    $('[data-toggle="popover"]').each(function () {
//	        //the 'is' for buttons that trigger popups
//	        //the 'has' for icons within a button that triggers a popup
//	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
//	            $(this).popover('hide');
//	        }
//	    });
//	});

    $('.transicion, .nav li a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	})
   
    //scrollTop
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


     $('.bt-link').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -100
        }, 500);

$('#box-link').each(function() {
   
var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 6){
        clearInterval(interval);
    }
        if ($('#box-link').hasClass("blink") ) {
      
            $( "#box-link" ).removeClass( "blink" );
        } else {
            $( "#box-link" ).addClass( "blink" );
        }   
}, 500);  

});

        return false;



    });   






    $('.transicion, .nav li a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    })
	$('.carousel').carousel({
	  interval: 10000
	});
	//console.log(location.hash);
    location.hash && $(location.hash + '.collapse').collapse('show');

    $(".myBoxUrl").click(function() {
      window.location = $(this).find("a.urlLink").attr("href"); 
      return false;
    });

    //Tabs
    $('#myTab a').click(function (e) {
        //alert('click');
      e.preventDefault();
      $(this).tab('show');
    });

  



$( ".bt-link" ).click(function() {

 //  $( ".box-link" ).slideToggle( "slow", function() {});  
});



    //$('iframe').find('.small-comentarios').css( {"font-size", "14px"});

    // check cookie
    var visited = $.cookie("visited")


    //if (visited == null) {

        $('.help_layer').show();
        $.cookie('visited', 'yes'); 
        //alert($.cookie("visited"));          
    //}
    
    // set cookie
    $.cookie('visited', 'yes', { expires: 1, path: '/' });
    $('.btn-comenzar').click(function(){
        $('.help_layer').fadeOut(300);
        //$('body').removeClass("noScroll");

    });


});
