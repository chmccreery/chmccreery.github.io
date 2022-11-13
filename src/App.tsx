import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MainHeader } from './navigation/MainHeader';
import SideNavBar from './navigation/SideNavBar';
import { HomePage } from './pages/Home';
import { TravelPage } from './pages/Travel';
import { MusicPage } from './pages/Music';
import { TechBlog } from './pages/TechBlog';
import { useState } from 'react';
import { useColorScheme } from '@mantine/hooks';

export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme}} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <AppShell
          padding="md"
          navbar={<SideNavBar/>}
          header={<MainHeader/>}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/tech-blog" element={<TechBlog />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}