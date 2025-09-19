
const Country = ({country}) => {
    console.log(country.flags.flags.png)
    return (
        <div>
            <img src= {country.flags.flags.png} alt= {country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
        </div>
    );
};

export default Country;