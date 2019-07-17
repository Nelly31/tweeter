/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweetObj) => {

  // add all the tags

  const $postContainer = $('<article>');
  const $header = $('<header>');

  const $nameAndAvatarDiv = $('<div>');
  // const $avatar = $('<img>');
  const $name = $('<span>');
  const $handle = $('<span>');

  const $content = $('<p>');

  const $footer = $('<footer>');
  const $date = $('<span>');

  // add the content

  $name.text(tweetObj['user'].name);
  $handle.text(tweetObj['user'].handle);
  $content.text(tweetObj['content'].text);
  $date.text(tweetObj.created_at);

  //connect them together

  $nameAndAvatarDiv.append(`<img src=${tweetObj['user'].avatars}.>`).append($name);
  $header.append($nameAndAvatarDiv).append($handle);
  $footer.append($date);
  $postContainer.append($header).append($content).append($footer);

  return $postContainer;
};

//rendering the tweets from hard copy data
const renderTweets = (allTweetObj) => {

  for (const oneTweetObj of allTweetObj) {
    const $tweet = createTweetElement(oneTweetObj)
    $('#tweet-container').append($tweet);
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
      console.log(data);
    })
    .fail(error => console.log(error));
};


//checking the page is loaded before calling the function
$(document).ready(() => {
  
  loadTweets();

});



