import React, { useState } from 'react';
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MainHeader } from './navigation/MainHeader';
import SideNavBar from './navigation/SideNavBar';
import { HomePage } from './pages/Home';
import { TravelPage } from './pages/Travel';
import { MusicPage } from './pages/Music';
import { TechBlog } from './pages/blog/TechBlog';
import { useColorScheme } from '@mantine/hooks';
import { WhyImWriting } from './pages/blog/WhyImWriting';
import { ModifiedPomodoroMethod } from './pages/blog/ModifiedPomodoroMethod';

export default function App(): JSX.Element {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme): void =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS>
        <BrowserRouter>
          <AppShell
            padding="md"
            navbar={<SideNavBar />}
            header={<MainHeader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/tech-blog" element={<TechBlog />} />
              <Route
                path="/tech-blog/why-i-decided-to-write"
                element={<WhyImWriting />}
              />
              <Route
                path="/tech-blog/modified-pomodoro-method"
                element={<ModifiedPomodoroMethod />}
              />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
