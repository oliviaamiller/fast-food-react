import './App.css';
import { useState } from 'react';
import InstructionsForm from './Instructions/InstructionsForm';
import InstructionsList from './Instructions/InstructionsList';
import OrderImages from './Order/OrderImages';
import OrderNameInput from './Order/OrderNameInput';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <OrderNameInput setOrderName={setOrderName} />
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      <InstructionsForm setInstructions={setInstructions} instructions={instructions} />
      <InstructionsList instructions={instructions} />

    </div>
  );
}

export default App;
