import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import TestimonialRecorder from "./components/VideoRecorder";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TestimonialRecorder />
        </ThemeProvider>
    );
}

export default App;