$(document).ready(function () {

  const getOrders = () => {
    $.ajax({
      url: `/admin`,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };

  let interval = setInterval(getOrders, 1000);


});
