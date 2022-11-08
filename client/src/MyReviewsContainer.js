import ReviewCard from "./ReviewCard"

function MyReviewsContainer({ reviews, currentUser, handleDeleteReview }) {

    let currentUserReviews = reviews.filter((review) => review.user_id === currentUser.id)
   
    const review = currentUserReviews.map((review) => {

      return (
        <ReviewCard
          key={review.id}
          review={review}
          currentUser={currentUser}
          handleDeleteReview={handleDeleteReview}
        />  
      )
  })

  return (
    <ul className="reviews-cards">{review}</ul>
  )
}

export default MyReviewsContainer