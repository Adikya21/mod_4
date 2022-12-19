(
    function(){ 
      var names = ["HONEY", "John1", "Jen2", "Jason3", "Paul1", "Frank2", "Larry3", "Paula4", "Laura5"];
      for ( var i = 0; i < names.length; i++) 
      {
        var firstLetter =names[i].charAt(0);
        if (firstLetter.toLocaleLowerCase() == "j") {
          moduleByeSpeaker.speak(names[i]);
        } else {
          moduleHelloSpeaker.speak(names[i]);
        }
      }
  
    }
  )();