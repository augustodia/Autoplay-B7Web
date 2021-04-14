
const intervalo = setInterval(() => {
  const play = document.querySelector('#vp');
  const jaTerminado = document.querySelector('.gdTkEe');
  if(play !== undefined) {
    if(!play == null) {
      play.src = play.src + '&autoplay=1';
      
    } else {
      clearInterval(intervalo);
    }
    if(jaTerminado == null) {
      init();
    }
    
    clearInterval(intervalo);
  }
},1000);


function init() {
  setInterval(() => {
    const terminado = document.querySelector('.gdTkEe');
    const nextLesson = document.querySelector('.nextLesson');
    const nextLessonBtn = document.querySelector('.nextLesson--btn');
    if(terminado !== null) {
      setTimeout(() => {
        if(nextLesson) {
          nextLesson.click();
        } else {
          nextLessonBtn.click();
        }
      }, 30000)
    }
  },5000);
}
