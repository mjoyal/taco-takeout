$(document).ready(function () {

 $('.add-item-btn').click(function () {
    console.log('clicked');
 });

 $('.testing').click(function (event) {
   console.log($(event.target).parentsUntil('.cart'));
  });

});
