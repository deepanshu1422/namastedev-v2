import React, { useState, useRef, useCallback, useEffect } from 'react';
import './TestimonialRecorder.css';

const TestimonialRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);

      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => chunks.push(event.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideoURL(videoURL);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Failed to access camera and microphone. Please ensure they are connected and permissions are granted.');
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      clearInterval(timerRef.current);
    }
  }, []);

  const handleUpload = useCallback(async () => {
    if (recordedVideoURL) {
      setIsUploading(true);
      try {
        const response = await fetch(recordedVideoURL);
        const blob = await response.blob();

        const formData = new FormData();
        formData.append('video', blob, 'testimonial.webm');

        const uploadResponse = await fetch('http://localhost:8080/api/upload-testimonial', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Upload failed');
        }

        const { url } = await uploadResponse.json();
        alert(`Video uploaded successfully! URL: ${url}`);
        setRecordedVideoURL(null);
        setRecordingTime(0);
      } catch (error) {
        console.error('Error uploading video:', error);
        alert('Failed to upload video. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  }, [recordedVideoURL]);

  const handleRetake = () => {
    if (recordedVideoURL) {
      URL.revokeObjectURL(recordedVideoURL);
    }
    setRecordedVideoURL(null);
    setRecordingTime(0);
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (recordedVideoURL) {
        URL.revokeObjectURL(recordedVideoURL);
      }
      clearInterval(timerRef.current);
    };
  }, [recordedVideoURL]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
      <div className="testimonial-recorder">
        <h1>Share Your Experience</h1>
        <p>Record a quick 1-2 minute video testimonial</p>

        <div className="video-container">
          {recordedVideoURL ? (
              <video src={recordedVideoURL} controls />
          ) : (
              <video ref={videoRef} autoPlay muted />
          )}
          {isRecording && (
              <div className="recording-indicator">
                <span className="recording-dot"></span>
                REC {formatTime(recordingTime)}
              </div>
          )}
        </div>

        <div className="controls">
          {!isRecording && !recordedVideoURL && (
              <button onClick={startRecording} className="record-button">
                Start Recording
              </button>
          )}
          {isRecording && (
              <button onClick={stopRecording} className="stop-button">
                Stop Recording
              </button>
          )}
          {recordedVideoURL && (
              <div className="post-recording-controls">
                <button onClick={handleUpload} className="upload-button" disabled={isUploading}>
                  {isUploading ? 'Uploading...' : 'Upload Testimonial'}
                </button>
                <button onClick={handleRetake} className="retake-button" disabled={isUploading}>
                  Retake
                </button>
              </div>
          )}
        </div>

        <div className="question-guide">
          <h3>Suggested Topics:</h3>
          <ul>
            <li>What did you like most about our product/service?</li>
            <li>How has it benefited you or your business?</li>
            <li>Would you recommend us to others? Why?</li>
          </ul>
        </div>
      </div>
  );
};

export default TestimonialRecorder;
