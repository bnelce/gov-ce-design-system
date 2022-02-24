// routes
import Home from './pages/Home';
// theme
import ThemeProvider from './theme';
// components

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
        <Home />
    </ThemeProvider>
  );
}
