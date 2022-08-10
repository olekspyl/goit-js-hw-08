
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const KEY = "videoplayer-current-time";
const savedTime = localStorage.getItem(KEY);

    if (savedTime) {
        player.setCurrentTime(savedTime);
    } 

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay (time) {
    let savedPausedPlayerTime = time.seconds;
    localStorage.setItem(KEY, savedPausedPlayerTime);
};











