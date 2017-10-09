$(function() {

  $reset = $('#reset');
  var winner = null;
 

  // reset to beginning
  var rematch = function() {
    $reset.addClass('tmp-hidden');
    $('.player').css({left: 0});
    winner = null;
    temp.innerHTML=5;
    countdown();

  };

 //Show rematch button at the end of the race.
  var executeWin = function() {
    $reset.removeClass('tmp-hidden');
  };

//Count down function. (Still need to make this Jquery)
  var seconds;
  var temp;

  function countdown() {

    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "GO!";
      return;

    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    whar = setTimeout(countdown, 1000);
  } 
 

function clicked () {
    countdown();
}
document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(keyCode == 66) {

        clicked();
    }
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

  // start the race!
  race();

});






