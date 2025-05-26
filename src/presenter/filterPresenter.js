<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import {render, replace, remove} from '../framework/render.js';
import FilterView from '../view/filter.js';
import { FilterType,UpdateType } from '../mock/const.js';
=======
=======
>>>>>>> Stashed changes
import { render, replace, remove } from '../framework/render.js';
import FilterView from '../view/filter.js';


import { FilterType, UpdateType } from '../mock/const.js';

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
import { render, replace, remove } from '../framework/render.js';
import FilterView from '../view/filter.js';
import { FilterType, UpdateType } from '../mock/const.js';
import { filter } from '../utils/filter.js';
>>>>>>> Stashed changes

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  #pointModel = null;

  #filterComponent = null;

  constructor({filterContainer, filterModel, pointModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointModel = pointModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
=======
=======
>>>>>>> Stashed changes
  #pointsModel = null;

=======
  #pointsModel = null;
>>>>>>> Stashed changes
  #filterComponent = null;

  constructor({ filterContainer, filterModel, pointsModel }) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
<<<<<<< Updated upstream


    return Object.values(FilterType).map((type) => ({
      type
=======
    const points = this.#pointsModel.points;
    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](points).length
>>>>>>> Stashed changes
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MINOR, filterType);
  };
}
