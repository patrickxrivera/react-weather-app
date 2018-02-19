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
    const suggestions = trie.suggest(input);
    return suggestions.slice(0, 5);
  }
};

export default helpers;
