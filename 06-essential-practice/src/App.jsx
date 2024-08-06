import { useState } from "react"

import Input from "./components/Input"
import Output from "./components/Output"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isInputValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue){
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (<>
    <Input onChange={handleChange} userInput = {userInput} />
    {!isInputValid &&<p className="center">Please enter a duration greater than zero</p>}
    {isInputValid && <Output userInput = {userInput} /> }
  </>
  )
}

export default App
