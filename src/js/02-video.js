import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
// ВАРИАНТ 1
// player.on('timeupdate', throttle(onPlay, 1000));

// ВАРИАНТ 2
player.on('play', function (e) {
  throttle = (onPlay(e), 1000);
  console.log('dgdsrg');
  console.log(e);
});

function onPlay({ seconds }) {
  localStorage.setItem(currentTime, seconds);
  console.log(seconds);
}

function setStopTime() {
  player.setCurrentTime(localStorage.getItem(currentTime));
}
setStopTime();
