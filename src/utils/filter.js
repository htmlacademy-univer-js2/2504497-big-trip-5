import { FilterType } from '../mock/const';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import dayjs from 'dayjs';

const filter = {
  [FilterType.EVERYTHING]: (points) => points.filter((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.startDate) > Date.now()),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs(point.startDate) < Date.now() && dayjs(point.endDate) > Date.now()),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs((point.endDate)) < Date.now()),
};

=======
=======
>>>>>>> Stashed changes

import dayjs from 'dayjs';
const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.startDate) > dayjs()),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs(point.startDate) <= dayjs() && dayjs(point.endDate) >= dayjs()),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs((point.endDate)) < dayjs()),
};


<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
export {filter};
