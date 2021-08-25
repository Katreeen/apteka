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
    arrows: false,
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
			  breakpoint: 420,
			  settings: {
          slidesToShow: 1,
				 
			  }
			}
		 ]
		//adaptiveHeight: true
  });
  

  $('.order_item_products_carousrl').slick({
		dots: false,
    arrows: false,
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
			  breakpoint: 420,
			  settings: {
          slidesToShow: 1,
				 
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


	

	
	
	
	
  $('.navbar-toggler').click(function () {
    $('.header_drop').slideDown();
  });
  $('.navbar-toggler-close').click(function () {
    $('.header_drop').slideUp();
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
	
  });