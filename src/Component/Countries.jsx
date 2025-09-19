import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({promiseCountries}) => {

    const countriesData=use(promiseCountries)
    const countries=countriesData.countries

    console.log(countries)
    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            {
                countries.map(country=> <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;