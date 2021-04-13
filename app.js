
const intervalo = setInterval(() => {
  const play = document.querySelector('#vp');
  if(play !== undefined) {
    play.src = play.src + '&autoplay=1'
    clearInterval(intervalo);
  }
},1000);

