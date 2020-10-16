$(document).ready(function() {
	//animation form
	if($(window).width() > 1100) {
		jQuery(window).scroll(function() { 
		    var the_top = jQuery(document).scrollTop();
		    if (the_top > 710 && the_top < 1295) {
		        jQuery('#animation-form').addClass('fixed-form');
		        jQuery('#animation-form').removeClass('fixed-form-2');
		    }
		    else if (the_top > 1295 && the_top < 1350) {
		    	jQuery('#animation-form').removeClass('fixed-form');
		    	jQuery('#animation-form').addClass('fixed-form-2');
		    }
		    else {
		        jQuery('#animation-form').removeClass('fixed-form');
		    }
		});
	} else {
	  // stop animation
	}

	//slider img-box open
	if($(window).width() > 580 && $(window).width() < 1800) {
	$(".photo-slide--wrapp").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
	  		if( $(this).hasClass('main-img-block') ) {
	  			src = img.attr('src');
	  		} else {
	  			rel = $(this).parent(".photo-slide--inner");
	  			img2 = rel.children(".main-img-block");
	  			src = img2.attr('src');
	  		}

		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='img/icons/icon-close.png' class='popup_close' />"+ //закрывающая иконка
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(400); // Медленно выводим изображение
		$(".popup").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(400);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 400);
		});
	});	
	} else {
		// crush slider img-box open
	};



	//service page tabs
	$('#service__active_1').click(function(e) {
		$('.page-icon-service').removeClass('active-icon');
		$('.page-icon-service-1').addClass('active-icon');

		$('#service__active_2').removeClass('service__active');
		$('#service__active_1').addClass('service__active');

		$('#service__active_item_2').hide();
		$('#service__active_item_1').fadeIn(200);
	});

	$('#service__active_2').click(function(e) {
		$('.page-icon-service').removeClass('active-icon');
		$('.page-icon-service-2').addClass('active-icon');

		$('#service__active_1').removeClass('service__active');
		$('#service__active_2').addClass('service__active');

		$('#service__active_item_1').hide();
		$('#service__active_item_2').fadeIn(200);
	});


	//service inner page tabs
	$('.label-left').click(function(e) {
		$('.feedback-icon').removeClass('active-icon');
		$('.feedback-icon-1').addClass('active-icon');
		$('.label-right').removeClass('label-active');
		$(this).addClass('label-active');
	});
	$('.label-right').click(function(e) {
		$('.feedback-icon').removeClass('active-icon');
		$('.feedback-icon-2').addClass('active-icon');
		$('.label-left').removeClass('label-active');
		$(this).addClass('label-active');
	});

	//courses page tabs
	$('#service__active_4').click(function(e) {
		$('.page-icon-service').removeClass('active-icon');
		$('.page-icon-service-4').addClass('active-icon');

		$('.service-tab-inner').removeClass('service__active');
		$('#service__active_4').addClass('service__active');

		$('.service-container').hide();
		$('#service__active_item_4').fadeIn(200);
	});
	$('#service__active_5').click(function(e) {
		$('.page-icon-service').removeClass('active-icon');
		$('.page-icon-service-5').addClass('active-icon');

		$('.service-tab-inner').removeClass('service__active');
		$('#service__active_5').addClass('service__active');


		$('.service-container').hide();
		$('#service__active_item_5').fadeIn(200);
	});
	$('#service__active_6').click(function(e) {
		$('.page-icon-service').removeClass('active-icon');
		$('.page-icon-service-6').addClass('active-icon');

		$('.service-tab-inner').removeClass('service__active');
		$('#service__active_6').addClass('service__active');


		$('.service-container').hide();
		$('#service__active_item_6').fadeIn(200);
	});		

	//menu actions
	$('#open_service_menu').click(function(e) {
		event.preventDefault();

		$(this).toggleClass('active-link');
		$('#service_dropp_item').fadeToggle(200);

		$('#open_course_menu').removeClass('active-link');
		$('#course_dropp_item').fadeOut(100);		
	});

	$('#open_course_menu').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active-link');
		$('#course_dropp_item').fadeToggle(200);

		$('#open_service_menu').removeClass('active-link');
		$('#service_dropp_item').fadeOut(100);		
	})	

	$('#open_service_menu-2').click(function(e) {
		event.preventDefault();

		$(this).toggleClass('active-link');
		$('#service_dropp_item-2').fadeToggle(200);

		$('#open_course_menu').removeClass('active-link');
		$('#course_dropp_item').fadeOut(100);		
	});

	$('#open_course_menu-2').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active-link');
		$('#course_dropp_item-2').fadeToggle(200);

		$('#open_service_menu-2').removeClass('active-link');
		$('#service_dropp_item-2').fadeOut(100);		
	});	

	$('.dropped__row__close').click(function(e) {
		$('#service_dropp_item').fadeOut(100);
		$('#service_dropp_item-2').fadeOut(100);
		$('#course_dropp_item').fadeOut(100);
		$('#course_dropp_item-2').fadeOut(100);

		$('#open_service_menu').removeClass('active-link');
		$('#open_service_menu-2').removeClass('active-link');
		$('#open_course_menu').removeClass('active-link');
		$('#open_course_menu-2').removeClass('active-link');
	});

	$('.mobile-menu-icon').click(function(e) {
		$('.main-nav').fadeIn(200);
		$('body').addClass('disabled-scroll');
	});
	$('.close-menu').click(function(e) {
		$('body').removeClass('disabled-scroll');
		$('.main-nav').fadeOut(200);
	});	


	//init slick carusel
	$('.slick-slider').slick({
	  arrows: false,
	  dots: true,
	 });

	$('.timetable-slider').slick({
	  dots: true,
	  arrows: true,
	 });

	$('.photo-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerMode: true,
	  dots: false,
	  arrows: true,	
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	  		dots: false,
	  		arrows: true,		        
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	        slidesToShow: 1,
	  		dots: false,
	  		arrows: true,		        
	      }
	    }
	  ]	    
	 });

	$('.diplom-slider').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  responsive: [
	    {
	      breakpoint: 1201,
	      settings: {
	        slidesToShow: 1,
	  		dots: false,
	  		arrows: true,		        
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	        slidesToShow: 1,
	  		dots: false,
	  		arrows: true,		        
	      }
	    }
	  ]	    
	 });	

	//actions tab
	$('.action-tab-1').click(function() {
		$('.action-tab-inner').fadeOut(100);
		$('.action-tab-inner-1').fadeIn(100);		
	});
	$('.action-tab-2').click(function() {
		$('.action-tab-inner').fadeOut(100);
		$('.action-tab-inner-2').fadeIn(100);		
	});	
	$('.action-tab-3').click(function() {
		$('.action-tab-inner').fadeOut(100);
		$('.action-tab-inner-3').fadeIn(100);		
	});	
	$('.action-tab-4').click(function() {
		$('.action-tab-inner').fadeOut(100);
		$('.action-tab-inner-4').fadeIn(100);		
	});	
	$('.action-tab-5').click(function() {
		$('.action-tab-inner').fadeOut(100);
		$('.action-tab-inner-5').fadeIn(100);		
	});	

	//vacancies tab
	$('.action-vacancies-tab-1').click(function() {
		$('.action-vacancies-tab-inner').fadeOut(100);
		$('.action-vacancies-inner-1').fadeIn(100);		
	});
	$('.action-vacancies-tab-2').click(function() {
		$('.action-vacancies-tab-inner').fadeOut(100);
		$('.action-vacancies-inner-2').fadeIn(100);		
	});	
	$('.action-vacancies-tab-3').click(function() {
		$('.action-vacancies-tab-inner').fadeOut(100);
		$('.action-vacancies-inner-3').fadeIn(100);		
	});	
	$('.action-vacancies-tab-4').click(function() {
		$('.action-vacancies-tab-inner').fadeOut(100);
		$('.action-vacancies-inner-4').fadeIn(100);		
	});	
	$('.action-vacancies-tab-5').click(function() {
		$('.action-vacancies-tab-inner').fadeOut(100);
		$('.action-vacancies-inner-5').fadeIn(100);		
	});					
});


//certificate text animation
$(document).ready(function(){
	///certificate
	$('.sertificate_img-1').on('click', function() {
		$('.certificate_inner_1').fadeIn(200);

	 $.fn.animate_Text = function() {
	  var string = this.text();
	  return this.each(function(){
	   var $this = $(this);
	   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
	   $this.find('span.new').each(function(i, el){
	    setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
	   });
	  });
	 };

	 $('#example').css('visibility', 'hidden');

	 function startAnimation() {
	 	$('#example').css('visibility', 'visible'),
	 	$('#example').animate_Text()
	 };

	 setTimeout( 
	 	startAnimation
 	, 0); 

	 $.fn.animate_Text2 = function() {
	  var string = this.text();
	  return this.each(function(){
	   var $this = $(this);
	   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
	   $this.find('span.new').each(function(i, el){
	    setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
	   });
	  });
	 };

	 $('#example2').css('visibility', 'hidden');

	 function startAnimation2() {
	 	$('#example2').css('visibility', 'visible'),
	 	$('#example2').animate_Text2()
	 };

	 setTimeout( 
	 	startAnimation2
 	, 2000); 

	 $.fn.animate_Text3 = function() {
	  var string = this.text();
	  return this.each(function(){
	   var $this = $(this);
	   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
	   $this.find('span.new').each(function(i, el){
	    setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
	   });
	  });
	 };

	 $('#example3').css('visibility', 'hidden');

	 function startAnimation3() {
	 	$('#example3').css('visibility', 'visible'),
	 	$('#example3').animate_Text3()
	 };

	 setTimeout( 
	 	startAnimation3
 	, 6000);	 


	 $.fn.animate_Text4 = function() {
	  var string = this.text();
	  return this.each(function(){
	   var $this = $(this);
	   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
	   $this.find('span.new').each(function(i, el){
	    setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
	   });
	  });
	 };

	 $('#example4').css('visibility', 'hidden');

	 function startAnimation4() {
	 	$('#example4').css('visibility', 'visible'),
	 	$('#example4').animate_Text4()
	 };

	 setTimeout( 
	 	startAnimation4
 	, 9500);

	 $.fn.animate_Text5 = function() {
	  var string = this.text();
	  return this.each(function(){
	   var $this = $(this);
	   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
	   $this.find('span.new').each(function(i, el){
	    setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
	   });
	  });
	 };

	 $('#example5').css('visibility', 'hidden');

	 function startAnimation5() {
	 	$('#example5').css('visibility', 'visible'),
	 	$('#example5').animate_Text5()
	 };

	 setTimeout( 
	 	startAnimation5
 	, 9700);	 

 	});				
});


