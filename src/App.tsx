import { Route } from 'react-router-dom';
// Components
import { Home, GlobalStyles } from './components';
import { Container } from './components/styled';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Route path="/">
          <Home />
        </Route>
      </Container>
    </div>
  );
}

export default App;
