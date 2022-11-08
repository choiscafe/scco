import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function ReviewCard({ review, handleDeleteReview }){

  const [errors, setErrors] = useState()

  const history = useHistory()

  const {id, score, comments, tips, picture, product_id, user_id, user} = review

  function handleDeleteClick() {
    fetch(`/myreviews/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.ok) {
        handleDeleteReview(id)
        history.push('/')
      } else {
        res.json().then(data => setErrors(data.errors))
      }
    })
  }

  if(errors) return <h1>{errors}</h1>

  return (
    <div className="review-card">
      <p>Score: {score}</p>
      <p>Comments: {comments}</p>
      <p>Tips: {tips}</p>
      <img src={picture} alt={product_id}/>
      <p>{user_id}</p>
      <p>{user}</p>
      <span> <button className='edit-btn'><Link to={`/myreviews/${id}/edit`}>Edit Review</Link></button></span>
      <span> <button className='del-btn' onClick={handleDeleteClick}><strong>Delete Review</strong></button></span>
    </div>
  )
}
export default ReviewCard