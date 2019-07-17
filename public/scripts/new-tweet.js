
// $(document).ready(function() {

//   $('.new-tweet form').on("submit", function(event) {
//     event.preventDefault();

//     let outPut = $(this).serialize();

//     let textArea = $('.new-tweet form textarea').val();

//     if (textArea === "") {
//       alert('error - your tweet is empty!');
//     } else if (textArea.length > 140) {
//       alert('error - your tweet is too long');
//     } else {
//       $.ajax({
//         method: 'POST',
//         url: '/tweets',
//         data: $(this).serialize()
//       })
//         .then((event) => console.log(outPut))
//         .fail(error => console.log(error));
//     }
//   });
// });

