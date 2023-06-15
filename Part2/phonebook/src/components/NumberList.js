import React from 'react';

const NumberList = ({isFiltering, filteredPerson, persons, handleDelete}) => {
    return(
        <ul>
            {isFiltering ? (
                filteredPerson.map((item) => {
                return (
                    <li key={item.name}>
                    {item.name} &nbsp; {item.phone}
                    </li>
                );
                })
            ) : (
                persons.map((item) => {
                return (
                    <div key={item.id}>
                        <li>
                        {item.name} &nbsp; {item.phone}
                        </li>
                        <button onClick={() => handleDelete(item.id, item.name, item.phone)}>delete</button>
                    </div>
                );
                })
            )}
        </ul>
    );
}

export default NumberList;