import moment from 'moment-timezone';
import Trie from './autocomplete/index';
import cities from './cities';

const trie = new Trie();
trie.populate(cities.data);

const helpers =
{
  getCurrentTime() {
    const timezone = moment.tz.guess();
    const time = moment.tz(timezone).format('dddd, h:mma');
    return time;
  },

  getDay(timestamp) {
    return moment.unix(timestamp).format('ddd').toUpperCase();
  },

  filterCities(input) {
    const formattedInput = this._format(input);
    const suggestions = trie.suggest(formattedInput);
    return suggestions.slice(0, 5);
  },

  _format(input) {
    const inputArray = input.split(', ');
    const [city, state] = inputArray;
    const formattedCity = this._toTitleCase(city);

    if (state) {
     const formattedState = state.toUpperCase();
     return `${formattedCity}, ${formattedState}`;
    }

    return formattedCity;
  },

  _toTitleCase(city) {
    const titleCased =
      city
      .split(' ')
      .map((word) => {
        return (word === '') ? '' : word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
    return titleCased;
  },

  isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
  },

  createErrorMsg(errorMsg) {
    errorMsg.name = ''; // get rid of the scary word "Error" from the message
    return errorMsg.toString();
  },

  getCityFrom(value) {
    return value.substr(0, value.indexOf(','));
  },

  select(value) {
    trie.select(value);
  }
};

export default helpers;
