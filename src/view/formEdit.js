<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { humanizeEditingFormDate } from '../utils/date.js';
import { getDestinationById, getOffersByType, getDestinationByCityName, setSaveButtonDisabled } from '../utils/mock.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { POINT_TYPES,FLATPICKR_CONFIG } from '../mock/const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function createEditingFormTemplate(point) {
  const { type, price, startDate, endDate } = point;

=======
import {humanizeEditingFormDate} from '../utils/date.js';
import {setSaveButtonDisabled} from '../utils/mock.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {FLATPICKR_CONFIG, POINT_TYPES} from '../mock/const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function createEditingFormTemplate(point, offersArr, destinations) {
  const { type, price, startDate, endDate, destinationID, } = point;

>>>>>>> Stashed changes
  const dateStart = humanizeEditingFormDate(startDate);
  const dateEnd = humanizeEditingFormDate(endDate);
  const offers = offersArr ? offersArr.find((offer) => offer.type === point.type).offers : {};

  const destination = destinations.find((dest) => dest.id === destinationID) || {};
  const destinationName = destination.name || '';
  const destinationsDescription = destination.description || '';
  const destinationsListTemplate = destinations
    .map((dest) => `<option value="${dest.name}"></option>`).join('');


<<<<<<< Updated upstream
  const offers = getOffersByType(point);

=======
>>>>>>> Stashed changes
=======
import {humanizeEditingFormDate} from '../utils/date.js';
import {setSaveButtonDisabled} from '../utils/mock.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {FLATPICKR_CONFIG, POINT_TYPES} from '../mock/const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function createEditingFormTemplate(point, offersArr, destinations) {
  const { type, price, startDate, endDate, destinationID, } = point;

  const dateStart = humanizeEditingFormDate(startDate);
  const dateEnd = humanizeEditingFormDate(endDate);
  const offers = offersArr ? offersArr.find((offer) => offer.type === point.type).offers : {};

  const destination = destinations.find((dest) => dest.id === destinationID) || {};
  const destinationName = destination.name || '';
  const destinationsDescription = destination.description || '';
  const destinationsListTemplate = destinations
    .map((dest) => `<option value="${dest.name}"></option>`).join('');


>>>>>>> Stashed changes
  const offersTemplate = offers
    .map((offer) => {
      const checked = point.offers.includes(offer.id) ? 'checked' : '';
      return `<div class="event__offer-selector">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-comfort" ${checked}>
        <label class="event__offer-label" for="${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`;
    })
    .join('');
=======
      <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-comfort" ${checked}>
      <label class="event__offer-label" for="${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`;
    })
    .join('');

>>>>>>> Stashed changes
=======
      <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-comfort" ${checked}>
      <label class="event__offer-label" for="${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`;
    })
    .join('');

>>>>>>> Stashed changes
  const pointTypeTemplate = POINT_TYPES.map((pointType) => `
   <div class="event__type-item">
                          <input id="event-type-${pointType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}">
                          <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-1">${pointType}</label>
                        </div>
  `).join('');
  return `
 <li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                      ${pointTypeTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                    ${type} ${destinationName}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationName}" list="destination-list-1">
                    <datalist id="destination-list-1">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                      <option value="Los Angeles"></option>
                      <option value="">New York</option>
                      <option value="">Chicago</option>
                      <option value="">Houston</option>
                      <option value="">Phoenix</option>
                      <option value="">Philadelphia</option>
                      <option value="">San Antonio</option>
                      <option value="">San Diego</option>
                      <option value="">Dallas</option>
                      <option value="San Francisco"></option>

=======
                      ${destinationsListTemplate}
>>>>>>> Stashed changes
=======
                      ${destinationsListTemplate}
>>>>>>> Stashed changes
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                  ${offersTemplate}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destinationsDescription}</p>
                  </section>
                </section>
              </form>
            </li>
`;
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default class EditingFormView extends AbstractView {
  #point = null;
  #handleFormSubmit = null;
  #handleEditClick = null;
  #handleHideForm = null;
  constructor({ point, onFormSubmit, onButtonClick, onFormHide }) {
    super();
    this.#point = point;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleEditClick = onButtonClick;
    this.#handleHideForm = onFormHide;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#resetButtonClick);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
=======

=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
export default class EditingFormView extends AbstractStatefulView {
  #handleFormSubmit = null;
  #datepickerStart = null;
  #datepickerEnd = null;
  #handleHideForm = null;
  #handleDeleteClick = null;
<<<<<<< Updated upstream
<<<<<<< Updated upstream

  constructor({point, onFormSubmit, onFormHide, onDeleteClick }) {
    super();
    this._setState({ ...point });

=======
=======
>>>>>>> Stashed changes
  #offers = null;
  #destinations = null;
  constructor({ point, offers, destinations, onFormSubmit, onFormHide, onDeleteClick }) {
    super();
    this._setState({ ...point });
    this.#offers = offers;
    this.#destinations = destinations;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;
    this.#handleHideForm = onFormHide;

    this._restoreHandlers();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  }

  get template() {
    return createEditingFormTemplate(this._state);
  }

  removeElement() {
    super.removeElement();


    if(this.#datepickerStart) {
      this.#datepickerStart.destroy();
      this.#datepickerStart = null;
    }
    if(this.#datepickerEnd) {
      this.#datepickerEnd.destroy();
      this.#datepickerEnd = null;
    }
  }

  reset(point) {
    this.updateElement(point);
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#resetButtonClick);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelectorAll('.event__type-input').forEach((input) => {
      input.addEventListener('click', this.#typeChangeHandler);
    });

    this.element.querySelectorAll('.event__input--destination').forEach((input) => {
      input.addEventListener('change', this.#destinationChangeHandler);
    });
    this.element.querySelectorAll('.event__offer-checkbox').forEach((input) => {
      input.addEventListener('click', this.#offersChangeHandler);
    });
    this.element.querySelectorAll('.event__input--price').forEach((input) => {
      input.addEventListener('change', this.#priceChangeHandler);
    });
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);
    this.#setDatepickers();
=======
  }

  get template() {
    return createEditingFormTemplate(this._state, this.#offers, this.#destinations);
>>>>>>> Stashed changes
  }

=======
  }

  get template() {
    return createEditingFormTemplate(this._state, this.#offers, this.#destinations);
  }

>>>>>>> Stashed changes
  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  parseStateTo(state) {
    return {...state};
  }

  removeElement() {
    super.removeElement();


    if (this.#datepickerStart) {
      this.#datepickerStart.destroy();
      this.#datepickerStart = null;
    }
    if (this.#datepickerEnd) {
      this.#datepickerEnd.destroy();
      this.#datepickerEnd = null;
    }
  }

  reset(point) {
    this.updateElement(point);
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#resetButtonClick);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelectorAll('.event__type-input').forEach((input) => {
      input.addEventListener('click', this.#typeChangeHandler);
    });

    this.element.querySelectorAll('.event__input--destination').forEach((input) => {
      input.addEventListener('change', this.#destinationChangeHandler);
    });
    this.element.querySelectorAll('.event__offer-checkbox').forEach((input) => {
      input.addEventListener('click', this.#offersChangeHandler);
    });
    this.element.querySelectorAll('.event__input--price').forEach((input) => {
      input.addEventListener('change', this.#priceChangeHandler);
    });
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);
    this.#setDatepickers();
  }

  #formSubmitHandler = async (evt) => {
    evt.preventDefault();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    this.#handleFormSubmit(this.#point);
=======
    this.#handleFormSubmit(this._state.point);
>>>>>>> Stashed changes
=======
    const updatedPoint = this.parseStateTo(this._state);
    this.#handleFormSubmit(updatedPoint);
>>>>>>> Stashed changes
=======
    const updatedPoint = this.parseStateTo(this._state);
    this.#handleFormSubmit(updatedPoint);
>>>>>>> Stashed changes
  };

  #resetButtonClick = (evt) => {
    evt.preventDefault();
    this.#handleHideForm();
  };


  #typeChangeHandler = (evt) => {
    const target = evt.target;

    const pointType = target.value;

    this.updateElement({
      type: pointType,
      offers: []
    });

  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const cityName = evt.target.value;

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const destination = getDestinationByCityName(cityName);
=======
    const destination = this.destinations.find((dest) => dest.name === cityName);
>>>>>>> Stashed changes
=======
    const destination = this.destinations.find((dest) => dest.name === cityName);
>>>>>>> Stashed changes
    if (destination) {
      this.updateElement({
        destinationID: destination.id
      });
    } else {
      setSaveButtonDisabled();
    }
  };

  #offersChangeHandler = (evt) => {
    const offerId = Number(evt.target.id);
    this.updateElement({
      offers: this._state.offers.includes(offerId) ? this._state.offers.filter((id) => id !== offerId) : [...this._state.offers, offerId]
    });
  };

  #priceChangeHandler = (evt) => {
    evt.preventDefault();
    const pointPrice = evt.target.value;

    if (pointPrice > 0) {
      this.updateElement({
        ...this._state.point,
        price: pointPrice
      });
    } else {
      setSaveButtonDisabled();
    }
  };

  #closeDateStartHandler = ([date]) => {
    this.updateElement({
      startDate: date,
    });
  };

  #closeDateEndHandler = ([date]) => {
    this.updateElement({
<<<<<<< Updated upstream
<<<<<<< Updated upstream

      endDate: date,

=======
      endDate: date,
>>>>>>> Stashed changes
=======
      endDate: date,
>>>>>>> Stashed changes
    });
  };

  #setDatepickers = () => {

    this.#datepickerStart = flatpickr(this.element.querySelector('#event-start-time-1'), {
      ...FLATPICKR_CONFIG,
      defaultDate: this._state.startDate,
      onChange: this.#closeDateStartHandler,
      maxDate: this._state.endDate,
    });

    this.#datepickerEnd = flatpickr(this.element.querySelector('#event-end-time-1'), {
      ...FLATPICKR_CONFIG,
      defaultDate: this._state.endDate,
      onChange: this.#closeDateEndHandler,
      minDate: this._state.startDate,
    });
  };

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  #formDeleteClickHandler = (evt) =>{
=======
  #formDeleteClickHandler = (evt) => {
>>>>>>> Stashed changes
=======
  #formDeleteClickHandler = (evt) => {
>>>>>>> Stashed changes
    evt.preventDefault();
    this.#handleDeleteClick(this._state);
  };

  get parseStateToPoint() {
    return this._state;
  }
}
