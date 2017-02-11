$.fn.trunc = function(number) {
  var str = $(this).text();
  var newStr = str.substr(0, number);

  $(this).hide();
  $(this).after('<p class="trunc"></p>');
  $('.trunc').text(newStr);
  $('.trunc').append('<span class="show">...</span>');

  $('.show').click(function () {
    $(this).parent().hide();
    $('.trunc').prev().show()
  });
}