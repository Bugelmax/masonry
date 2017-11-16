// $(document).ready(function() {

// 	var $container = $(".masonry-container");
// 	$container.imagesLoaded(function () {
// 		$container.masonry({
// 			columnWidth: ".item",
// 			itemSelector: ".item"
// 		});
// 		$(".item").imagefill();
// 	});

// 	//Цели для Яндекс.Метрики и Google Analytics
// 	$(".count_element").on("click", (function() {
// 		ga("send", "event", "goal", "goal");
// 		yaCounterXXXXXXXX.reachGoal("goal");
// 		return true;
// 	}));

// 	//SVG Fallback
// 	if(!Modernizr.svg) {
// 		$("img[src*='svg']").attr("src", function() {
// 			return $(this).attr("src").replace(".svg", ".png");
// 		});
// 	};

// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("#form").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
				
// 				$("#form").trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};
	
// });


// $(document).ready(function() {

// 	var $container = $(".masonry-container");
// 	$container.imagesLoaded(function () {
// 		$container.masonry({
// 			columnWidth: ".item",
// 			itemSelector: ".item"
// 		});
// 		$(".item").imagefill();
// 	});

// 	//Цели для Яндекс.Метрики и Google Analytics
// 	$(".count_element").on("click", (function() {
// 		ga("send", "event", "goal", "goal");
// 		yaCounterXXXXXXXX.reachGoal("goal");
// 		return true;
// 	}));

// 	//SVG Fallback
// 	if(!Modernizr.svg) {
// 		$("img[src*='svg']").attr("src", function() {
// 			return $(this).attr("src").replace(".svg", ".png");
// 		});
// 	};

// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("#form").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
				
// 				$("#form").trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};
	
// });



$(document).ready(function(){
	$(window).resize(function(){
        if ($(window).width() <= '960'){
            $('.masonry-container').find('.wider').removeClass('wider');
            $('.masonry-container').find('.item:nth-child(2),.item:nth-child(3),.item:nth-child(6),.item:nth-child(7),.item:last-child').addClass('wider');
        } 
		if ($(window).width() <= '735'){
            $('.masonry-container').find('.wider').removeClass('wider');
            $('.masonry-container').find('.item:nth-child(1),.item:nth-child(4), .item:nth-child(7),.item:last-child').addClass('wider');
        } 

		if ($(window).width() <= '500'){
            $('.masonry-container').find('.wider').removeClass('wider');
            $('.item').css('margin', '0 auto');
        }
	});
// 	$(window).resize(function(){
//         if ($(window).width() >= '960'){
//             $('.masonry-container').find('.wider').removeClass('wider');
//             $('.masonry-container').find('.item:nth-child(3), .item:nth-last-child(2)').addClass('wider');
//         } 
// 		if ($(window).width() >= '735'){
//             $('.masonry-container').find('.wider').removeClass('wider');
//             $('.masonry-container').find('.item:nth-child(2), .item:nth-last-child(5)').addClass('wider');
//         } 
// 		if ($(window).width() >= '500'){
//             $('.masonry-container').find('.wider').removeClass('wider');
//             $('.masonry-container').find('.item:nth-child(1), .item:last-child').addClass('wider');
//         }
// 	});
});