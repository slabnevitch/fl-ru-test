jQuery(function() {
	jQuery(document).ready(function() {
		// ibg class
			if('objectFit' in document.documentElement.style === false){
			  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

			    var image = el.querySelector('img');
			    el.style.backgroundImage = 'url("'+image.src+'")';
			    el.classList.add('ibg');
			    el.classList.remove('_fit');
	 		 });
			}
		// End ibg class

		var productSlider = $(".owl-carousel").owlCarousel({
			items: 1,
			// animateOut: 'fadeOut',
			// animateIn: 'flipInX',
			// slideTransition: 'fade',
			nav: true,
			navText: ['', ''],
			dots: false,
			URLhashListener:true,
			startPosition: 'URLHash'
		});

		productSlider.on('changed.owl.carousel', function(event) {
			$infoBlocks.fadeOut();
		});

		productSlider.on('translated.owl.carousel', function(event) {
			var currentHash = '#' + $(event.target)
				.find('.owl-item')
				.eq(event.item.index)
				.find('.product__slide')
				.attr('data-hash');

			$('.nav-product .button[href="'+currentHash+'"]')
				.addClass('active')
				.siblings()
				.removeClass('active');

		});

		// product-nav
			$('.nav-product .button').click(function(e) {

				$(this)
					.addClass('active')
					.siblings()
					.removeClass('active')
			});
		// END product-nav

		$('.dropdown').select2({
			minimumResultsForSearch: -1,
			width: '100%',
			minimumResultsForSearch: Infinity
		});

		// marks-handler
			var $infoBlocks = $('.info-product__item');

			$('.slider-product__mark').click(function() {
				var $th = $(this),
				mark = $th.attr('data-mark'),
				slide = $th.closest('.product__slide').attr('data-slide');

				$infoBlocks.each(function(ind, elem) {
					var $item = $(elem);

					if($item.attr('data-slide') === slide && $item.attr('data-mark') === mark){
						$item.fadeIn()
							.siblings()
							.fadeOut();
					}
				})
			});
		// END marks-handler
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

