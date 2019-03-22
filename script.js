$(function(){
  $('.scroll-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });

  $('#modal-show').click(function(){
    $('.modal-wrapper').fadeIn();
  });

  $('#modal-close').click(function(){
    $('.modal-wrapper').fadeOut();
  });

  $('#fixed-up').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    },500);
  });







});
