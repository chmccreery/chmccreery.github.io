import { AppShell, MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MainHeader } from './navigation/MainHeader';
import SideNavBar from './navigation/SideNavBar';
import { HomePage } from './pages/Home';
import { TravelPage } from './pages/Travel';
import { MusicPage } from './pages/Music';
import { TechBlog } from './pages/TechBlog';

export default function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
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
  );
}