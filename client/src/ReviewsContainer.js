import ReviewCard from "./ReviewCard"

function ReviewsContainer({ reviews, currentUser }) {
  console.log(reviews)
  const reviewsList = reviews.map((review) => {

    return(
      <ReviewCard
        key={review.id}
        review={review}
        currentUser={currentUser}
      />
    )
  })
  return(
    <ul className="reviews-cards">{reviewsList}</ul>
  )
}
export default ReviewsContainer