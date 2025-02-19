'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';
import EmotionCacheProvider from './emotion-cache';

export function ThemeProvider({ children }) {
  return (
    <EmotionCacheProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </EmotionCacheProvider>
  );
} 