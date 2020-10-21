const $timer = $('#timer');
  const timer = function (minutes) {
    let seconds;
    if(minutes === 1) {
      minutes = 0;
      seconds = 59;
    } else {
      minutes --;
      seconds = 60;
    }
    const timer = setInterval(function(){
      if(seconds === 1) {
        minutes --;
        seconds = 59;
      } else {
        seconds--;
      }
      const message = seconds < 10 ? `Order confirmed! <br> Ready in ${minutes}:0${seconds}` : `Order confirmed! <br> Ready in ${minutes}:${seconds}`;
      $timer.html(message);
      if(minutes === 0 && seconds === 0) {
        $timer.html('Your order is ready!');
        clearInterval(timer);
      }
    }, 1000);
  };

  module.exports = timer;

