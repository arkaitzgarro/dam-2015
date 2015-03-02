window.onload = function(){
    var loaded = false,
        player   = document.getElementById('player'),
        play     = document.getElementById('play'),
        pause    = document.getElementById('pause'),
        stop     = document.getElementById('stop'),
        start    = document.getElementById('start'),
        end      = document.getElementById('end'),
        backward = document.getElementById('backward'),
        forward  = document.getElementById('forward'),
        volume   = document.getElementById('volume'),
        progress = document.getElementById('progress'),
        playlist = document.getElementById('playlist');

    var canplayFn = function(e) {
        console.log('Video loaded');
        loaded = true;
        volume.value = player.volume * 100;
        progress.value = 0;
    };

    var playPauseFn = function(e) {
        if (loaded) {
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }
    };

    var playFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.play();
        }
    };

    var pauseFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.pause();
        }
    };

    var stopFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.pause();
            player.currentTime = 0;
        }
    };

    var startFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.currentTime = 0;
        }
    };

    var backwardFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.currentTime -= 10;
        }
    };

    var forwardFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.currentTime += 10;
        }
    };

    var endFn = function(e) {
        e.preventDefault();

        if (loaded) {
            player.currentTime = player.duration;
        }
    };

    var updateFn = function(e) {
        progress.value = player.currentTime / player.duration * 100;
    };

    var volumeFn = function() {
        if (loaded) {
            player.volume = this.value/100;
        }
    };

    var changeVideo = function(e) {
        var src = e.target.dataset.src;

        stopFn(e);

        if (Modernizr.video.h264) {
            player.src = src + '.mp4';
        } else {
            player.src = src + '.webm';
        }

        player.load();
        player.play();
    };

    player.addEventListener('click', playPauseFn, false);
    play.addEventListener('click', playFn, false);
    pause.addEventListener('click', pauseFn, false);
    stop.addEventListener('click', stopFn, false);
    start.addEventListener('click', startFn, false);
    backward.addEventListener('click', backwardFn, false);
    forward.addEventListener('click', forwardFn, false);
    end.addEventListener('click', endFn, false);
    player.addEventListener('canplay', canplayFn, false);
    player.addEventListener('timeupdate', updateFn, false);
    volume.addEventListener('input', volumeFn, false);
    playlist.addEventListener('click', changeVideo, false);

    function doFullScreen() {
        var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||    // alternative standard method
                                (document.mozFullScreen || document.webkitIsFullScreen);

        if (!isInFullScreen) {

            if (player.requestFullscreen) {
                player.requestFullscreen();
            }
            else if (player.mozRequestFullScreen) {
                player.mozRequestFullScreen();
            }
            else if (player.webkitRequestFullScreen) {
                player.webkitRequestFullScreen();
            }
        }
    }
};