<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { RenderPosition } from '../render.js';
import { render } from '../framework/render.js';
import CreationFormView from '../view/formCreate.js';
import SortingView from '../view/sort.js';
import FilterView from '../view/filter.js';
import StartPointListView from '../view/startPointList.js';
import TripInfoView from '../view/tripInfo.js';
import PointPresenter from './point-presenter.js';
import { updatePointData } from '../utils/dataBind.js';
=======
import {RenderPosition} from '../render.js';
import {remove, render} from '../framework/render.js';
import CreationFormView from '../view/formCreate.js';
import SortingView from '../view/sort.js';
import {filter} from '../utils/filter.js';
import StartingPointListView from '../view/startPointList.js';
import TripInfoView from '../view/tripInfo.js';
import PointPresenter from './pointPresenter.js';
import {FilterType, UpdateType, UserAction} from '../mock/const.js';
import NoPointView from '../view/noPointView.js';
>>>>>>> Stashed changes

const POINT_COUNT_PER_STEP = 8;
=======
import {RenderPosition} from '../render.js';
import {remove, render} from '../framework/render.js';
import CreationFormView from '../view/formCreate';
import SortingView from '../view/sort';
import {filter} from '../utils/filter.js';
import StartingPointListView from '../view/startPointList';
import TripInfoView from '../view/tripInfo';
import PointPresenter from './pointPresenter';
import {FilterType, UpdateType, UserAction} from '../mock/const.js';
import NoPointView from '../view/noPointView.js';
import NewPointPresenter from './newPointPresenter';
import LoadingView from '../view/loading';

const POINT_COUNT_PER_STEP = 5;
>>>>>>> Stashed changes
=======
import {RenderPosition} from '../render.js';
import {remove, render} from '../framework/render.js';
import CreationFormView from '../view/formCreate';
import SortingView from '../view/sort';
import {filter} from '../utils/filter.js';
import StartingPointListView from '../view/startPointList';
import TripInfoView from '../view/tripInfo';
import PointPresenter from './pointPresenter';
import {FilterType, UpdateType, UserAction} from '../mock/const.js';
import NoPointView from '../view/noPointView.js';
import NewPointPresenter from './newPointPresenter';
import LoadingView from '../view/loading';

const POINT_COUNT_PER_STEP = 5;
>>>>>>> Stashed changes
=======
import {RenderPosition} from '../render.js';
import {remove, render, replace} from '../framework/render.js';
import CreationFormView from '../view/formCreate';
import SortingView from '../view/sort';
import {filter} from '../utils/filter.js';
import StartingPointListView from '../view/startPointList';
import TripInfoView from '../view/tripInfoView.js';
import PointPresenter from './pointPresenter';
import {FilterType, UpdateType, UserAction, SortType} from '../mock/const.js';
import NoPointView from '../view/noPointView.js';
import NewPointPresenter from './newPointPresenter.js';
import LoadingView from '../view/loading.js';

const POINT_COUNT_PER_STEP = 5;
>>>>>>> Stashed changes
const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const siteContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

export default class TripPlannerPresenter {
  #TripPlannerContainer = null;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  #pointModel = null;
  #sortComponent = new SortingView();
  #tripInfoView = new TripInfoView();
<<<<<<< Updated upstream
  #filterView = new FilterView();
  #creationForm = new CreationFormView();
  #pointPresenters = new Map();
  #points = [];
  constructor({ TripPlannerContainer, pointModel }) {
=======
=======
=======
>>>>>>> Stashed changes
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #sortComponent = new SortingView();
  #tripInfoView = new TripInfoView();
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  #filterModel = null;
  #noPointComponent = null;
  #creationForm = new CreationFormView();
  #renderedPointCount = POINT_COUNT_PER_STEP;
  #pointPresenters = new Map();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  #filterType = FilterType.EVERYTHING;
  constructor({ TripPlannerContainer, pointModel,filterModel }) {
>>>>>>> Stashed changes
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointModel = pointModel;
    this.#filterModel = filterModel;
    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  #listComponent = new StartPointListView();

<<<<<<< Updated upstream
  init() {
    this.#points = [...this.#pointModel.points];
    this.#renderTrip();
  }

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  #renderCreationForm() {
    render(this.#creationForm, this.#listComponent.element);
  }

  #renderWaypointList() {
    render(this.#listComponent, this.#TripPlannerContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#TripPlannerContainer);
  }

  #renderTripInfo() {
    render(this.#tripInfoView, tripMain, RenderPosition.AFTERBEGIN);
  }

  #renderFilter() {
    render(this.#filterView, tripMain, RenderPosition.BEFOREEND);
=======
  get points(){
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointModel.points;
    return filter[this.#filterType](points);
>>>>>>> Stashed changes
=======
  #newPointPresenter = null;
  #loadingComponent = new LoadingView();
  #isLoading = true;

  #filterType = FilterType.EVERYTHING;
  #listComponent = new StartingPointListView();
  constructor({ TripPlannerContainer, pointsModel, filterModel, onNewPointDestroy, destinationsModel, offersModel, }) {
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#newPointPresenter = new NewPointPresenter({
      listComponent: this.#listComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy
    });
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

=======
  #newPointPresenter = null;
  #loadingComponent = new LoadingView();
  #isLoading = true;

  #filterType = FilterType.EVERYTHING;
  #listComponent = new StartingPointListView();
  constructor({ TripPlannerContainer, pointsModel, filterModel, onNewPointDestroy, destinationsModel, offersModel, }) {
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#newPointPresenter = new NewPointPresenter({
      listComponent: this.#listComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy
    });
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

>>>>>>> Stashed changes
  get destinations() {
    return this.#destinationsModel.destinations;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    return filter[this.#filterType](points);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }

  init() {
    this.#renderTrip();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
  }

  createPoint() {
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    const pointCount = this.points.length;
    const points = this.points.slice(0, Math.min(pointCount, this.#renderedPointCount));
    points.forEach((point) => this.#newPointPresenter.init(point, this.destinations, this.offers));

>>>>>>> Stashed changes
  }

=======
  }

  createPoint() {
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    const pointCount = this.points.length;
    const points = this.points.slice(0, Math.min(pointCount, this.#renderedPointCount));
    points.forEach((point) => this.#newPointPresenter.init(point, this.destinations, this.offers));
=======
  #pointsModel = null;
  #filterModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filterType = null;
  #tripInfoComponent = null;
  #tripInfoContainer = null;
  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;
  #sortComponent = new SortingView();
  #noPointComponent = null;
  #newPointPresenter = null;
  #renderedPointCount = 0;
  #listComponent = new StartingPointListView();
  #creationForm = new CreationFormView();
  #loadingComponent = new LoadingView();
  #isLoading = true;

  constructor({TripPlannerContainer, pointsModel, filterModel, destinationsModel, offersModel, onNewPointDestroy}) {
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filterType = FilterType.EVERYTHING;
    this.#tripInfoContainer = document.querySelector('.trip-main__trip-info');

    this.#newPointPresenter = new NewPointPresenter({
      listComponent: this.#listComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy
    });
>>>>>>> Stashed changes

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
    this.#destinationsModel.addObserver(this.#handleModelEvent);
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    return filter[this.#filterType](points);
  }

  init() {
    this.#renderTripInfo();
    this.#renderTrip();
  }

  createPoint() {
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    const pointCount = this.points.length;
    const points = this.points.slice(0, Math.min(pointCount, this.#renderedPointCount));
    points.forEach((point) => this.#newPointPresenter.init(point, this.destinations, this.offers));

  }

  #renderNoPoints() {
    this.#noPointComponent = new NoPointView({
      filterType: this.#filterType
    });
    render(this.#noPointComponent, this.#listComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderCreationForm() {
    render(this.#creationForm, this.#listComponent.element);
  }

  #renderWaypointList() {
    render(this.#listComponent, this.#TripPlannerContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#TripPlannerContainer);
  }

  #renderTripInfo() {
    const points = this.#pointsModel.points;
    const destinations = this.#destinationsModel.destinations;

    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      points,
      destinations
    });

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#tripInfoContainer);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

>>>>>>> Stashed changes
  #renderNoPoints() {
    this.#noPointComponent = new NoPointView({
      filterType: this.#filterType
    });
    render(this.#noPointComponent, this.#listComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderCreationForm() {
    render(this.#creationForm, this.#listComponent.element);
  }

  #renderWaypointList() {
    render(this.#listComponent, this.#TripPlannerContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#TripPlannerContainer);
  }

  #renderTripInfo() {
    render(this.#tripInfoView, tripMain, RenderPosition.AFTERBEGIN);
  }


  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      listComponent: this.#listComponent.element,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      onDataChange: this.#handlePointChange,
=======
      onDataChange: this.#handleViewAction,
>>>>>>> Stashed changes
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

<<<<<<< Updated upstream
=======
  #renderPoints(points){
    points.forEach((point)=>this.#renderPoint(point));
    if (this.points.length === 0) {
      this.#renderNoPoints();

    }
  }

>>>>>>> Stashed changes
  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

<<<<<<< Updated upstream
  #handlePointChange = (updatedPoint) => {
    this.#points = updatePointData(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderTrip() {
    this.#renderTripInfo();
    this.#renderSort();
    this.#renderFilter();
    this.#renderWaypointList();
<<<<<<< Updated upstream
    this.#renderCreationForm();
=======
>>>>>>> Stashed changes
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
=======
  #handleViewAction = (actionType,updatedType,update) => {
    switch(actionType){
      case UserAction.UPDATE_POINT:
        this.#pointModel.updatePoint(updatedType,update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointModel.deletePoint(updatedType,update);
        break;
      case UserAction.ADD_POINT:
        this.#pointModel.addPoint(updatedType,update);
=======
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, this.destinations, this.offers,);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

=======
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, this.destinations, this.offers,);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

>>>>>>> Stashed changes
=======
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, this.destinations, this.offers,);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

>>>>>>> Stashed changes
  #renderPoints(points, destinations, offers) {
    points.forEach((point) => this.#renderPoint(point, destinations, offers));
    if (this.points.length === 0) {
      this.#renderNoPoints();
    }
  }

  #handleModeChange = async () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = async (actionType, updatedType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
<<<<<<< Updated upstream
<<<<<<< Updated upstream

        await this.#pointsModel.updatePoint(updatedType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updatedType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updatedType, update);
>>>>>>> Stashed changes
=======
=======
>>>>>>> Stashed changes
        await this.#pointsModel.updatePoint(updatedType, update);
        break;
      case UserAction.DELETE_POINT:
        await this.#pointsModel.deletePoint(updatedType, update);
        break;
      case UserAction.ADD_POINT:
        await this.#pointsModel.addPoint(updatedType, update);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        break;
    }
  };

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  #handleModelEvent = (updatedType,data)=>{
    switch(updatedType){
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
=======
  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data, this.#destinationsModel.destinations, this.#offersModel.offers);
>>>>>>> Stashed changes
        break;
      case UpdateType.MINOR:
        this.#clearTripPlan();
        this.#renderTrip();
        break;
<<<<<<< Updated upstream
    }
  };

  #clearTripPlan(){
    const pointCount = this.points.length;

    this.#pointPresenters.forEach((presenter)=> presenter.destroy());
    this.#pointPresenters.clear();
    if (this.#noPointComponent) {
      remove(this.#noPointComponent);
    }
    this.#renderedPointCount = Math.min(pointCount, this.#renderedPointCount);
=======
=======
>>>>>>> Stashed changes
  #handleModelEvent = (updatedType, data) => {
    switch (updatedType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data, this.destinations, this.offers);
        break;
      case UpdateType.MINOR:
        this.#clearTripPlan();
        this.#renderTrip(this.events, this.destinations, this.offers);
        break;
      case UpdateType.MAJOR:
        this.#clearTripPlan();
=======
      case UpdateType.MAJOR:
        this.#clearTripPlan({resetRenderedPointCount: true, resetSortType: true});
>>>>>>> Stashed changes
        this.#renderTrip();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
<<<<<<< Updated upstream
        this.#renderTrip(this.events, this.destinations, this.offers);
        break;
    }
=======
        this.#renderTrip();
        break;
    }
    this.#renderTripInfo();
>>>>>>> Stashed changes
  };

  #clearTripPlan({ resetRenderedPointCount = false } = {}) {
    const pointCount = this.points.length;
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    remove(this.#loadingComponent);
    if (this.#noPointComponent) {
      remove(this.#noPointComponent);
    }
    if (resetRenderedPointCount) {
      this.#renderedPointCount = POINT_COUNT_PER_STEP;
    } else {

      this.#renderedPointCount = Math.min(pointCount, this.#renderedPointCount);
    }

  }

  #renderLoading() {
    render(this.#loadingComponent, this.#listComponent.element, RenderPosition.AFTERBEGIN);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }

  #renderTrip() {
    const points = this.points;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const pointCount = points.length;
    this.#renderTripInfo();
    this.#renderSort();

    this.#renderWaypointList();

    this.#renderPoints(points.slice(0,Math.min(pointCount, this.#renderedPointCount)));
>>>>>>> Stashed changes
  }
}

export { TripPlannerPresenter, siteContainerElement,tripMain };
=======
    this.#renderTripInfo();
    this.#renderSort();
    this.#renderWaypointList();
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    this.#renderPoints(points);
  }
}

export { TripPlannerPresenter, siteContainerElement, tripMain };
>>>>>>> Stashed changes
=======
    this.#renderTripInfo();
    this.#renderSort();
    this.#renderWaypointList();
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    this.#renderPoints(points);
  }
}

export { TripPlannerPresenter, siteContainerElement, tripMain };
>>>>>>> Stashed changes
=======
    this.#renderSort();
    this.#renderWaypointList();
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    this.#renderPoints(points);
  }
}

export { TripPlannerPresenter, siteContainerElement, tripMain };
>>>>>>> Stashed changes
