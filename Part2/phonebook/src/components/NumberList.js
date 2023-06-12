import React from 'react';

const NumberList = ({isFiltering, filteredPerson, persons}) => {
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
                    <li key={item.name}>
                    {item.name} &nbsp; {item.phone}
                    </li>
                );
                })
            )}
        </ul>
    );
}

export default NumberList;