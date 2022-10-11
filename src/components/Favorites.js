import { useGlobalContext } from "../context";

const Favorites = () => {
    const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();

    return ( 
        <div className="container-fluid fav-con mb-4">
            <div className="row">
                <div className="col-8 px-5 py-4">
                    <h5>Favorites</h5>
                    <div className="favorite-con">
                        { favorites.map((meal) => {
                            return (
                                <div key={meal.idMeal} className="favorite-item">
                                    <img src={meal.strMealThumb} alt={meal.strMeal + "-meal"} onClick={() => selectMeal(meal.idMeal, true) }/>
                                    <button className="btn btn-primary" onClick={() => removeFromFavorites(meal.idMeal)}>&times;</button>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Favorites;