import FavoriteRestaurantIdb from './favorite-restaurant-idb';
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likedButton = document.getElementById('liked-button');
    likedButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonPresenter;
