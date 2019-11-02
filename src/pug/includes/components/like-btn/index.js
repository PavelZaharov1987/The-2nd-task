import './like-btn.scss';

$('button').click(function(){
    $('.like-btn-icon').toggleClass('like-btn-icon-active');
    $('.like-btn').toggleClass('active'); 
    $('.like-btn-text').toggleClass('active');
});