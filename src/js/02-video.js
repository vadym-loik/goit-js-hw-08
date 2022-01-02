import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function savedCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const throttledSavedCurrentime = throttle(onSaveTime, 1000);
player.on('timeupdate', throttledSavedCurrentime);

player.setCurrentTime(parsed);
