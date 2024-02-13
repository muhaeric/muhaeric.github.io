// audio recorder
let recorder, audio_stream;
const recordButton = document.getElementById("recordButton");
recordButton.addEventListener("mousedown", startRecording);
recordButton.addEventListener("mouseup", stopRecording);


// stop recording
const stopButton = document.getElementById("stopButton");
// stopButton.addEventListener("click", stopRecording);
// stopButton.disabled = true;

// set preview
const preview = document.getElementById("audio-playback");

// set download button event
const downloadAudio = document.getElementById("downloadButton");
downloadAudio.addEventListener("click", downloadRecording);
// $("#recordButton")
//     .on( "mousedown", function() {
//     startRecording();
//   } )
//     .on( "mouseup", function() {
//     stopRecording();
//     downloadRecording();
//   } )

function startRecording() {
    // button settings
    // recordButton.disabled = true;
    // recordButton.innerText = "Recording..."
    // $("#recordButton").addClass("button-animate");

    // $("#stopButton").removeClass("inactive");
    // stopButton.disabled = false;


    // if (!$("#audio-playback").hasClass("hidden")) {
        // $("#audio-playback").addClass("hidden")
    // };

    // if (!$("#downloadContainer").hasClass("hidden")) {
        // $("#downloadContainer").addClass("hidden")
    // };

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            audio_stream = stream;
            recorder = new MediaRecorder(stream);

            // when there is data, compile into object for preview src
            recorder.ondataavailable = function (e) {
                const url = URL.createObjectURL(e.data);
                preview.src = url;

                // set link href as blob url, replaced instantly if re-recorded
                downloadAudio.href = url;
            };
            recorder.start();

            timeout_status = setTimeout(function () {
                console.log("5 min timeout");
                stopRecording();
            }, 300000);
        });
}

function stopRecording() {
    recorder.stop();
    audio_stream.getAudioTracks()[0].stop();
    downloadAudio.click();
    // buttons reset
    // recordButton.disabled = false;
    // recordButton.innerText = "Redo Recording"
    // $("#recordButton").removeClass("button-animate");

    // $("#stopButton").addClass("inactive");
    // stopButton.disabled = true;

    // $("#audio-playback").removeClass("hidden");

    // $("#downloadContainer").removeClass("hidden");
}

function downloadRecording(){
    var date = new Date();
    var name = date.getFullYear() + date.getMonth() + date.getDate() + date.getMinutes() + date.getSeconds();
    var res = name;
    downloadAudio.download = res + '.wav';
}
