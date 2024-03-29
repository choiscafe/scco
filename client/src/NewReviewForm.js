import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewReviewForm({ addReview }) {

  const [formData, setFormData] = useState({
    score: "",
    comments: "",
    tips: "",
    picture: "",
    product_id: "",
    user_id: ""
  })

  const [errors, setErrors] = useState([])

  const history = useHistory()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }


  function handleSubmit(e) {
    e.preventDefault()
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            addReview(data)
            history.push('/')
          })
          // setErrors([])
          alert('Thanks for the review!')
        } else {
          //Display errors
          r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
    console.log(1)
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
        <input type="submit" name="submit" value="Create New Review" className="submit" />
      </form>
      {errors ? errors.map(e => <h2 className="error" key={errors} style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
    </div>
  );
}

export default NewReviewForm;