import './App.css';
import { useState } from 'react';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';
import OrderImages from './OrderImages';
import OrderNameInput from './OrderNameInput';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <OrderNameInput setOrderName={setOrderName} />

    </div>
  );
}

export default App;
