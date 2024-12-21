import logo from '../logo.svg';
import '../App.css';
import './Header.css';

export function Header() {
    const des = ['Know', 'Learn', ' Develop'];
    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function MainGoal() {
        return <p>My main goal</p>
      }
      const descriptor = des[getRandomInt(2)];
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
                    {des[getRandomInt(2)]} React
                   
                    {descriptor} React
                   
                    <MainGoal />
                </a>
            </header>
        </div>
    );

}
