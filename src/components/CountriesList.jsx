import Country from "./Country";

function CountriesList({ countries }) {
    return (
        <section>
            <ul>
                {
                    countries.map((country) => {
                        return(
                            <Country key={country.flag} item={country} />
                        ) 
                    })
                }
            </ul>
        </section>
    )
}

export default CountriesList;