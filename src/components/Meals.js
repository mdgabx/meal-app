import { useGlobalContext } from "../context";

const Meals = () => {
    const { meals } = useGlobalContext();

    return (
        <div className="container">
            <div className="row justify-content-center w-100">
                    <h2>Meal's Component</h2>
                    {  meals.map((meal) => {
                        console.log(meal);
                        return (
                            <div key={meal.idMeal} className="card col-xs-12 col-sm-4 col-md-3 mx-3 my-3">
                                <img className="card-img-top" src={meal.strMealThumb} alt={`${meal.name} image`}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{meal.name}</h5>
                                    <p className="card-text meal-description">{meal.strInstructions}</p>
                                    <a href={meal.strSource} target="_blank" className="btn btn-primary">Source</a>
                                </div>
                            </div>
                        )
                    }) } 
              </div>  
        </div>
      );
}
 
export default Meals;