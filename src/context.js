import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const  AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') !== undefined ? JSON.parse(localStorage.getItem('favorites')) : []);

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

        setLoading(false);
    };

    const fetchRandomMeal = () => {
        fetchMeal(randomMealUrl);
    };  



    const selectMeal = (idMeal, favoriteMeal) => {

        let meal;

        if(favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal === idMeal);
        } else {
            meal = meals.find((meal) => meal.idMeal === idMeal);
        }
        
        setSelectedMeal(meal);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const addToFavorites = (idMeal) => {

        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);

        if(alreadyFavorite) return

        const meal = meals.find((meal) => {
            return meal.idMeal === idMeal;
        });

        const updateFavorites = [...favorites, meal];
        setFavorites(updateFavorites);
        localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    };

    const removeFromFavorites = (idMeal) => {
        const updateFavorites = favorites.filter((meal) => {
            return meal.idMeal !== idMeal;
        });

        setFavorites(updateFavorites);
        localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    };


    useEffect(() => {
        fetchMeal(allMealsUrl);
    }, [])

    useEffect(() => {
        if(!searchTerm ) return
        fetchMeal(`${allMealsUrl}${searchTerm}`);
    }, [searchTerm]);


    return <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectedMeal, 
    selectMeal, handleCloseModal, addToFavorites, removeFromFavorites, favorites }}>
        {children}
    </AppContext.Provider>
}
 
// custom hook to use context API
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};
