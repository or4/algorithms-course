import moment from 'moment';

const dateFormat = 'llll';

export const getNowFormatted = () => (
  moment().format(dateFormat)
);

export const getFormattedDate = value => (
  value.format(dateFormat)
);

export const parseDate = value => (
  moment(value, dateFormat, true)
);

export const isValid = dateString => (
  moment(dateString, dateFormat, true).isValid()
);
