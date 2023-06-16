import React from 'react';

const Input = ({handleCountryChange, handleBlur}) => {
    return(
        <>
            Country: <input onChange={(e) => handleCountryChange(e.target.value)}
                onBlur={handleBlur}
            />
        </>
    )
}

export default Input;