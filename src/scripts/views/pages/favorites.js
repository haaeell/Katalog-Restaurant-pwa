import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restoran__label">
            Restaurant Favorit
          </h2>
          <div class="list-restoran"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.list-restoran');
    const mainContainer = document.querySelector('#main');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
        <div>
          <p>belum ada restaurant favorit</p>
        </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
