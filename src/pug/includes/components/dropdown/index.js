import './dropdown.scss';



$(function() {
    // $('.dropdown ul li').on('click', function() {
    //   var label = $(this).parent().parent().children('label');
    //   label.attr('data-value', $(this).attr('data-value'));
    //   label.html($(this).html());
  
    //   $(this).parent().children('.selected').removeClass('selected');
    //   $(this).addClass('selected');
    // });
    
    // $('.dropdown').on('click', function() {
    //   $(this).addClass('open');
    // });
    $('.dropdown').click(function () {
      $('.quantity').slideDown(400);
      $(this).addClass('open');
    });
    $('.apply-quantity').click(function () {
      $('.quantity').slideUp(400);
      $('.dropdown').removeClass('open');
    });
      
})

$('<div class="dropdown-quantity-button quantity-down">-</div>').insertBefore('.dropdown-quantity input');
$('<div class="dropdown-quantity-button quantity-up">+</<div>').insertAfter('.dropdown-quantity input');



$('.dropdown-quantity').each(function() {
  var spinner = jQuery(this),
  input = spinner.find('input[type="number"]'),
  btnUp = spinner.find('.quantity-up'),
  btnDown = spinner.find('.quantity-down'),
  min = input.attr('min'),
  max = input.attr('max');

  function opacity() {
    if ($(input).val() == 0) {
      btnDown.css({
        'opacity': '.5',
        'cursor': 'context-menu'
      });
    } else {
      btnDown.css({
        'opacity': '1',
        'cursor': 'pointer'
      });
    }
  };

  opacity();

  btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
      opacity();
  });

  btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
      opacity();
  });

  $('input[value]').change(function() {
    var count = 0;
    $('input[type="number"]').each(function() {	
    
      count += parseInt($(this).val());
      
      if (count > 0){
        $('.clear-quantity-invisible').addClass('clear-quantity');
        if (count < 5) {
          $('.dropdown').find('label').html(count == 1 ? count + ' гость' : count + ' гостя');
        } else {
          $('.dropdown').find('label').html(count + ' гостей');
        }
        $('.clear-quantity-invisible').click(function () {
          count = 0;
          $('input[type="number"]').val(count);
          $('.dropdown').find('label').text('Сколько гостей');
        }); 
      } else {
        $('.clear-quantity-invisible').removeClass('clear-quantity');
        $('.dropdown').find('label').text('Сколько гостей');
      };
    });
    console.log(count);
  });
});

