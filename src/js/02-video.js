import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
