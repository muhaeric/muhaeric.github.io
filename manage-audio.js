// audio recorder
let recorder, audio_stream  , recordStatus , downloadAble;
const recordButton = document.getElementById("recordButton");
recordStatus = false;
recordButton.addEventListener("mousedown", startRecording);
recordButton.addEventListener("mouseup", stopRecording);
// stop recording
const stopButton = document.getElementById("stopButton");
// stopButton.addEventListener("click", stopRecording);
// stopButton.disabled = true;
const greeting = document.getElementById("greeting");
// set preview
const preview = document.getElementById("audio-playback");

// set download button event
const downloadAudio = document.getElementById("downloadButton");
downloadAudio.addEventListener("click", downloadRecording);

function startRecording() {
    // button settings
    //play the audio
    recordStatus = true;
    greeting.play();
    greeting.addEventListener("ended", function() {
        if(recordStatus){
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
                    if(recordStatus){
                        stopRecording();
                    }
                }, 300000);
            });
        }
    });
}

function stopRecording() {
    recorder.stop();
    audio_stream.getAudioTracks()[0].stop();
    downloadAble=true;
    recordStatus = false;
    // buttons reset
    // recordButton.disabled = false;
    // recordButton.innerText = "Redo Recording"
    // $("#recordButton").removeClass("button-animate");
    
    // $("#stopButton").addClass("inactive");
    // stopButton.disabled = true;
    if(downloadAble){
        setTimeout(function () {
                    downloadAudio.click();
                    downloadAble = false;
                }, 1000);
    }
    // $("#audio-playback").removeClass("hidden");

    // $("#downloadContainer").removeClass("hidden");
}

function downloadRecording(){
    var name = new Date();
    var res = name.toISOString().slice(0,10) +"-audio-"+ name.getSeconds() +"-"+ name.getMilliseconds();
    var names = "audio-"+btoa (res);
    downloadAudio.download = names + '.wav';
}
