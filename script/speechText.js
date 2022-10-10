let mice = document.querySelector('.mice_icon');

mice.onclick = () => {
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
        console.log("We are listening. Try speaking into the microphone.");
    };

    recognition.onspeechend = function () {
        // when user is done speaking
        console.log('stopped listening, hope you are done...')
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;

        search.value = transcript;
    };

    // start recognition
    recognition.start();
};