function ReviewCard({ review }){
  const {id, score, comments, tips, picture, product_id, user_id, user} = review

  return (
    <div className="review-card">
      <p>Score: {score}</p>
      <p>Comments: {comments}</p>
      <p>Tips: {tips}</p>
      <img src={picture} alt={product_id}/>
      {/* <p>{product_id}</p> */}
      <p>{user}</p>
    </div>
  )
}
export default ReviewCard