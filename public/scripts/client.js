$(document).ready(function() {

  const getOrderStatus = () => {
    $.ajax({
      url: '/api/orders',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        //console.log('request');
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };
  getOrderStatus();
});
