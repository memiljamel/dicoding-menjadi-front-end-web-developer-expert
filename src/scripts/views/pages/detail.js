import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <section class="restaurant-detail" id="restaurant">
        <div id="restaurant-detail"></div>
        <div class="floating-action-button" id="like-button-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantDetail = document.getElementById('restaurant-detail');

    restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('like-button-container'),
      restaurant,
    });
  },
};

export default Detail;
