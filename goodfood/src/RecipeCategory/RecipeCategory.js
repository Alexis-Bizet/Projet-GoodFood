import { useRecipesContext } from '../Utils/providers/RecipesProvider';
import {useParams} from "react-router-dom";
import RecipesCards from '../RecipesCards/RecipesCards';





function RecipeCategory(){
    const {categoryname}=useParams();
    const {recipes} = useRecipesContext(); 
    console.log(recipes)
    console.log()
    

    const filteredRecipes = recipes.filter(recipe => recipe.category.name === categoryname)

    console.log(filteredRecipes)

      return (
        <div>
            <h2>{categoryname}</h2> 
                    
               <RecipesCards recipe={filteredRecipes}/>
               
        </div>       
        );
        
        
}

export default RecipeCategory ;