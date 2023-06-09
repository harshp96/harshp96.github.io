import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

const countryOptions = [
    { value: '', label: 'Select' },
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'in', label: 'India' },
    { value: 'jp', label: 'Japan' },
    // Add more country options as needed
];

const categoryOptions = [
    { value: '', label: 'Select' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'general', label: 'General' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
    // Add more country options as needed
];

const CountryDropdown = () => {
    const [context, setContext] = useContext(MyContext);

    // const [selectedCountry, setSelectedCountry] = useState('');
    const handleCountryChange = (event) => {
        setContext((prevValue) => ({
            ...prevValue,
            country: event.target.value,
          }));
    };

    // const [selectedCategory, setSelecteCategory] = useState('');
    const handleCategoryChange = (event) => {
        setContext((prevValue) => ({
            ...prevValue,
            category: event.target.value,
          }));
    };

    return (
        <>
            <div className='row mx-3'>
                <div className='column'>
                    <label htmlFor="country">Select Country:</label>
                    <select className='m-3' id="country" value={context.country} onChange={handleCountryChange}>
                        <option value="">Select</option>
                        {countryOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className='column'>
                    <label htmlFor="country">Select Category:</label>
                    <select className='m-3' id="country" value={context.category} onChange={handleCategoryChange}>
                        <option value="">Select</option>
                        {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default CountryDropdown;
