import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

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
    fetch(`/review/${id}`)
    .then(res => {
      if(res.ok){
        res.json().then(setFormData)
      }
    })
  }, [id])

//Patch
  function onSubmit(e){
    e.preventDefault()
    console.log('hi')
    fetch(`/artworks/${id}`, {
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
        <h1>Edit Review</h1>
        <form onSubmit={onSubmit}>
          <input type="number" name="score" step="1" onChange={handleChange} value={formData.score} placeholder="Review Score" /><br></br>
          <input type="text" name="comments" onChange={handleChange} value={formData.comments} placeholder="Review Comments" /><br></br>
          <input type="text" name="tips" onChange={handleChange} value={formData.tips} placeholder="Review Tips" /><br></br>
          <input type="text" name="picture" onChange={handleChange} value={formData.picture} placeholder="Image URL" /><br></br>
          <input type="number" name="product_id" step="1" onChange={handleChange} value={formData.product_id} placeholder="Product" /><br></br>
          <input type="number" name="user_id" step="1" onChange={handleChange} value={formData.user_id} placeholder="User" /><br></br>
          <input type="submit" name="submit" value="Create New Review" className="submit"/>
        </form>
      </div>
    </div>
  )}

  export default EditReviewForm