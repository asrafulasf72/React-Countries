import { useState } from 'react';
import './country.css'
const Country = ({country, handalVisitedCountries}) => {
    const [visited, setVisited]=useState(false)

    const handalVisited=()=>{
        setVisited(visited? false:true)
        handalVisitedCountries(country);
    }
    return (
        <div>
            <div className={`country ${visited && 'visited-country'}`}>
                <img className='img' src= {country.flags.flags.png} alt= {country.flags.flags.alt} />
                <h2>Name: {country.name.common}</h2>
                <h5>Official Name: {country.name.official}</h5>
                <p>Area: {country.area.area}  {country.area.area>38394? "This Big Country":"This Small Country"}</p>
                <button onClick={handalVisited} className='visitedBtn'>{visited?'Visited':'Not Visited'}</button>
            </div>
        </div>
    );
};

export default Country;