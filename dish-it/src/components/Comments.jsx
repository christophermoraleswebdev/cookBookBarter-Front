import { Container, ListGroup } from 'react-bootstrap'

const Comments = (props) => {
  const convertToNormalTime = (timestamp) => {
    const dateObject = new Date(timestamp)

    const year = dateObject.getFullYear()
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    const day = dateObject.getDate().toString().padStart(2, '0')

    const hours = dateObject.getHours()
    const minutes = dateObject.getMinutes()
    const seconds = dateObject.getSeconds()

    // Format the time in 12-hour format (AM/PM)
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')

    const date = `${year}-${month}-${day}`
    const time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`

    return { date, time }
  }
  if(props.comment){
  return (
    <div className="comments">
      <h4>Comments</h4>
      <Container className="d-flex justify-content-center">
        <ListGroup className="mx-auto w-100">
          {props.comment.map((comment) => (
            <div className='comment-details' key={comment._id}>
              <div className='comment-text'>
                {comment.text}
              </div>
              <div className='username'>
                - {comment.user.username} ({convertToNormalTime(comment.timestamp).date})
              </div>
            </div>
          ))}
        </ListGroup>
      </Container>
    </div>
  )} else {
    return "loading please wait"
  }
}

export default Comments
