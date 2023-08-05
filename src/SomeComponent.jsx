import React from 'react';

const SomeComponent = ({ selected, selectableKey, children }) => {
    const style = {
        backgroundColor: selected ? 'lightblue' : 'transparent',
        border: selected ? '2px solid blue' : '2px solid transparent',
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={style} data-selectable={selectableKey}>
            {children}
        </div>
    );
};

export default SomeComponent;
