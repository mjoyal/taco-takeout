$(function() {
  $("#sms-button").on("click", function (event) {
    event.preventDefault();
    createSMSRestaurant();
  });

  const createSMSRestaurant = function () {
    $.ajax({
      type: "POST",
      url: "/orderSent",
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log(error);
      },
    })
  }

  $(".sms").on("click", function(event) {
    event.preventDefault();
    const waitTime = $(".wait-time").val()
    console.log(waitTime);
    createSMSCustomer(waitTime);
  })

  const createSMSCustomer = (waitTime) => {
    $.ajax({
      type: "POST",
      url: "/orderConfirmed",
      data: {
        Body: "Your order will be ready in " + waitTime + " minutes.",
      },
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log(error);
      },
    });
  };
});
