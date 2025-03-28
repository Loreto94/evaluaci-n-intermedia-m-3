import "../scss/App.scss";
import "./CountriesList";
import CountriesList from "./CountriesList";
import countriesData from "../services/data.json";
import FilterInput from "./FilterInput";
import { useState } from "react";

function App() {
    const [searchValue, setSearchValue]= useState("");
    const changeSearchValue= (inputValue)=>{
        setSearchValue(inputValue);
    }
    const filteredCountries= countriesData.filter((country)=>{
        return country.name.common.includes(searchValue);
    })
    console.log(filteredCountries);
    return (
        <>
        <header className="header">
            <h2>Country info App</h2>
            <p>Explore information about countries, capitals and flags. Filter through the list!</p>
        </header>
        <main>
            <FilterInput onChangeSearch={changeSearchValue} />
            <CountriesList countries={countriesData} />
        </main>
        </>
    )
}


export default App
