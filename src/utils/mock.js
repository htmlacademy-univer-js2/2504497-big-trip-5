<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { mockDestinations } from '../mock/destination';
import { mockOffers } from '../mock/offers';

function getDestinationById(point) {
  return mockDestinations.find((destination) => destination.id === point.destinationID);
}
function getOffersByType(point) {
  return mockOffers.find((offer) => offer.type === point.type).offers;
}

function getDestinationByCityName(cityName) {
  return mockDestinations.find((destination) => destination.cityName === cityName);
}

const setSaveButtonDisabled = () => {
  document.querySelector('.event__save-btn').disabled = true;


};
export { getOffersByType, getDestinationById, getDestinationByCityName, setSaveButtonDisabled };
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
// import { mockDestinations } from '../mock/destination';
// import { mockOffers } from '../mock/offers';
//
// function getDestinationById(point) {
//   return mockDestinations.find((destination) => destination.id === point.destinationID);
// }
// function getOffersByType(point) {
//   return mockOffers.find((offer) => offer.type === point.type).offers;
// }
//
// function getDestinationByCityName(cityName) {
//   return mockDestinations.find((destination) => destination.cityName === cityName);
// }
//
// const setSaveButtonDisabled = () => {
//   document.querySelector('.event__save-btn').disabled = true;
//
//
// };
// export { getOffersByType, getDestinationById, getDestinationByCityName, setSaveButtonDisabled };
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
