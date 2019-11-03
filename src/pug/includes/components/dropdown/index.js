import './dropdown.scss';

$(function() {
    $('.dropdown ul li').on('click', function() {
      var label = $(this).parent().parent().children('label');
      label.attr('data-value', $(this).attr('data-value'));
      label.html($(this).html());
  
      $(this).parent().children('.selected').removeClass('selected');
      $(this).addClass('selected');
    });
    
    $('.dropdown').on('click', function() {
        $(this).toggleClass('open');
    });
});

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 0 ? 0 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});