const fs = require('fs');

const utils = require('./utils');

module.exports = (() => {

  let folder;

  function getName() { return 'offline'; }

  function init(callback, options) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testObject('options', options));
    utils.returnCallbackError(utils.testFunction('options.config.has', options.config.has));
    utils.returnCallbackError(utils.testFunction('options.config.get', options.config.get));
    utils.returnCallbackError(utils.testFunction('options.config.set', options.config.set));
    utils.returnCallbackError(utils.testFunction('options.app', options.app.getPath));

    if (!options.config.has(getName())) {
      options.config.set(getName(), {
        folder: options.app.getPath('videos'),
      });
    }

    folder = options.config.get(getName() + '.folder');

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

    fs.readdir(folder, (err, files) => {
      if (err) {
        return callback(err);
      }

      const videos = [];

      files.forEach(file => {
        videos.push({
          file
        });
      });

      return callback(null, videos);
    });
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
    getName,
    init,
    refreshSubscriptions,
    refreshVideos,
    getVideos,
    getOlderVideos,
    videoProgress,
  };

})();
