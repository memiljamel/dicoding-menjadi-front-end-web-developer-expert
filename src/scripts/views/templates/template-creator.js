const createRestaurantItemTemplate = (data) => `
 <li>
    <a href="#/detail/${data.id}" class="restaurant">
      <div class="restaurant-image">
        <span>Kota ${data.city}</span>
        <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" alt="${data.name}" />
      </div>
      <div class="restaurant-content ">
        <span><b>Rating ${data.rating}</b></span>
        <h3>${data.name}</h3>
        <p>${data.description}</p>
      </div>
    </a>
  </li>
`;

const createRestaurantDetailTemplate = (data) => `
  <div class="restaurant">
    <div class="restaurant-image">
      <span>Kota ${data.city} - ${data.address}</span>
      <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" alt="${data.name}">
    </div>
    <div class="restaurant-content">
      <div class="restaurant-row">
        <h1>${data.name}</h1>
      </div>
      <div class="restaurant-row">
        <h2>Rating</h2>
        <span><b>${data.rating}</b></span>  
      </div>
      <div class="restaurant-row">
        <h2>Categories</h2>
        <span>
          ${data.categories.map((categorie) => categorie.name).join(', ')}
        </span>
      </div>
      <div class="restaurant-row">
        <h2>Descriptions</h2>
        <p>${data.description}</p>
      </div>
      <div class="restaurant-row">
        <h2>Foods</h2>
        <ul>
          ${data.menus.foods.map((food) => `
            <li>${food.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="restaurant-row">
        <h2>Drinks</h2>
        <ul>
          ${data.menus.drinks.map((drink) => `
            <li>${drink.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="restaurant-row">
        <h2>Reviews</h2>
        <div id="reviews-list">
          ${data.customerReviews.map((review) => `
            <div class="reviews">
              <span><b>${review.name}</b></span>
              <span>${review.date}</span>
              <span>${review.review}</span>
            </div>
          `).join('')}
        </div>
      </div>     
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button type="button" id="like-button" aria-label="Like This Restaurant">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button type="button" id="liked-button" aria-label="Unlike This Restaurant">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
