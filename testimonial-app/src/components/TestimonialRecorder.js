import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StopIcon from '@mui/icons-material/Stop';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ReplayIcon from '@mui/icons-material/Replay';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BusinessIcon from '@mui/icons-material/Business';
import RecommendIcon from '@mui/icons-material/Recommend';
import VideocamIcon from '@mui/icons-material/Videocam';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 100%)`,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 600,
  width: '100%',
}));

const VideoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 Aspect Ratio
  backgroundColor: theme.palette.grey[900],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
}));

const StyledVideo = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const RecordingIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
}));

const TestimonialRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedDevice(videoDevices[0].deviceId);
      }
    });
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: selectedDevice },
        audio: true
      });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);

      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => chunks.push(event.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setRecordedVideo(blob);
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
  }, [selectedDevice]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      clearInterval(timerRef.current);
    }
  }, []);

  const handleUpload = useCallback(async () => {
    if (recordedVideo) {
      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append('video', recordedVideo, 'testimonial.webm');

        const response = await fetch('/api/upload-testimonial', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const { url } = await response.json();
        alert(`Video uploaded successfully! URL: ${url}`);
        setRecordedVideo(null);
        setRecordingTime(0);
      } catch (error) {
        console.error('Error uploading video:', error);
        alert('Failed to upload video. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  }, [recordedVideo]);

  const handleRetake = () => {
    setRecordedVideo(null);
    setRecordingTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
      <StyledContainer maxWidth="lg">
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Share Your Experience
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Record a quick 1-2 minute video testimonial
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel id="camera-select-label">Select Camera</InputLabel>
            <Select
                labelId="camera-select-label"
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                disabled={isRecording}
            >
              {devices.map((device) => (
                  <MenuItem key={device.deviceId} value={device.deviceId}>
                    {device.label || `Camera ${devices.indexOf(device) + 1}`}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>

          <VideoContainer>
            {recordedVideo ? (
                <StyledVideo src={URL.createObjectURL(recordedVideo)} controls />
            ) : (
                <StyledVideo ref={videoRef} autoPlay muted />
            )}
            {isRecording && (
                <RecordingIndicator>
                  <FiberManualRecordIcon color="error" sx={{ mr: 1 }} />
                  REC {formatTime(recordingTime)}
                </RecordingIndicator>
            )}
          </VideoContainer>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            {!isRecording && !recordedVideo && (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<VideocamIcon />}
                    onClick={startRecording}
                >
                  Start Recording
                </Button>
            )}
            {isRecording && (
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<StopIcon />}
                    onClick={stopRecording}
                >
                  Stop Recording
                </Button>
            )}
            {recordedVideo && (
                <>
                  <Button
                      variant="contained"
                      color="primary"
                      startIcon={isUploading ? <CircularProgress size={24} /> : <CloudUploadIcon />}
                      onClick={handleUpload}
                      disabled={isUploading}
                  >
                    {isUploading ? 'Uploading...' : 'Upload Testimonial'}
                  </Button>
                  <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<ReplayIcon />}
                      onClick={handleRetake}
                      disabled={isUploading}
                  >
                    Retake
                  </Button>
                </>
            )}
          </Box>

          <Paper elevation={1} sx={{ p: 2, bgcolor: 'background.paper', width: '100%' }}>
            <Typography variant="h6" gutterBottom color="primary">
              Suggested Topics:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ThumbUpAltIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="What did you like most about our product/service?" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="How has it benefited you or your business?" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RecommendIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Would you recommend us to others? Why?" />
              </ListItem>
            </List>
          </Paper>
        </StyledPaper>
      </StyledContainer>
  );
};

export default TestimonialRecorder;