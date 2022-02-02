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
      <h2>Super Fast Food</h2>
      <div className='food-images' >
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      </div>
  
      <div className='dropdowns'>
        <FoodDropdown setFoodId={setFoodId} />
        <SideDropdown setSideId={setSideId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
      </div>

      <div className='Order'>
        <p>Order for {orderName}</p>
      
        <InstructionsForm setInstructions={setInstructions} instructions={instructions} />
        <InstructionsList instructions={instructions} />
        <OrderNameInput setOrderName={setOrderName} />
      </div>

    </div>
  );
}

export default App;
