// var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
// var analyseur = contexteAudio.createAnalyser();
// // var stream = new MediaStream();
// // var respire = document.getElementById("audio-file");
// window.persistAudioStream = stream;
// // stream.getAudioTracks(respire);
// source = contexteAudio.createMediaStreamSource(stream);
// source.connect(analyseur);
// analyseur.connect(distortion);

// analyseur.fftSize = 2048;
// var tailleMemoireTampon = analyseur.frequencyBinCount;
// var tableauDonnees = new Uint8Array(tailleMemoireTampon);

// analyseur.getByteTimeDomainData(tableauDonnees);

// contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

// function dessiner() {
//   dessin = requestAnimationFrame(dessiner);
//   analyseur.getByteTimeDomainData(tableauDonnees);
//   contexteCanvas.fillStyle = "rgb(200, 200, 200)";
//   contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);
//   contexteCanvas.lineWidth = 2;
//   contexteCanvas.strokeStyle = "rgb(0, 0, 0)";

//   contexteCanvas.beginPath();

//   var largeurSegment = (LARGEUR * 1.0) / tailleMemoireTampon;
//   var x = 0;

//   for (var i = 0; i < tailleMemoireTampon; i++) {
//     var v = tableauDonnees[i] / 128.0;
//     var y = (v * HAUTEUR) / 2;

//     if (i === 0) {
//       contexteCanvas.moveTo(x, y);
//     } else {
//       contexteCanvas.lineTo(x, y);
//     }

//     x += largeurSegment;
//   }
//   contexteCanvas.lineTo(canvas.width, canvas.height / 2);
//   contexteCanvas.stroke();
// }
// dessiner();

window.onload = function() {
  "use strict";
  var paths = document.getElementsByTagName("path");
  var visualizer = document.getElementById("visualizer");
  var mask = visualizer.getElementById("mask");
  var h = document.getElementsByTagName("h1")[0];
  var path;
  var mySound = this.document.querySelector("#audi-file");
  var report = 0;

  var soundAllowed = function(stream) {
    //Audio stops listening in FF without // window.persistAudioStream = stream;
    //https://bugzilla.mozilla.org/show_bug.cgi?id=965483
    //https://support.mozilla.org/en-US/questions/984179
    window.persistAudioStream = stream;
    h.innerHTML = "Thanks";
    h.setAttribute("style", "opacity: 0;");
    var audioContent = new AudioContext();
    var audioStream = audioContent.createMediaStreamSource(stream);
    var analyser = audioContent.createAnalyser();
    audioStream.connect(analyser);
    analyser.fftSize = 1024;

    var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
    visualizer.setAttribute("viewBox", "0 0 255 255");

    //Through the frequencyArray has a length longer than 255, there seems to be no
    //significant data after this point. Not worth visualizing.
    for (var i = 0; i < 255; i++) {
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("stroke-dasharray", "4,1");
      mask.appendChild(path);
    }
    var doDraw = function() {
      requestAnimationFrame(doDraw);
      analyser.getByteFrequencyData(frequencyArray);
      var adjustedLength;
      for (var i = 0; i < 255; i++) {
        adjustedLength =
          Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
        paths[i].setAttribute("d", "M " + i + ",255 l 0,-" + adjustedLength);
      }
    };
    doDraw();
  };

  var soundNotAllowed = function(error) {
    h.innerHTML = "You must allow your microphone.";
    console.log(error);
  };

  /*window.navigator = window.navigator || {};
  /*navigator.getUserMedia =  navigator.getUserMedia       ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia    ||
                            null;*/
  // navigator.getUserMedia({ audio: true }, mySound, soundNotAllowed);
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function(mediaStream) {
      var audio = document.querySelector("#audio-file");
      audio.srcObject = mediaStream;
      audio.onloadedmetadata = function(e) {
        audio.play();
      };
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    }); // always check for errors at the end.
};
