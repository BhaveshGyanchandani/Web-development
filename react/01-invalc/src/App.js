import { Header } from './components/Header'
import './App.css';
import { UserInput } from './components/UserInput'
import { Results } from './components/Results'
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange( inputIdentifier, newValue ) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue // + is used to convert the string appenditon bug to integer addtion
      };
  });
}

  return (
    <>
      <Header />
      <UserInput onChange={handleChange}  userInput={userInput} />
      {!inputIsValid && <p className='center'>Please input valid data</p>}
      {inputIsValid && <Results input={userInput}/>}

    </>

  )
}

export default App



  