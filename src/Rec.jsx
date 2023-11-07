import React, { useState, useRef } from "react";

function Rec() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const audioStream = useRef(null);
  const mediaRecorder = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        audioStream.current = stream;
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioBlob(event.data);
          }
        };

        mediaRecorder.current.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error("Error starting recording: ", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && audioStream.current) {
      mediaRecorder.current.stop();
      audioStream.current.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const playAudio = () => {
    if (audioBlob) {
      const audioElement = new Audio(URL.createObjectURL(audioBlob));
      audioElement.play();
    }
  };

  return (
    <div>
      <h1>Voice Recorder</h1>
      <div>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </div>
      {audioBlob && (
        <div>
          <button onClick={playAudio}>Play Recorded Audio</button>
        </div>
      )}
    </div>
  );
}

export default Rec;
