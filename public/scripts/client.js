$(document).ready(function () {

  const getOrderStatus = () => {
    $.ajax({
      url: '/api/orders',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('request')
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };
  getOrderStatus();








 $('.add-item-btn').click(function () {
    console.log('clicked');
 });

 $('.testing').click(function (event) {
   console.log($(event.target).parentsUntil('.cart'));
  });

});
