import ReviewCard from "./ReviewCard"

function MyReviewsContainer({ currentUser, handleDeleteReview }) {

    const review = currentUser.reviews?.map((review) => {

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
    <ul className="myreviews-cards">{review}</ul>
  )
}

export default MyReviewsContainer