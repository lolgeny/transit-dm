$(() => {
	$('.social .bar').hide();

	var f = false, t = false, i = false;
	$('.social .fbook.icon').hover(() => {
  	if (!f) {
    	f = true;
	  	$('.social .fbook.bar').show();
    	$('.social .fbook.bar').css('width', '5px');
  		$('.social .fbook.bar').animate({width: '200px'}, 400, 'swing', () => {$('.social .fbook.bar').css('display', 'inline-block'); f = false;});
    }
  }, () => {
  	$('.social .fbook.bar').animate({width: 'hide'});
  });

  $('.social .twitter.icon').hover(() => {
  	if (!t) {
    	t = true;
	  	$('.social .twitter.bar').show();
    	$('.social .twitter.bar').css('width', '5px');
  		$('.social .twitter.bar').animate({width: '200px'}, 400, 'swing', () => {$('.social .twitter.bar').css('display', 'inline-block'); t = false;});
    }
  }, () => {
  	$('.social .twitter.bar').animate({width: 'hide'});
  });

  $('.social .insta.icon').hover(() => {
  	if (!i) {
	    i = true;
  		$('.social .insta.bar').show();
    	$('.social .insta.bar').css('width', '5px');
  		$('.social .insta.bar').animate({width: '200px'}, 400, 'swing', () => {$('.social .insta.bar').css('display', 'inline-block'); i = false;});
    }
  }, () => {
  	$('.social .insta.bar').animate({width: 'hide'});
  });
});
