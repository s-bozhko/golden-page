$(document).ready(function(){
	$('body').on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока, на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1200 мс
		$('body, html').animate({scrollTop: top}, 1200);
	});
});