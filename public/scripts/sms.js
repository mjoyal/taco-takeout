$(function() {
  const apiURL = "https://api.twilio.com/2010-04-01";
  const twilioAccount = "ACd4593411e0cb1e5eb0fd74bebdd07961";
  const twilioToken = "e16be7d3dd4c53e3e64117311de85145";

  $(".sms-button").on("click", function (event) {
    event.preventDefault();
    createSMSRestaurant();
  });

  const createSMSRestaurant = () => {
    $.ajax({
      type: "POST",
      url: apiURL + "/Accounts/" + twilioAccount + "/Messages.json",
      data: {
        To: "+17809372950",
        From: "+16042434743",
        Body: "Order has been placed for Taco-Takeout",
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
