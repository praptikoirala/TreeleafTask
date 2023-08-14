import React from 'react';

const Form = ({heading, children, onSubmit}) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(event);
    }

    return(
    <form className='w-80 mr-5 py-3 px-5 bg-gray-light rounded-lg' onSubmit={handleFormSubmit} >
        <h1 className='text-2xl font-bold mb-1'>{heading}</h1>
        <div className='flex flex-col'>{children}</div>
    </form>)
}

export default Form;