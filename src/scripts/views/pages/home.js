import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="banner">
        <picture>
          <source media="(min-width: 650px)" srcset="./images/banners/hero-image_2-large.jpg"">
          <img src="./images/banners/hero-image_2-small.jpg" alt="Banner">
        </picture>
        <div class="banner-wrapper">
          <h1>Restaurant you love, delivered to you</h1>
          <p>Spend a penny bamboozled the little rotter cuppa grub my good sir I don't want no agro.</p>
        </div>
      </div>
      <section class="restaurant-list" id="restaurant">
        <div class="restaurant-title">
          <h2>List Restaurant</h2>
        </div>
        <div id="restaurant-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantList = document.getElementById('restaurant-list');

    try {
      const restaurant = await RestaurantSource.listRestaurant();

      const restaurantElement = document.createElement('ul');
      restaurant.forEach((data) => {
        restaurantElement.innerHTML += createRestaurantItemTemplate(data);
      });
      restaurantList.appendChild(restaurantElement);
    } catch (error) {
      restaurantList.innerHTML = `<span class="message">Error: ${error.message}</span>`;
    }
  },
};

export default Home;
