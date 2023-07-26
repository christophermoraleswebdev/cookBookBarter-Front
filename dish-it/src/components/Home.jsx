import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Home = (props) => {
  const navigate = useNavigate()
  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`)
  }


  return (
    <div className="container">
      <div className="gallery">
        {props.allRecipes.map((recipe) => (
          <Card
            key={recipe._id}
            className="card"
            style={{ width: "16rem", height: "215px" }}
            onClick={() => handleRecipeClick(recipe._id)}
          >
            <Card.Img
              variant="top"
              style={{
                minHeight: "140px",
                maxHeight: "140px",
                objectFit: "cover",
              }}
              src={recipe.picture}
            />
            <Card.Body className="card-body">
              <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home