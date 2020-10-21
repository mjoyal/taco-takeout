$(document).ready(function () {

  const link = `${window.location.href}`;
  const order_id = link[link.length - 1];

  const getOrderStatus = (id) => {
    $.ajax({
      url: `/order/${id}/status`,
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

  setInterval(() => {
    getOrderStatus(order_id);
  }, 1000);

   const status = function (data) {
    if(data[0].order_started_at !== null) {
      $('#order-sent-page').html(`<i class="far fa-check-circle fa-7x"></i>
      <h1>Order confirmed! <br>Your order will be ready in ${data[0].order_time} mins</h1>`);
    }
   };
});
