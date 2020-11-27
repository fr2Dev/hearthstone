// Components
import { Home, GlobalStyles } from './components';
import { Container } from './components/styled';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
