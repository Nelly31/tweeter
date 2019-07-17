/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweetObj) {

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
const renderTweets = function(allTweetObj) {

  for (const oneTweetObj of allTweetObj) {
    const $tweet = createTweetElement(oneTweetObj)
    $('#tweet-container').append($tweet);
  }

};

//checking the page is loaded before calling the function
$(document).ready(function() {
  
  renderTweets(tweetData);

});

