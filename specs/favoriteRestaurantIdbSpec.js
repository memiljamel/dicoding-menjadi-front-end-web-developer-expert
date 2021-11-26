import FavoriteRestaurantIdb from '../src/scripts/utils/favorite-restaurant-idb';
import { itActsAsfavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsfavoriteRestaurantModel(FavoriteRestaurantIdb);
});