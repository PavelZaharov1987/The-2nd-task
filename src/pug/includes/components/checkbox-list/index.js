import './checkbox-list.scss';

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