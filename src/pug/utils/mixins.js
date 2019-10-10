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

var res = $(".dropdown-content");
$(".dropbtn").on("click", funk);

$(document).click(function(e) {
  if ($(e.target).closest(res).length || $(e.target).closest('.dropbtn').length) return;
  res.fadeOut(100);
  e.stopPropagation();
});

function funk(){
  if(res.css("display") == "none"){
    res.fadeIn(100);
  }
  else{
    res.fadeOut(100);
  }
}