import { render, replace, remove } from '../framework/render';
<<<<<<< Updated upstream
import StartingPoint from '../view/startingPoint';
=======
import StartingPointView from '../view/startingPoint';
>>>>>>> Stashed changes
import EditingFormView from '../view/formEdit';


const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #listComponent = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #mode = Mode.DEFAULT;
<<<<<<< Updated upstream
  #point = null;
  constructor({ listComponent, onDataChange, onModeChange }) {
=======
  #offers = null;
  #point = null;
  constructor({ listComponent, onDataChange, onModeChange, offers }) {
    this.#offers = offers;
>>>>>>> Stashed changes
    this.#listComponent = listComponent;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
<<<<<<< Updated upstream

    this.#pointComponent = new StartingPoint({
=======
    this.#pointComponent = new StartingPointView({
>>>>>>> Stashed changes
      point: this.#point,
      onButtonClick: this.#handleEditClick,
      onFavoriteClick: this.#onHandleFavoriteClick,
    });
<<<<<<< Updated upstream
    this.#pointEditComponent = new EditingFormView({
      point: this.#point,
=======

    this.#pointEditComponent = new EditingFormView({
      point: this.#point,
      offers: this.#offers,
>>>>>>> Stashed changes
      onFormSubmit: this.#handleFormSubmit,
      onFormHide: this.#handleHideForm,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#listComponent);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

<<<<<<< Updated upstream
  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
=======
  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#pointEditComponent.reset(this.#point);
>>>>>>> Stashed changes
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;

  }

  #replaceFormToCard() {
<<<<<<< Updated upstream
=======
    const updatedPoint = this.#pointEditComponent.parseStateToPoint;
    this.#point = updatedPoint;
    this.#handleDataChange(updatedPoint);
>>>>>>> Stashed changes
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
<<<<<<< Updated upstream
=======
      this.#pointEditComponent.reset(this.#point);
>>>>>>> Stashed changes
      this.#replaceFormToCard();
    }
  };

  #onHandleFavoriteClick = () => {
    this.#handleDataChange({ ...this.#point, isFavorite: !this.#point.isFavorite });
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToCard();
  };

  #handleHideForm = () => {
    this.#replaceFormToCard();
<<<<<<< Updated upstream
    // document.removeEventListener('keydown', this.#escKeyDownHandler);
=======
>>>>>>> Stashed changes
  };
}
