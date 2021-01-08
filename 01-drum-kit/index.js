window.addEventListener('keydown', function (keyboarEvent) {
  const audio = document.querySelector(`audio[data-key="${keyboarEvent.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyboarEvent.keyCode}"]`)
  if(!audio){return};
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active');
  }, 70);
})
