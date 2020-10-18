$(function() {
  $(".sms-button").on("click", function (event) {
    event.preventDefault();
    createSMSRestaurant();
  });

  const createSMSRestaurant = function () {
    $.ajax({
      type: "POST",
      url: "/order",
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
      url: apiURL + "/Accounts/" + twilioAccount + "/Messages.json",
      data: {
        To: "+17809372950",
        From: "+16042434743",
        Body: "Your order will be ready in " + waitTime + " minutes.",
      },
      success: function (data) {
        console.log(data);
      },
      headers: {
        Authorization: "Basic " + btoa(twilioAccount + ":" + twilioToken),
      },
      error: function (error) {
        console.log(error);
      },
    });
  };
});
