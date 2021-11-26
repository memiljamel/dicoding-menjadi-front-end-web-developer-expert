const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('You don\'t have any Favorite Restaurant', '.message');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('You don\'t have any Favorite Restaurant', '.message');

  I.amOnPage('/');

  I.seeElement('#restaurant-list a');

  const firstRestaurant = locate('#restaurant-list h3').first();
  const firstrestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-list ul > li');
  const likedRestaurantTitle = await I.grabTextFrom('#restaurant-list h3');

  assert.strictEqual(firstrestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('You don\'t have any Favorite Restaurant', '.message');

  I.amOnPage('/');

  I.seeElement('#restaurant-list ul li');

  const firstRestaurant = locate('#restaurant-list h3').first();
  const firstrestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-list ul li');
  const likedRestaurantTitle = await I.grabTextFrom('#restaurant-list h3');

  assert.strictEqual(firstrestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#liked-button');
  I.click('#liked-button');

  I.amOnPage('/#/favorite');
  I.see('You don\'t have any Favorite Restaurant', '.message');
  const likeRestaurantTitle = await I.grabTextFrom('.message');

  assert.strictEqual(likeRestaurantTitle, 'You don\'t have any Favorite Restaurant');
});
