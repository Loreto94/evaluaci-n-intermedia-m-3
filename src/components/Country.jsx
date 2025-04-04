import "../scss/components/Country.scss";

function Country({item}) {
    return (
        <li className="country">
            <p>{item.flag}</p>
            <h3>{item.name.common}</h3>
            <p>{item.capital}</p>
            <p>{item.continents}</p>             
        </li>
    )
}

export default Country;