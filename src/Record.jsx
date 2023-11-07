import React, { useState } from "react";
import MediaRecorder from "react-media-recorder";
//import "./App.css"; // Import your CSS file for Tailwind CSS styles

function Recordsss() {
    const [audioBlob, setAudioBlob] = useState(null);

    const handleRecordingStop = (blobUrl) => {
      setAudioBlob(blobUrl);
    };
  
    const playAudio = () => {
      if (audioBlob) {
        const audioElement = new Audio(audioBlob);
        audioElement.play();
      }
    };
  
    return (
      <div>
        <h1>Voice Recorder and Player</h1>
        <MediaRecorder onRecordingStop={handleRecordingStop} />
  
        <button
          onClick={() => document.querySelector("button[type='button']").click()}
        >
          Start Recording
        </button>
  
        {audioBlob && (
          <div>
            <button onClick={playAudio}>Play Recorded Audio</button>
          </div>
        )}
  
        {audioBlob && (
          <audio controls>
            <source src={audioBlob} />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    );

}

export default Recordsss;
