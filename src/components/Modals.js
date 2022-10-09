import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Meals = () => {

    return ( 
        <div className="container-fluid modal-con">
            <div className="row">
              { /*  Modal*/  }
               <div className="modal-overlay">
                    <div className="modal-body">
                        <div className="modal-card">

                        </div>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default Meals;
