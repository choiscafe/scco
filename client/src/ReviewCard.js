import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import styled from "styled-components"
// import Errors from './Errors'

function ReviewCard({ review, currentUser, handleDeleteReview }){

  const [errors, setErrors] = useState()
  const [user, setUser] = useState({})

  const history = useHistory()

  const {id, score, comments, tips, picture, product_id, user_id} = review

  useEffect(() => {
    fetch(`/reviews/${id}`)
    .then(r => r.json())
    .then(review => setUser(review.user))
  }, [])

  function handleDeleteClick() {
    fetch(`/reviews/${id}`, {
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

  // if (errors) return <Errors errors={errors} />

  return (
    <div className="review-card">
     <p>Score: {score}</p>
      <p>Comments: {comments}</p>
      <p>Tips: {tips}</p>
      <img src={picture} alt={product_id}/>
      <p>{user_id}</p>   
      <p>{user.username}</p> 

      { user_id === currentUser.id ?
        <>
          <span> <button className='edit-btn'><Link to={`/myreviews/${id}/edit`}>Edit Review</Link></button></span>
          <button className='del-btn' onClick={handleDeleteClick}><strong>Delete Review</strong></button> 
        </> : null }
    </div>
  )
}
export default ReviewCard