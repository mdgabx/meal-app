import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https:/www.themealdb.com/api/json/v1/1/random.php'

const  AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        //console.log('fetch data here');
        // fetch 
        // fetch('https://randomuser.me/api/')
        //     .then((response) => response.json())
        //     .then((data) => console.log(data.results));


        const fetchMeal = async (url) => {
            
            // axios.get(allMealsUrl)
            //     .then(data => {
            //         console.log(data.data);
            //     })

            try {
                const {data} = await axios(url);
                setMeals(data.meals);
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

    }, []);
    
    return <AppContext.Provider value={{meals}}>
        {children}
    </AppContext.Provider>
}
 
// custom hook to use context API
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};
