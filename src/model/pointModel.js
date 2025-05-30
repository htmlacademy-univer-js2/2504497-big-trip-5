<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { getRandomPoint } from '../mock/point.js';
import Observable from '../framework/observable.js';
=======
import Observable from '../framework/observable.js';
import { UpdateType } from '../mock/const.js';
>>>>>>> Stashed changes
=======
import Observable from '../framework/observable.js';
import { UpdateType } from '../mock/const.js';
>>>>>>> Stashed changes
=======
import Observable from '../framework/observable.js';
import { UpdateType } from '../mock/const.js';
>>>>>>> Stashed changes

export default class PointsModel extends Observable {
  #points = [];
  #pointsApiService = null;
<<<<<<< Updated upstream
<<<<<<< Updated upstream

  constructor({ pointsApiService }) {
    super();

    this.#pointsApiService = pointsApiService;

  }

<<<<<<< Updated upstream
export default class PointsModel extends Observable {
  #points = Array.from({ length: POINT_COUNT }, getRandomPoint);

=======
>>>>>>> Stashed changes
=======

  constructor({ pointsApiService }) {
    super();

    this.#pointsApiService = pointsApiService;

  }

>>>>>>> Stashed changes
=======

  constructor({ pointsApiService }) {
    super();

    this.#pointsApiService = pointsApiService;

  }

>>>>>>> Stashed changes
  get points() {
    return this.#points;
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  set points(points){
    this.#points = points;
  }

  updatePoint(updatedType,update){
    const index = this.#points.findIndex((point)=>point.id === update.id);

    if(index === -1){
      throw new Error('Can\' update unexisting point');
    }

    this.#points = [
      ...this.#points.splice(index, 1, update),
    ];

    this._notify(updatedType,update);
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  async init() {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
    } catch (err) {

      this.#points = [];
    }
    this._notify(UpdateType.INIT);
  }

  async updatePoint(updatedType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\' update unexisting point');
    }

    const response = await this.#pointsApiService.updatePoint(update);
    const updatedPoint = this.#adaptToClient(response);
    this.#points = [
      ...this.#points.slice(0, index),
      updatedPoint,
      ...this.#points.slice(index + 1)
    ];

    this._notify(updatedType, update);

<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

<<<<<<< Updated upstream
  deletePoint(updatedType,update){
    const index = this.#points.findIndex((point)=>point.id === update.id);
    if(index === -1){
      throw new Error('Can\' delete unexisting point');
    }

    this.#points = [
      ...this.#points.splice(index, 1),
    ];

    this._notify(updatedType);

=======
  deletePoint(updatedType, update) {
=======
=======
>>>>>>> Stashed changes
  }

  async addPoint(updateType, update) {
    const response = await this.#pointsApiService.addPoint(update);
    const newPoint = this.#adaptToClient(response);
    this.#points = [newPoint, ...this.#points];
    this._notify(updateType, newPoint);
  }

  async deletePoint(updatedType, update) {
    await this.#pointsApiService.deletePoint(update);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    const index = this.#points.findIndex((point) => point.id === update.id);
    if (index === -1) {
      throw new Error('Can\' delete unexisting point');
    }
<<<<<<< Updated upstream
<<<<<<< Updated upstream

    this.#points.splice(index, 1);

=======
    this.#points.splice(index, 1);
>>>>>>> Stashed changes
=======
    this.#points.splice(index, 1);
>>>>>>> Stashed changes
    this._notify(updatedType);
  }

  #adaptToClient(point) {
    const adaptedTask = {
      ...point,
      startDate: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      endDate: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      destinationID: point['destination'],
      price: point['base_price'],
      isFavorite: point['is_favorite'],
    };
    delete adaptedTask['date_from'];
    delete adaptedTask['date_to'];
    delete adaptedTask['destination'];
    delete adaptedTask['base_price'];
    delete adaptedTask['is_favorite'];

    return adaptedTask;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }
}
