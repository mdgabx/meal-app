import { useGlobalContext } from "../context";
import { FiThumbsUp } from 'react-icons/fi'; 

const Meals = () => {
    const { meals, loading } = useGlobalContext();

    return (
        <div className="container">
            <div className="row justify-content-center align-items-stretch w-100">
                    <h2>Meal's Component</h2>
                    {
                         loading === true ? 
                         (  <h4 className="info-text justify-content-center">Loading...</h4> )  : 
                                meals.length > 0 ?
                                ( meals.map( (meal) => {
                                    return (
                                        <div key={meal.idMeal} className="card col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2 mx-2">
                                            <img className="card-img-top" src={meal.strMealThumb} alt={`${meal.idMeal}`}></img>
                                            <div className="card-body meal-body">
                                                <h5 className="card-title">{meal.strMeal}</h5>
                                                <button className="btn btn-primary"><FiThumbsUp /></button>
                                            </div>
                                        </div>
                                )
                            }) 
                        ) : 
                        <h4 className="info-text">No meals matched.</h4>
                    }
              </div>  
        </div>
      );
}
 
export default Meals;