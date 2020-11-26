import { useEffect } from 'react';
import { Home } from './components';
import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
//   headers: {
//     'x-rapidapi-key': '97c81c1870msh5a22fe3297ba4a3p168ab7jsn2248dc9d855e',
//     'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
//   },
// };

// const loadData = () => async () => {
//   const hsData = await axios.get(options.url, options as any);
//   console.log(
//     '%c☘ %chsData%c:',
//     'font-weight:bold;color: #0F9D58;font-size:1.2em;',
//     'font-weight:bold;border-bottom:2px solid #0F9D58;',
//     'font-weight:bold;',
//     hsData
//   );
// };

function App() {
  // useEffect(() => {
  //   loadData();
  // }, []);
  return (
    <div className="App">
      <h1>Hearthstone</h1>
      <Home />
    </div>
  );
}

export default App;
