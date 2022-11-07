import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewReviewForm({ updateReview }) {

  const [formData, setFormData] = useState({
    score: "",
    comments: "",
    tips: "",
    picture: "",
    product_id: "",
    user_id: ""
  })

  const history = useHistory()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    
    const newReview = {...formData}

    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview),
    })
    .then((r) => r.json())
    .then((newReview) => {
      setFormData({
        score: "",
        comments: "",
        tips: "",
        picture: "",
        product_id: "",
        user_id: ""
      })
      updateReview(newReview)
      history.push('/')
    })
  }

  return (
    <div className="new-review-form">
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" name="score" step="1" onChange={handleChange} value={formData.score} placeholder="Review Score" /><br></br>
        <input type="text" name="comments" onChange={handleChange} value={formData.comments} placeholder="Review Comments" /><br></br>
        <input type="text" name="tips" onChange={handleChange} value={formData.tips} placeholder="Review Tips" /><br></br>
        <input type="text" name="picture" onChange={handleChange} value={formData.picture} placeholder="Image URL" /><br></br>
        <input type="number" name="product_id" step="1" onChange={handleChange} value={formData.product_id} placeholder="Product" /><br></br>
        <input type="number" name="user_id" step="1" onChange={handleChange} value={formData.user_id} placeholder="User" /><br></br>
        <input type="submit" name="submit" value="Create New Review" className="submit"/>
      </form>
    </div>
  );
}

export default NewReviewForm;