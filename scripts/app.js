$(function() {

  $reset = $('#reset');
  var winner = null;

  // reset to beginning
  var rematch = function() {
    $reset.addClass('tmp-hidden');
    $('.player').css({left: 0});
    winner = null;
  };

 //Show rematch button at the end of the race.
  var executeWin = function() {
    $reset.removeClass('tmp-hidden');
  };

  // Basic movement of characters through keypress
  var movePlayer = function(keypressEvent) {

 
    var keyCode = String.fromCharCode(keypressEvent.keyCode);
    
    // What is used to located the player and location
    var $player = $('[data-key="' + keyCode + '"]');
    var leftPosition = $player.offset().left;

    // Move the character 
    $player.css({left: leftPosition + 10});

    // Winner is determined when player is moved past the track
    if ($player.offset().left >= $('#track').width() - $player.width()) {
      
      // set winner to player and execute win
      winner = $player;
      executeWin();
    }
  };

  // add event-handlers
  var race = function() {
    $(window).on('keypress', function(event) {
      if (!winner) {
        movePlayer(event);
      }
    });
    $reset.on('click', function() {
      rematch();
    });
  };

  race();

});






