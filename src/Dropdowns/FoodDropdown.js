import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  return <select onChange={(e) => {setFoodId(e.target.value); }} >
    <option value='1'>Hamburger</option>
    <option value='2'>Fish n Chips</option>
    <option value='3'>Salad</option>

  </select>;
}
