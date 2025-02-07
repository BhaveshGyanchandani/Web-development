import { Header } from './components/Header';
import { CoreConcepts } from './components/coreConcepts.js';
import { Examples } from './components/Examples.js';

function App() {
  return (
    <>
    <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
