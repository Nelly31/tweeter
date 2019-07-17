
$(document).ready(function() {

  $('.new-tweet form').on("submit", function(event) {
    event.preventDefault();

    let outPut = $(this).serialize();
    
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize()
    })
      .then((event) => console.log(outPut))
      .fail(error => console.log(error));
  });

});

