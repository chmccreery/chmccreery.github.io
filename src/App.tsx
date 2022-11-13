import { AppShell, MantineProvider } from '@mantine/core';
import { MainHeader } from './navigation/MainHeader';
import SideNavBar from './navigation/SideNavBar';
import { HomePage } from './pages/Home';

export default function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbar={<SideNavBar/>}
        header={<MainHeader/>}
      >
        <HomePage/>
      </AppShell>
    </MantineProvider>
  );
}