import './radio.scss';

$('#men').click(function(){
    $('.men').toggleClass('radio-container-checked'); // checkedClass is defined in your CSS
    $('.women').removeClass('radio-container-checked');
});

$('#women').click(function(){
    $('.women').toggleClass('radio-container-checked'); // checkedClass is defined in your CSS
    $('.men').removeClass('radio-container-checked');
});