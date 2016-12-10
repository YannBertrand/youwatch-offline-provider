const utils = require('./utils');

module.exports = (() => {

  let config;

  function init(callback, _config) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testObject('config', _config));

    config = _config;

    return callback();
  }

  function refreshSubscriptions(callback) {
    utils.testCallback(callback);

    return callback();
  }

  function refreshVideos(callback, channel) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testOptionalObject('channel', channel));

    return callback(null, []);
  }

  function getVideos(callback, channel) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testOptionalObject('channel', channel));

    return callback(null, []);
  }

  function getOlderVideos(callback, video) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testOptionalObject('video', video));

    return callback(null, []);
  }

  function videoProgress(callback, video, time) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testObject('video', video));
    utils.returnCallbackError(utils.testString('time', time));

    return callback();
  }

  return {
    init,
    refreshSubscriptions,
    refreshVideos,
    getVideos,
    getOlderVideos,
    videoProgress,
  };

})();
