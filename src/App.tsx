import { GlobalStyles } from './styles/global';
import HomePage from './pages/HomePage';
import { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <HomePage />
    </>
  );
}

export default App;
