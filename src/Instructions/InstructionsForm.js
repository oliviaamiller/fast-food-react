import { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {

  const [instructionsInput, setInstructionsInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionsInput]);

    setInstructionsInput('');
  }

 
  return <div>
    <form onSubmit={handleSubmit}>
      Add special instructions
      <input value={instructionsInput} onChange={(e) => {setInstructionsInput(e.target.value); }} />
      <button>Submit</button>
    </form>
  </div>;
}
