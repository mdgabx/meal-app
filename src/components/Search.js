import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
    const [text,setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(text) {
            setSearchTerm(text);
        }
    };

    const handleRandomMeal = () => {
        setSearchTerm('');
        setText('');
        fetchRandomMeal();
    };

    return ( 
        <header className="container-fluid search-container py-4">
            <div className="row">
                <div className="col-12"> 
                    <form className="form-inline search-form" onSubmit={handleOnSubmit}>
                        <input className="form-control" type="text" placeholder="Search a Meal" value={text} aria-label="Search" onChange={handleOnChange}/>
                        <button className="btn btn-primary mx-2" type="submit">Search</button>
                        <button className="btn btn-primary mx-2" onClick={handleRandomMeal} >Random Meal</button>
                    </form>
                </div>
            </div>
        </header>
     );
}
 
export default Search;
