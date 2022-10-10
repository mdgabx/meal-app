import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Meals = () => {

    const { handleCloseModal, selectedMeal: meal } = useGlobalContext();

    return ( 
        <div className="container-fluid modal-con">
            <div className="row">
               <div className="modal-overlay">
                    <div className="modal-body">
                        <div className="modal-card">
                            <img src={meal.strMealThumb} alt={"meal" + `${meal.strMeal}`}></img>
                            <p>{meal.strInstructions}</p>
                            <a href={meal.strSource} target="_blank">Source here</a>
                            <button className="btn btn-button close-btn" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default Meals;
