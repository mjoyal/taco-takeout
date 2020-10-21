$(document).ready(function () {
  const timer = function (minutes) {
    console.log('timer started');
    let seconds;
    if (minutes === 1) {
      minutes = 0;
      seconds = 59;
    } else {
      minutes--;
      seconds = 60;
    }
    const interval = setInterval(function () {
      if (seconds === 1) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      if (minutes === 0 && seconds === 1) {
        $("#timer").html("Your order is ready!");
        clearInterval(interval);
      } else if (seconds < 10) {
        $("#timer").html(`Order confirmed! <br> Ready in ${minutes}:0${seconds}`);
      } else {
        $("#timer").html(`Order confirmed! <br> Ready in ${minutes}:${seconds}`);
      }
    }, 1000);
  };

  const link = `${window.location.href}`;
  const order_id = link[link.length - 1];

  const getOrderStatus = () => {
    $.ajax({
      url: `/order/${order_id}/status`,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        status(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };

  let interval = setInterval(getOrderStatus, 1000);
   const status = function (data) {
    if(data[0].order_started_at !== null) {
      $('#order-page').html(`<img src="/images/order-confirmed-taco.png" alt="taco icon">
      <h1 id="timer"></h1>`);
      timer(data[0].order_time);
      clearInterval(interval);
    }
   };
});
