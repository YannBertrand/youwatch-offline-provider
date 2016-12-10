const fs = require('fs');

const utils = require('./utils');

module.exports = (() => {

  let folder;

  function init(callback, options) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testObject('options', options));

    folder = options.folder || require('path').join(__dirname, 'YouWatch');

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
    init,
    refreshSubscriptions,
    refreshVideos,
    getVideos,
    getOlderVideos,
    videoProgress,
  };

})();
