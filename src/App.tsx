// DEPENDENCIES 
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

// GLOBAL STYLES 
import GlobalStyles from './styles/globalStyles';

// COMPONENTS 
import Layout from './components/Layout';

// THEMES
import dark from './styles/themes/dark';
// import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;