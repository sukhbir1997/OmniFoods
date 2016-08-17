//===================DISPLAY OF SECONDARY NAVBAR================================================================

$('.js--section-features').waypoint(function(direction){
	if(direction == "down"){
		$('nav').addClass('sticky');
	}else{
		$('nav').removeClass('sticky');
	}
},{
	offset:'60px;'
});

// ===============================SCROLL FUNCTIONS=========================================================
$(".js--scroll-features").click(function(){
	$("html,body").animate({scrollTop:$(".js--section-features").offset().top},1000);
});

$(".js--scroll-plans").click(function(){
	$("html,body").animate({scrollTop:$(".js--section-plan").offset().top},1000);
});

$(".js--scroll-plan").click(function(){
	$("html,body").animate({scrollTop:$(".js--section-plan").offset().top},1000);
});

$(".js--scroll-feature").click(function(){
	$("html,body").animate({scrollTop:$(".js--section-features").offset().top},1000);
});

$(".js--scroll-city").click(function(){
	$("html,body").animate({scrollTop:$(".js--section-city").offset().top},1000);
});

$(".js--scroll-work").click(function(){
	$("html,body").animate({scrollTop:$(".js--section-work").offset().top},1000);
});

// ======================================  ANIMATIONS ==============================================

$(".js--wp-1").waypoint(function(direction){
	$('.js--wp-1').addClass("animated fadeIn");
},{
	offset:'50%;'
});


$(".js--wp-2").waypoint(function(direction){
	$(".js--wp-2").addClass("animated fadeInUp");
},{
	offset:'50%;'
});


$(".js--wp-3").waypoint(function(direction){
	$(".js--wp-3").addClass("animated fadeIn");
},{
	offset:'50%;'
});


$(".js--wp-4").waypoint(function(direction){
	$(".js--wp-4").addClass("animated pulse");
},{
	offset:'50%;'
});
