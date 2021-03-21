import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './store/reducer';
import { MyContext } from './store/context';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
        return '1';
    }
  };

  // console.log(state);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <form className="form">
          {showStep(state.currentStep)}
        </form>
      </div>
    </MyContext.Provider>
  );
};

export default App;
