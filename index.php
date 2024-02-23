<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Audio Recorder Example</title>
		<link rel="stylesheet" href="manage-audio.css">
		<style>
			p.lead { color: #fff;font-size: 1.5rem; font-weight: 300; text-align: center; }
			.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
		</style>
	</head>
	<body><div id="jquery-script-menu">
<div class="jquery-script-center">
<ul>
</ul><div id="carbon-block"></div>
<div class="jquery-script-ads"><script type="text/javascript">

</script>
</div>
<div class="jquery-script-clear"></div>
</div>
</div>
		<h1>Audio Recorder Example</h1>
		<div class="audio-record">
			<button class="prevent-select" id="recordButton">Start Recording</button>
			<button id="stopButton" class="inactive">Stop</button>
			<audio src="greetings/greetings.wav" id="greeting"></audio>
		</div>

		<div class="playback">
				<audio src="" controls id="audio-playback" class="hidden"></audio>
		</div>

		<div class="download">
			<button class="hidden" id="downloadContainer">
				<a href="" download="" id="downloadButton">Download Audio</a>
			</button>
		</div>
		<div class="recorder-instructions">
			<div class="step-1A">
				<h2>Step 1 &#45; Press the Record Button</h2>
				<p>Click on the "Start Recording" button.</p>
			</div>

			<div class="step-2A">
				<h2>Step 2 &#45; Allow Microphone Access &amp; Start Talking</h2>
				<p>A popup will appear, asking you permission for our website to access your microphone. Click on "Allow" to start recording. Speak clearly into your microphone for up to 5 minutes.</p>
			</div>

			<div class="step-3A">
				<h2>Step 3 &#45; Stop Recording</h2>
				<p>Recording will automatically stop when you reach the duration limit, or you can stop it anytime by clicking on the "Stop" button.</p>
			</div>

			<div class="step-4A">
				<h2>Step 4 &#45; Preview your Recording or Try Again</h2>
				<p>Once you finish recording, an audio player will appear. Press the play button to preview your recording, or click "Redo Recording" to try again.</p>
			</div>

			<div class="step-5A">
				<h2>Step 5 &#45; Download Your Audio Recording</h2>
				<p>If you are happy with your final recording, click the "Download Audio" button.</p>
			</div>
		</div>
		<script src="manage-audio.js"></script>
		<script src="jquery.js"></script>

	</body>
	</html>
