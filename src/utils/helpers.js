import moment from 'moment-timezone';

const helpers = {
  getCurrentTime() {
    const timezone = moment.tz.guess();
    const time = moment.tz(timezone).format("dddd, h:mma");
    return time;
  }
};

export default helpers;
