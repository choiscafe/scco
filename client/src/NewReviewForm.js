
function NewReviewForm() {

  return (
    <div className="new-review-form">
      <h3>Write a Review</h3>
      <form>
        <input type="number" name="score" step="1" placeholder="Review Score" /><br></br>
        <input type="text" name="name" placeholder="Review Comments" /><br></br>
        <input type="text" name="name" placeholder="Review Tips" /><br></br>
        <input type="text" name="image" placeholder="Image URL" /><br></br>
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;