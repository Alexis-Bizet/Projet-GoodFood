import { Col, Row, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useNavigate } from "react-router-dom";

import './RecipesCards.css'

function RecipesCards({recipe}){
 
    const navigate = useNavigate();
    
    
    return(
      <div className='recipes-cards'>
        <Row gutter={[24]} >
        {recipe.map((recipe) => (
            <Col lg={6} xs={12} key={recipe.id}>
            <Card
              hoverable
              cover={<img alt={recipe.name} src={'/' + recipe.picture} className="recipe-card-image" />}
              onClick={() => navigate(`/recipe/${recipe.id}`
              )}
            >
              <Meta title={recipe.name} />
              <p className='cards-time'>{recipe.heatTime} minutes</p>
            </Card>
            </Col>   
          ))}
          
        </Row>
      </div>
        )

    }

export default RecipesCards;