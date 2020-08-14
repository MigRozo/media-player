import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const vid = document.querySelector('video');
const btnTogglePlay = document.getElementById('toggle-play');
const btnToggleMute = document.getElementById('toggle-mute');

const player = new MediaPlayer({ el: vid, plugins: [ /*new AutoPlay()*/ ] });

btnTogglePlay.onclick = _ => player.togglePlay();
btnToggleMute.onclick = _ => player.toggleMute();