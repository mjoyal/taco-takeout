$(document).ready(function () {

  const link = `${window.location.href}`;
  const order_id = link[link.length - 1];

  const getOrderStatus = () => {
    $.ajax({
      url: `/order/${order_id}/status`,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        status(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };

  let interval = setInterval(getOrderStatus, 1000);
  // let interval = function () {setInterval(() => {
  //   getOrderStatus(order_id);
  // }, 1000)};

/* <i class="far fa-check-circle fa-7x"></i> */

   const status = function (data) {
    if(data[0].order_started_at !== null) {
      $('#order-page').html(`<img src="/images/order-confirmed-taco.png" alt="taco icon">
      <h1>Order confirmed! <br>Your order will be ready in <p id="timer">${data[0].order_time} minutes</p></h1>`);
      clearInterval(interval);
    }
   };
});
