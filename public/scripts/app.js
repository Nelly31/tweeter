
const createTweetElement = (tweetObj) => {

  // add all the tags

  const $postContainer = $('<article>');
  const $header = $('<header>');

  const $nameAndAvatarDiv = $('<div>');
  const $name = $('<span>');
  const $handle = $('<span>');

  const $content = $('<p>');

  const $footer = $('<footer>');
  const $date = $('<span>');
  const $icon = $('<span>');

  // add the class

  $icon.addClass('icons');
  
  // add the content

  $name.text(tweetObj['user'].name);
  $handle.text(tweetObj['user'].handle);
  $content.text(tweetObj['content'].text);
  $date.text(new Date(tweetObj.created_at));
  $icon.text('☞ ✓ ✩');

  //connect them together

  $nameAndAvatarDiv.append(`<img src=${tweetObj['user'].avatars}.>`).append($name);
  $header.append($nameAndAvatarDiv).append($handle);
  $footer.append($date).append($icon);
  $postContainer.append($header).append($content).append($footer);

  return $postContainer;
};

//rendering the tweets
const renderTweets = (allTweetObj) => {

  for (const oneTweetObj of allTweetObj) {
    const $tweet = createTweetElement(oneTweetObj);
    $('#tweet-container').prepend($tweet);
  }
};

// requesting tweets from localhost8080/tweets
const loadTweets = () => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/tweets'
  })
    .then(function(data) {
      renderTweets(data);
    })
    .fail(error => console.log(error));
};

// requesting the last tweet
const loadNewTweets = () => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/tweets'
  })
    .then(function(data) {
      renderTweets([data[data.length-1]]);
    })
    .fail(error => console.log(error));
};

//expand textarea
const expand = () => {
  $('nav button').click(function() {

    $('.new-tweet form').toggle();
  
  });
};

//page load and new tweet submission
$(document).ready(function() {

  loadTweets();
  expand();
  $('.new-tweet form').hide();
  $('#errorTooShort').hide();
  $('#errorTooLong').hide();

  $('.new-tweet form').on("submit", function(event) {
    event.preventDefault();

    let outPut = $(this).serialize();

    let textArea = $('.new-tweet form textarea').val();

    if (textArea === "") {
      $('#errorTooLong').hide();
      $('#errorTooShort').slideDown();
    } else if (textArea.length > 140) {
      $('#errorTooShort').hide();
      $('#errorTooLong').slideDown();
    } else {
      $('#errorTooShort').hide();
      $('#errorTooLong').hide();
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(this).serialize()
      })
        .then((event) => loadNewTweets())
        .then((event) => {
          $('.new-tweet form textarea').val('');
          $('.new-tweet form .counter').text('140');
        })
        .fail(error => console.log(error));
    }
  });
});
