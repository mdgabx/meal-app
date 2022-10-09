import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const context = useGlobalContext();

    return ( 
        <header className="container-fluid search-container py-4 mb-4">
            <div className="row">
                <div className="col-12"> 
                    <form className="form-inline search-form">
                        <input className="form-control" type="text" placeholder="Search a Meal" aria-label="Search" />
                        <button className="btn btn-primary mx-2" type="submit">Search</button>
                        <button className="btn btn-primary mx-2">Random Meal</button>
                    </form>
                </div>
            </div>
        </header>
     );
}
 
export default Search;
