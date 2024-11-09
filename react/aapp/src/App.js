import logo from './logo.svg';
import './App.css';
import { CORE_CONCEPTS } from './data';
import { CoreConcept } from './components/coreConcepts';
import {getRandomInt , des , descriptor}  from './components/Header'
import {TabButton} from './components/TabButton'

function MainGoal(){
  return <p>My main goal</p>
}  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainGoal />
          {des[getRandomInt(2)]} React 
          {descriptor} React  
        </a>

        <section id="core-concepts">
          <ul>
            <CoreConcept title="component"
            description="new world"
            image={logo}
            />
            <CoreConcept title="component"
            description="new world"
            image={logo}
            />        

            <CoreConcept title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
            />
            
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            


          </ul>
        </section>

        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton>Component</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>props</TabButton>
              <TabButton>State</TabButton>
              {/* for desstructing we can use....
              <TabButton label="Component" /> */}
              
            </menu>
          </section>

      </header>
    </div>
  );
}

export default App;
