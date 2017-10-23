
$(function() {
  $("#deck").click(function(){
    var cards = [];
    var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        cards.push(rank + " of " + suit);
      });
    });
    cards.forEach(function(card) {
      $("#output").append("<li>" + card + "</li>");
    });
  });
});
