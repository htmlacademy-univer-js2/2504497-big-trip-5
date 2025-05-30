import AbstractView from '../framework/view/abstract-view.js';
import { FilterType } from '../mock/const.js';

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
};

function createNoPointTemplate(filterType) {
  const noPointTextValue = NoPointsTextType[filterType];

  return (
    `<p class="trip-events__msg">${noPointTextValue}</p>`
  );
}

export default class NoPointView extends AbstractView {
  #filterType = null;

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  constructor({filterType}) {
=======
  constructor({ filterType }) {
>>>>>>> Stashed changes
=======
  constructor({ filterType }) {
>>>>>>> Stashed changes
=======
  constructor({ filterType }) {
>>>>>>> Stashed changes
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointTemplate(this.#filterType);
  }
}
