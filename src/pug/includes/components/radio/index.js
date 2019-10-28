import './radio.scss';

$('input:radio').click(function(){
    $('.radio-container').toggleClass('radio-container-checked'); // checkedClass is defined in your CSS
});