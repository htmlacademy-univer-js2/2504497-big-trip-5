import { render, replace, remove } from '../framework/render';
import StartingPointView from '../view/startingPoint';
import EditingFormView from '../view/formEdit';
<<<<<<< Updated upstream
import { UserAction,UpdateType } from '../mock/const';
// import { isDatesEqual } from '../utils/date';
=======
import { UserAction, UpdateType } from '../mock/const';
>>>>>>> Stashed changes

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
  #offers = null;
  #point = null;
  constructor({ listComponent, onDataChange, onModeChange, offers }) {
    this.#offers = offers;
=======
  #isPointSaving = true;
  #isEventEditing = false;
  #isOtherFormOpen = false;
  #offers = null;
  #point = null;
  #destinations = null;
  constructor({ listComponent, onDataChange, onModeChange }) {

>>>>>>> Stashed changes
    this.#listComponent = listComponent;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

<<<<<<< Updated upstream
  init(point) {
    this.#point = point;
=======
  init(point, destinations, offers) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
>>>>>>> Stashed changes

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    this.#pointComponent = new StartingPointView({
      point: this.#point,
<<<<<<< Updated upstream
      onButtonClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditingFormView({
      point: this.#point,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
=======
      destinations: this.#destinations,
      offers: this.#offers,
      onButtonClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });
    this.#pointEditComponent = new EditingFormView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: async () => this.#replaceFormToCard(),
>>>>>>> Stashed changes
      onFormHide: this.#handleHideForm,
      onDeleteClick: this.#handleDeleteClick,
    });

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#pointEditComponent.reset(this.#point);
<<<<<<< Updated upstream
=======
      this.#isOtherFormOpen = true;
>>>>>>> Stashed changes
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm() {
<<<<<<< Updated upstream
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;

  }

  #replaceFormToCard() {
    const updatedPoint = this.#pointEditComponent._state;
    this.#point = updatedPoint;
    this.#handleDataChange(UserAction.UPDATE_POINT,UpdateType.PATCH,updatedPoint);
    replace(this.#pointComponent, this.#pointEditComponent);
=======

    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#handleModeChange().then(() => {
      replace(this.#pointEditComponent, this.#pointComponent);
    });

    this.#mode = Mode.EDITING;
    this.#isEventEditing = true;
  }

  async #replaceFormToCard() {
    const updatedPoint = this.#pointEditComponent.parseStateTo(this.#pointEditComponent._state);
    const updatedDestination = this.#pointEditComponent.destinations;
    const updatedOffers = this.#pointEditComponent.offers;
    this.#point = updatedPoint;
    if (!this.#isOtherFormOpen && this.#isPointSaving) {
      await this.#handleDataChange(
        UserAction.UPDATE_POINT,
        UpdateType.PATCH,
        updatedPoint,
        updatedDestination,
        updatedOffers
      );
    }

    this.#isPointSaving = true;
    this.#isOtherFormOpen = false;

    // this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH, updatedPoint);
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#isEventEditing = false;
>>>>>>> Stashed changes
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#pointEditComponent.reset(this.#point);
      this.#replaceFormToCard();
    }
  };

  #handleFavoriteClick = () => {
<<<<<<< Updated upstream
    this.#handleDataChange(UserAction.UPDATE_TASK,UpdateType.MINOR,{ ...this.#point, isFavorite: !this.#point.isFavorite });
=======
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH, { ...this.#point, isFavorite: !this.#point.isFavorite });
>>>>>>> Stashed changes
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFormSubmit = (update) => {
<<<<<<< Updated upstream
    this.#handleDataChange(UserAction.UPDATE_TASK, UpdateType.PATCH,
=======
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH,
>>>>>>> Stashed changes
      update,);
    this.#replaceFormToCard();
  };

  #handleHideForm = () => {
    this.#replaceFormToCard();
  };

<<<<<<< Updated upstream
  #handleDeleteClick = (point)=> {
=======
  #handleDeleteClick = (point) => {
>>>>>>> Stashed changes
    this.#handleDataChange(UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point,);
  };
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
}
