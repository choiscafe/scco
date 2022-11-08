import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

function EditReviewForm({ updateReview }) {

  const [formData, setFormData] = useState({
    score: "",
    comments: "",
    tips: "",
    picture: "",
    product_id: "",
    user_id: ""
  })

  const {id} = useParams()
  
//Get the review
  useEffect(() => {
    fetch(`/reviews/${id}`)
    .then(res => {
      if(res.ok){
        res.json().then(setFormData)
      }
    })
  }, [id])

//Patch
  function onSubmit(e){
    e.preventDefault()
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...formData})
    })
    .then(res => {
      if(res.ok){
        res.json().then(updateReview)
      }
    })
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
   
  return (
    <div className="edit-review-form">
      <div className="edit-review-form__header">
        <h1>{`Edit Review Product ${id}`}</h1>
        <form onSubmit={onSubmit}>
          <input type="number" name="score" step="1" onChange={handleChange} value={formData.score} placeholder="Review Score" /><br></br>
          <input type="text" name="comments" onChange={handleChange} value={formData.comments} placeholder="Review Comments" /><br></br>
          <input type="text" name="tips" onChange={handleChange} value={formData.tips} placeholder="Review Tips" /><br></br>
          <input type="text" name="picture" onChange={handleChange} value={formData.picture} placeholder="Image URL" /><br></br>
          <input type="number" name="product_id" step="1" onChange={handleChange} value={formData.product_id} placeholder="Product" /><br></br>
          <input type="number" name="user_id" step="1" onChange={handleChange} value={formData.user_id} placeholder="User" /><br></br>
          <span><button className="submit-btn" name="submit" value="Update New Review"><Link to={`/myreviews/${id}`}>Review Updated</Link></button></span>
        </form>
      </div>
    </div>
  )}

  export default EditReviewForm