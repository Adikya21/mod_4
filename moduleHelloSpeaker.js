(function(window){
    var moduleHelloSpeaker = {};
    var speakWord = "Hello";
    moduleHelloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }

    window.moduleHelloSpeaker = moduleHelloSpeaker;
  }
)(window);