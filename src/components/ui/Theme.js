import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

const Theme = ({children}) => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default Theme;