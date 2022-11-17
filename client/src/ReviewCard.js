import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RatingIcon from './RatingIcon'

function ReviewCard({ review, currentUser, handleDeleteReview }){

  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({})
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0);

  const history = useHistory()

  const {id, score, comments, tips, picture, product_id, user_id} = review

 
  const onSaveRating = (index) => {
    setRating(index);
  };
  
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
        history.push('/products')
      } else {
        res.json().then(data => setErrors(data.errors))
      }
    })
  }

  return (
    <div className="review-card">
      <p>ʕ•́ᴥ•̀ʔっ♡ {user.username}</p> 
      <p className='star'>{[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon 
            key={index.id}
            index={index} 
            rating={score} 
            hoverRating={hoverRating} 
            // onMouseEnter={onMouseEnter} 
            // onMouseLeave={onMouseLeave} 
            onSaveRating={onSaveRating} />
        )
      })}</p>
      <p><b>Comments:</b> {comments}</p>
      <p><b>Tips:</b> {tips}</p>
      <img className="review-pic" src={picture} alt={product_id}/>
      { user_id === currentUser.id ?
        <>
          <span> <button className='edit-btn'><Link to={`/myreviews/${id}/edit`}>Edit Review</Link></button></span>
          <button className='del-btn' onClick={handleDeleteClick}><strong>Delete Review</strong></button> 
        </> : null }
    </div>
  )
}
export default ReviewCard

