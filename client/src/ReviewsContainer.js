import ReviewCard from "./ReviewCard"

function ReviewsContainer({ reviews }) {
  
  const reviewsList = reviews.map((review) => {

    return(
      <ReviewCard
        key={review.id}
        review={review}
      />
    )
  })
  return(
    <ul className="reviews-cards">{reviewsList}</ul>
  )
}
export default ReviewsContainer