// ----------- TEST POUR index.html -----------
document.addEventListener('DOMContentLoaded', () => {
  const placesList = document.getElementById('places-list');
  if (placesList) {
    const testPlaces = [
      { name: 'Charming Loft', price: 120 },
      { name: 'Cozy Cabin', price: 90 },
      { name: 'Beach House', price: 200 }
    ];

    testPlaces.forEach(place => {
      const card = document.createElement('div');
      card.className = 'place-card';
      card.innerHTML = `
        <h3>${place.name}</h3>
        <p>$${place.price}/night</p>
        <a href="place.html" class="details-button">View Details</a>
      `;
      placesList.appendChild(card);
    });
  }

  // ----------- TEST POUR place.html -----------
  const placeDetails = document.getElementById('place-details');
  if (placeDetails) {
    placeDetails.innerHTML = `
      <div class="place-info">
        <h2>Charming Loft</h2>
        <p>Host: John Doe</p>
        <p>Price: $120/night</p>
        <p>Description: A lovely apartment in Paris with beautiful views.</p>
        <ul>
          <li>Wi-Fi</li>
          <li>Kitchen</li>
          <li>Balcony</li>
        </ul>
      </div>
    `;
  }

  const reviews = document.getElementById('reviews');
  if (reviews) {
    const sampleReviews = [
      { user: 'Alice', comment: 'Amazing place!', rating: 5 },
      { user: 'Bob', comment: 'Very clean and comfy.', rating: 4 }
    ];

    sampleReviews.forEach(review => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'review-card';
      reviewCard.innerHTML = `
        <p>"${review.comment}"</p>
        <small>– ${review.user}, ${'⭐'.repeat(review.rating)}</small>
      `;
      reviews.appendChild(reviewCard);
    });
  }
});
