import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);

        // console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        // Evitar postback del form
        e.preventDefault();
        console.log('handleSubmit', inputValue);

        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue,  ...cats]);

            // Resetea texto input
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
