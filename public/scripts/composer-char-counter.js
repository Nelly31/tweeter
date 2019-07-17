const charCounter = function() {
  $('textarea[name = text]').keydown(function() {
    let count = 140 - ($(this).val().length);
    let countVal = $(this).closest('.new-tweet').find('.counter').text(count);
    
    if (count < 0) {
      $('.counter').attr('id','overCharLimit');
    } else if (count >= 0) {
      $('#overCharLimit').removeAttr('id');
    }

    return countVal;
  });
};

$(document).ready(function() {

  charCounter();

});

