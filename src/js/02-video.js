
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const SAVED_TIME = localStorage.getItem("videoplayer-current-time");
let parsedTime;

function checkTime(SAVED_TIME) {
if (SAVED_TIME) {
    parsedTime = JSON.parse(SAVED_TIME);
} 
}

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", SAVED_TIME)
};

checkTime(SAVED_TIME);
player.on('timeupdate', throttle(onPlay, 1000));

player
    .setCurrentTime(parsedTime.seconds)
    .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});







