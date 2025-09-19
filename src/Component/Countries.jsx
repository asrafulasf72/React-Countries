import React, { use } from 'react';
import Country from './Country/Country';
import '../Component/countries.css'

const Countries = ({promiseCountries}) => {

    const countriesData=use(promiseCountries)
    const countries=countriesData.countries

    console.log(countries)
    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            <div className='countries'>
                 {
                   countries.map(country=> <Country key={country.cca3.cca3} country={country}></Country>)
                 }
            </div>
        </div>
    );
};

export default Countries;