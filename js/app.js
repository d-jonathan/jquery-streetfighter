$(document).ready(function () {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function () {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function () {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1059px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '559px');
			}
		);
	})
	.mouseup(function () {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function ( event ) {
		if ( event.which == 88 ) {
			ryuCool();
		}
	});

});

function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function ryuCool () {
	//alert('x key is down');
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-cool').show();
}

