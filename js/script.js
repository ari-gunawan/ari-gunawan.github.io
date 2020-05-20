// EVENT PADA SAAT LINK DI KLIK

// $('.page-scroll').on('clik', function(e){
    
// });

$('.lightbox').click(function() {
		var title = $(this).attr('title');
		var src = $(this).children('img').attr("src").replace('/240/140/', '/480/280/');
 
		var alt = $(this).children('img').attr("alt") || "";
		var $img = $('<img class="center-block img-responsive" alt="' + alt + '" src="' + src + '">');
		$('.modal-title').html(title);
		$('.modal-body').html('<p>Loading...</p>');
		$('#lightbox').modal({
				show: true
		});
		$img.load(function() {
				$('.modal-body').html($img);
		})
});