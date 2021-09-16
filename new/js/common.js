function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}


$(document).ready(function () {
	$('.main_carousel').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1
  });
  
  $('.navbar-toggler').click(function () {
    $('.header_menu').slideToggle();
  });

  $('.catalog_filter .filter_item_btn').on('click', function () {
    if ($(this).parents('.filter_item').hasClass('active')) {
      $(this).parents('.filter_item').removeClass('active');
      $(this).parents('.filter_item').find('.filter_item_dropdown').slideUp();
    } else {
      $('.filter_item').removeClass('active');
      $('.filter_item_dropdown').slideUp();
      $(this).parents('.filter_item').addClass('active');
      $(this).parents('.filter_item').find('.filter_item_dropdown').slideDown();
    }
    

  });


  $('.catalog_sort_btn').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.control_btn .btn-third').removeClass('active');
      $('.product_filter_sort').slideUp();
    } else {
      $(this).addClass('active');
      $('.product_filter_sort').slideDown();
    }
  });
  $('.catalog_filter_btn').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.control_btn .btn-third').removeClass('active');
      $('.catalog_filter').slideUp();
    } else {
      $(this).addClass('active');
      $('.catalog_filter').slideDown();
    }
  });

$('.read_more').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).text('Читать полностью');
    $('.read_more_wrap').slideUp();
  } else {
    $(this).addClass('active');
    $(this).text('Скрыть');
    $('.read_more_wrap').slideDown();
  }
  return false;
});
$('.section_description_item_title').on('click', function () {
  if ($(this).parent('.section_description_item').hasClass('active')) {
    $(this).parent('.section_description_item').removeClass('active');
    $(this).next('.section_description_item_text').slideUp();

  } else {
    $(this).parent('.section_description_item').addClass('active');
    $(this).next('.section_description_item_text').slideDown();
  }
});



  $('.promo_carousel').slick({
		dots: false,
    arrows: true,
    centerMode: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
    slidesToShow: 1,
    responsive: [
			{
			  breakpoint: 991,
			  settings: {
          slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
          slidesToShow: 2,
          centerMode: true,
          
				 
			  }
			}
		 ]
		//adaptiveHeight: true
  });
  

  $('.order_item_products_carousel').slick({
		dots: false,
    arrows: false,
    centerMode: false,
		infinite: false,
		speed: 500,
		cssEase: 'linear',
    slidesToShow: 2,
    responsive: [
			{
			  breakpoint: 991,
			  settings: {
          slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 420,
			  settings: {
          slidesToShow: 2,
          
				 
			  }
			}
		 ]
		//adaptiveHeight: true
  });


  $('.view_offers_carousel').slick({
		dots: false,
    arrows: false,
    // centerMode: true,
		infinite: false,
		speed: 500,
		cssEase: 'linear',
    slidesToShow: 1,
    variableWidth: true,
    // variableHeight: true
   
	});

	
  $('.view_offers_pin .pin_off_icon').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.pin_off_product').hide();
    } else {
      $('.view_offers_pin .pin_off_icon').removeClass('active');
      $('.pin_off_product').hide();
      $(this).addClass('active');
      $(this).next('.pin_off_product').show();
    }

  });

	// $('.catalog_carousel').slick({
	// 	dots: false,
	// 	arrows: false,
	// 	infinite: true,
	// 	speed: 1000,
	// 	slidesToShow: 1,
	// 	responsive: [
	// 		{
	// 		  breakpoint: 1920,
	// 		  settings: {
	// 				variableWidth: true,
	// 		  }
	// 		},
	// 		{
	// 		  breakpoint: 575,
	// 		  settings: {
	// 				variableWidth: false,
				 
	// 		  }
	// 		}
	// 	 ]
	// });
	// $('.catalog_image_carousel').slick({
	// 	dots: false,
	// 	//arrows: false,
	// 	prevArrow: $('.catalog_image_carousel_nav .s-prev'),
  //  	nextArrow: $('.catalog_image_carousel_nav .s-next'),
	// 	infinite: true,
	// 	speed: 1000,
	// 	fade: true,
	// 	slidesToShow: 1,
	// 	//adaptiveHeight: true
	// });
	// $('.catalog_image_carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	// 	$('.catalog_info .catalog_items .catalog_item_title').removeClass('active');
	// 	console.log(currentSlide);
	// 	if (currentSlide == '0') {
	// 		$('.catalog_info .catalog_items .catalog_item_title').first().addClass('active');
	// 	} else {
	// 		$('.catalog_info .catalog_items .catalog_item_title').last().addClass('active');
	// 	}
		
	// });
	



	
	//  $('.recomended_carousel').slick({
	// 	prevArrow: $('.card_recomended_nav .arrow-prev'),
	// 	nextArrow: $('.card_recomended_nav .arrow-next'),
	// 	dots: false,
	
	// 	infinite: false,
	// 	speed: 1000,
	// 	slidesToShow: 2,
	// 	responsive: [
	// 		{
	// 		  breakpoint: 1920,
	// 		  settings: {
				
	// 				slidesToShow: 2,
	// 		  }
	// 		},
			
	// 		{
	// 		  breakpoint: 767,
	// 		  settings: {
				
	// 				slidesToShow: 1,
				 
	// 		  }
	// 		},

	// 	 ]
	//  });
	
	//  $('.news_carousel').slick({
	// 	prevArrow: $('.news_carousel_nav .arrow-prev'),
	// 	nextArrow: $('.news_carousel_nav .arrow-next'),
	// 	dots: false,
	
	// 	infinite: true,
	// 	speed: 1000,
	// 	slidesToShow: 1,
	// 	variableWidth: true,
	// 	centerMode: true,
	// 	//adaptiveHeight: true
	// });
  $('.questions__item-top').click(function () {


    
    if ($(this).parent('.questions__item').hasClass('active')) {
      $(this).parent('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
  
    } else {
      $('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
      $('.questions__item').parent('.questions__item').removeClass('active').find('.questions__item-dropdown').slideUp();
      $(this).parent('.questions__item').toggleClass('active').find('.questions__item-dropdown').slideToggle()
    }
  });
  
  $('.favorite-icon').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('svg path').attr('d', 'M24.912 12.4719L14.7507 22.7041C14.5626 22.8936 14.3074 23 14.0414 23C13.7753 23 13.5201 22.8936 13.332 22.7041L2.90987 12.2092C2.2835 11.5784 1.79132 10.8258 1.46336 9.99713C1.1354 9.16849 0.978544 8.28125 1.00236 7.38955C1.02617 6.49784 1.23015 5.62037 1.60186 4.81067C1.97357 4.00098 2.50521 3.27603 3.16434 2.68007C5.7882 0.300835 9.89568 0.671758 12.3924 3.18591L14.0414 4.84639L15.9512 2.9232C16.5776 2.29246 17.3251 1.79684 18.148 1.46659C18.9709 1.13635 19.852 0.978394 20.7375 1.00237C21.623 1.02635 22.4944 1.23176 23.2985 1.60607C24.1025 1.98037 24.8225 2.51572 25.4143 3.17946C27.777 5.82163 27.4087 9.95779 24.912 12.4719Z');
     
    } else {
      $(this).addClass('active');
      $(this).find('svg path').attr('d', 'M14.7507 22.7041L24.912 12.4719C27.4087 9.95779 27.777 5.82163 25.4143 3.17946C24.8225 2.51572 24.1025 1.98037 23.2985 1.60607C22.4944 1.23176 21.623 1.02635 20.7375 1.00237C19.852 0.978394 18.9709 1.13635 18.148 1.46659C17.3251 1.79684 16.5776 2.29246 15.9512 2.9232L14.0414 4.84639L12.3924 3.18591C9.89568 0.671758 5.7882 0.300835 3.16434 2.68007C2.50521 3.27603 1.97357 4.00098 1.60186 4.81067C1.23015 5.62037 1.02617 6.49784 1.00236 7.38955C0.978544 8.28125 1.1354 9.16849 1.46336 9.99713C1.79132 10.8258 2.2835 11.5784 2.90987 12.2092L13.332 22.7041C13.5201 22.8936 13.7753 23 14.0414 23C14.3074 23 14.5626 22.8936 14.7507 22.7041Z');
    }
  });
	

	
	
	
	
  $('.navbar-toggler').click(function () {
    $('.header_drop').slideDown();
  });
  $('.navbar-toggler-close').click(function () {
    $('.header_drop').slideUp();
  });
  $('.nav-item-toggler').click(function () {
    $(this).next().css({ 'display': 'block' });
  });
  $('.item-back-link').click(function () {
    $(this).parents('.nav').css({'display' : 'none'});
  });
  $('.nav_category.item-back-link').click(function () {
    $('.dropdown_nav').css({'display' : 'none'});
    $(this).parents('.dropdown-menu').css({'display' : 'none'});
  });
  

		
	$("#product_sort").selectmenu();
  $(".o-filter").selectmenu();
	
  $(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });
  $(".phone").mask("+7 (999) 999 - 99 - 99");
	
  });