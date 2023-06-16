import React from 'react';

const CountryList = ({item, handleShow}) => {
    return(
        <>
            <li>{item}</li>
            <button onClick={handleShow}>Show</button>
        </>
    )
}

export default CountryList;