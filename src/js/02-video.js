import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_Time = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_Time, seconds);
}

function setStopTime() {
  const timeInStorage = localStorage.getItem(CURRENT_Time);
  if (timeInStorage) {
    player.setCurrentTime(localStorage.getItem(CURRENT_Time));
  }
}
setStopTime();
