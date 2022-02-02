import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  return <select onChange={(e) => {setDrinkId(e.target.value);}} >
    <option value='1'>Milkshake</option>
    <option value='2'>Limeade</option>
    <option value='3'>Coffee</option>

  </select>;
}
