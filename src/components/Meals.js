import { useGlobalContext } from "../context";

const Meals = () => {
    const context = useGlobalContext();
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h2>Meal's Component</h2>
                    { console.log(context) }
                </div>
            </div>
        </div>
      );
}
 
export default Meals;