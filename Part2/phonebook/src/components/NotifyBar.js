import React from 'react';

const NotifyBar = ({message, mood}) => {

    if(message === null||''){
        return null
    }
    return(
        <div className={mood}>
            {message}
        </div>
    );
}

export default NotifyBar;