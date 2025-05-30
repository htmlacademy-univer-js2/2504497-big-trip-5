<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import {
  TripPlannerPresenter,
  siteContainerElement
} from './presenter/tripPresenter.js';
import PointsModel from './model/pointModel.js';
import FilterModel from './model/filterModel.js';
import FilterPresenter from './presenter/filterPresenter.js';
const filterContainer = document.querySelector('.trip-controls__filters');
const pointModel = new PointsModel();
const filterModel = new FilterModel();
const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement, filterModel,pointModel
});
const filterPresenter = new FilterPresenter({
  filterContainer: filterContainer,
  filterModel,
  pointModel
});
filterPresenter.init();
=======
import {TripPlannerPresenter,
  siteContainerElement
} from './presenter/tripPresenter';
import FilterPresenter from './presenter/filterPresenter';

import PointsModel from './model/pointModel';
import OffersModel from './model/offersModel';
import DestinationsModel from './model/destinationModel';
import FilterModel from './model/filterModel';

import NewPointButtonView from './view/newPointButtonView.js';
import { tripMain } from './presenter/tripPresenter';
import { render } from './framework/render.js';

import PointsApiService from './api/points-api-service.js';
import OffersApiService from './api/offers-api-service.js';
import DestinationsApiService from './api/destinations-api-service.js';

const AUTHORIZATION = 'Basic hS2sfS44wcl1sa2j';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const filterContainer = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });

const destinationsModel = new DestinationsModel({ destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION) });
await destinationsModel.init();

const offersModel = new OffersModel({ offersApiService: new OffersApiService(END_POINT, AUTHORIZATION) });
await offersModel.init();
const filterModel = new FilterModel();

const tripPlannerPresenter = new TripPlannerPresenter({
=======
import {TripPlannerPresenter,
  siteContainerElement
} from './presenter/tripPresenter';
import FilterPresenter from './presenter/filterPresenter';

import PointsModel from './model/pointModel';
import OffersModel from './model/offersModel';
import DestinationsModel from './model/destinationModel';
import FilterModel from './model/filterModel';

import NewPointButtonView from './view/newPointButtonView.js';
import { tripMain } from './presenter/tripPresenter';
import { render } from './framework/render.js';

import PointsApiService from './api/points-api-service.js';
import OffersApiService from './api/offers-api-service.js';
import DestinationsApiService from './api/destinations-api-service.js';

const AUTHORIZATION = 'Basic hS2sfS44wcl1sa2j';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const filterContainer = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });

const destinationsModel = new DestinationsModel({ destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION) });
await destinationsModel.init();

const offersModel = new OffersModel({ offersApiService: new OffersApiService(END_POINT, AUTHORIZATION) });
await offersModel.init();
const filterModel = new FilterModel();

const tripPlannerPresenter = new TripPlannerPresenter({
>>>>>>> Stashed changes
=======
import {TripPlannerPresenter,
  siteContainerElement
} from './presenter/tripPresenter';
import FilterPresenter from './presenter/filterPresenter';

import PointsModel from './model/pointModel';
import OffersModel from './model/offersModel';
import DestinationsModel from './model/destinationModel';
import FilterModel from './model/filterModel';

import NewPointButtonView from './view/newPointButtonView.js';
import { tripMain } from './presenter/tripPresenter';
import { render } from './framework/render.js';

import PointsApiService from './api/points-api-service.js';
import OffersApiService from './api/offers-api-service.js';
import DestinationsApiService from './api/destinations-api-service.js';

const AUTHORIZATION = 'Basic hS2sfS44wcl1sa2j';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const filterContainer = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });

const destinationsModel = new DestinationsModel({ destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION) });
await destinationsModel.init();

const offersModel = new OffersModel({ offersApiService: new OffersApiService(END_POINT, AUTHORIZATION) });
await offersModel.init();
const filterModel = new FilterModel();

const tripPlannerPresenter = new TripPlannerPresenter({
>>>>>>> Stashed changes
  TripPlannerContainer: siteContainerElement, filterModel, pointsModel, destinationsModel, offersModel,
  onNewPointDestroy: handleNewPointFormClose
});
const filterPresenter = new FilterPresenter({
  filterContainer: filterContainer,
  filterModel,
  pointsModel,
});
const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  tripPlannerPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

pointsModel.init().finally(() => {
  render(newPointButtonComponent, tripMain);
});
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
tripPlannerPresenter.init();
filterPresenter.init();
