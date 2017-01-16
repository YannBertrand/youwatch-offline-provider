# youwatch-offline-provider
**Stability: 1 - Experimental**

[![Build Status](https://travis-ci.org/yannbertrand/youwatch-offline-provider.svg?branch=master)](https://travis-ci.org/yannbertrand/youwatch-offline-provider)

## Description
A [YouWatch](https://github.com/yannbertrand/YouWatch) offline provider

## Usage
```
const OfflineProvider = require('youwatch-offline-provider');
const path = require('path');
const Config = require('conf');

const config = new Config();

const options = {
  config,
  app: {
    getPath: () => path.join(__dirname, 'videos')
  },
};

OfflineProvider.init(function (err) {
  if (err) // ...

  OfflineProvider.getVideos(function (err, videos) {
    if (err) // ...

    // Here is the list of videos in ./videos/ folder
    console.log(videos);
  });
}, options);

```
