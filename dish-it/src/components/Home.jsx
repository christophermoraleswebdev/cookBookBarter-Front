import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Home = (props) => {
  const navigate = useNavigate()
  const handleRecipeClick = (id) => {
    navigate(`/recipes/${id}`)
  }

  // STARS
  const renderRatingStars = (rating) => {
    const maxRating = 5
    const filledStars = Math.floor(rating)
    const emptyStars = maxRating - filledStars

    const stars = []

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={`star-filled-${i}`} style={{ color: 'gold' }}>&#9733;</span>)
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`star-empty-${i}`} style={{ color: 'lightgray' }}>&#9733;</span>)
    }

    return stars
  }

  return (
    <div className="container">
      <div className="gallery">
        {props.allRecipes.map((recipe) => (
          <Card
            key={recipe._id}
            className="card"
            style={{ width: "16rem", height: "255px" }}
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
              <Card.Title>
                <div className="rating-stars">
                  {renderRatingStars(
                    recipe.ratings.reduce((acc, rating) => acc + rating.value, 0) / recipe.ratings.length
                  )}
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
