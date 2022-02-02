import './App.css';
import { useState } from 'react';
import InstructionsForm from './Instructions/InstructionsForm';
import InstructionsList from './Instructions/InstructionsList';
import OrderImages from './Order/OrderImages';
import OrderNameInput from './Order/OrderNameInput';
import DrinkDropdown from './Dropdowns/DrinkDropdown';
import SideDropdown from './Dropdowns/SideDropdown';
import FoodDropdown from './Dropdowns/FoodDropdown';


function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <div>
        <p>Order for {orderName}</p>
      </div>
      
      <div className='food-images' >
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      </div>
      
      <InstructionsForm setInstructions={setInstructions} instructions={instructions} />
      <InstructionsList instructions={instructions} />

      <FoodDropdown setFoodId={setFoodId} />
      <SideDropdown setSideId={setSideId} />
      <DrinkDropdown setDrinkId={setDrinkId} />

      <OrderNameInput setOrderName={setOrderName} />

    </div>
  );
}

export default App;
