var TWEET_LINK = "https://twitter.com/intent/tweet?text=";
var QUOTES = [
  {
    id: 1,
    text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    author: "Daniel J. Boorstin"
  },
  {
    id: 2,
    text: "A year from now you will wish you had started today.",
    author: "Karen Lamb"
  },
  {
    id: 3,
    text: "It doesn't matter where you are, you are nowhere compared to where you can go.",
    author: "Bob Proctor"
  },
  {
    id: 4,
    text: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Michael Jordan"
  },
  {
    id: 5,
    text: "You miss 100 percent of the shots you never take.",
    author: "Wayne Gretzky"
  },
  {
    id: 6,
    text: "Never too old, never too bad, never too late, never too sick to start from scratch once again.",
    author: "Bikram Choudhury"
  },
  {
    id: 7,
    text: "By changing nothing, nothing changes.",
    author: "Tony Robbins"
  },
  {
    id: 8,
    text: "I hated every minute of training, but I said, \"Don't quit. Suffer now and live the rest of your life as a champion.\"",
    author: "Muhammad Ali"
  },
  {
    id: 9,
    text: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan"
  },
  {
    id: 10,
    text: "It's not whether you get knocked down; it's whether you get up.",
    author: "Vince Lombardi"
  }
];

function newQuote() {
  var quote,
      $quoteEl = $(".quote"),
      $authorEl = $(".author"),
      $tweetEl = $("a.tweet"),
      quoteId = $quoteEl.data("id");
  do
    quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  while (quote.id === quoteId);
  $quoteEl.data("id", quote.id);
  $quoteEl.text(quote.text);
  $authorEl.text(quote.author);
  $tweetEl.attr("href", TWEET_LINK + encodeURIComponent(quote.text + " - " + quote.author));
}

$(document).ready(function() {
  newQuote();

  $(".new-quote").click(function(e) {
    newQuote();
  });
});
