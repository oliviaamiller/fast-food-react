import React from 'react';

export default function SideDropdown({ setSideId }) {
  return <select onChange={(e) => {setSideId(e.target.value); }}>
    <option value='1'>Ice Cream</option>
    <option value='2'>Fries</option>
    <option value='3'>Donut</option>

  </select>;
}
