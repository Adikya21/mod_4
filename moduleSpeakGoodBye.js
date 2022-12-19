(function(window) {
    var moduleSpeakGoodByeSpeaker ={};
    var speakWord = "Good Bye";
    moduleSpeakGoodByeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }
  
    window.moduleSpeakGoodByeSpeaker = moduleSpeakGoodByeSpeaker;
  
  })(window);