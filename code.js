window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        audiojs.events.ready(function() {
		    var as = audiojs.createAll();
		  });

        $(".button").click(function() {
			if ($(this).hasClass("playbutton")) { // switch to pause
				$(this).attr("src", "pause.png");
				$(this)[0].classList.add("pausebutton");
				$(this)[0].classList.remove("playbutton");
				$(".audiojs").css("display", "block");
				var url = $(this).attr("data-url");
				$("#audioPlayer").attr("src", url);
				$('.audiojs').each(function(index) {
				    var container = $(this);
				    var audioPlayer = container.find('audio');
				    audiojs.instances["audiojs0"].play();
				});
			} else if ($(this).hasClass("pausebutton")) { // switch to play
				$(this).attr("src", "play.png");
				$(this)[0].classList.add('playbutton');
				$(this)[0].classList.remove('pausebutton');
				$('.audiojs').each(function(index) {
				    var container = $(this);
				    var audioPlayer = container.find('audio');
				    audiojs.instances["audiojs0"].pause();
				});
			}
		});
    } else {
        // jQuery is not loaded
        console.log("JQuery isn't working.");
    }
}