const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.querySelector('.reviews-container');
const reviews = [];

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  const newReview = {
    name: name,
    rating: rating,
    comment: comment
  };

  reviews.push(newReview);
  displayReviews();
  reviewForm.reset();
});

function displayReviews() {
  reviewsContainer.innerHTML = '';

  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <h3>${review.name}</h3>
      <p>Évaluation : ${review.rating}/5</p>
      <p>${review.comment}</p>
    `;

    reviewsContainer.appendChild(reviewElement);
  });
}
