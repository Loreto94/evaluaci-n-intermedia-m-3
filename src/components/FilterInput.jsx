import "../scss/components/Input.scss";

function FilterInput({onChangeSearch}) {
    const handleChange= (ev)=>{
        onChangeSearch(ev.target.value);
    }
    return (
    <div>
        <input className="input" type="text" placeholder="Busca..." onChange={handleChange} />
    </div>
    )
}

export default FilterInput;