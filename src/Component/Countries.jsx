import React, { use, useState } from 'react';
import Country from './Country/Country';
import '../Component/countries.css'

const Countries = ({promiseCountries}) => {

    const [visitedCountries, setVisitedCountries]=useState([])

    const handalVisitedCountries=(country)=>{
        console.log('Visited Country clicked',country);
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData=use(promiseCountries)
    const countries=countriesData.countries

    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            <h3>Total Visited Country:{visitedCountries.length}</h3>
            <div className='countries'>
                 {
                   countries.map(country=> <Country key={country.cca3.cca3} 
                    handalVisitedCountries={handalVisitedCountries}
                    country={country}></Country>)
                 }
            </div>
        </div>
    );
};

export default Countries;