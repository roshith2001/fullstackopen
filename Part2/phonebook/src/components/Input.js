import React from 'react';

const Input = ({handleSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {

    return(
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => handleNameChange(e.target.value)}/>
          phone: <input type='number' value={newNumber} onChange={(e) => handleNumberChange(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    );
}

export default Input;