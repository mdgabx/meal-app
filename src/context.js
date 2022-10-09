import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https:/www.themealdb.com/api/json/v1/1/random.php'

const  AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchMeal = async (url) => {
            
            setLoading(true);

            try {
                const {data} = await axios(url);
                if(data.meals) {
                    setMeals(data.meals);
                } else {
                    setMeals([]);
                }
                
            } catch (error) {
                console.log(error.response);
            }

            // try {
            //     const response = await fetch('https://randomuser.me/api/');
            //     const data = await response.json();
            //     console.log(data);
            // } catch(error) {
            //     console.log(error);
            // }
        }

        fetchMeal(allMealsUrl);

        setLoading(false);

    }, []);
    
    return <AppContext.Provider value={{meals, loading}}>
        {children}
    </AppContext.Provider>
}
 
// custom hook to use context API
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};
