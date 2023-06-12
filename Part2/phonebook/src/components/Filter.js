import React from 'react';

const Filter = (props) => {
    return(
        <div>
            filter to show: <input onChange={props.change}/>
        </div>
    );
}

export default Filter;