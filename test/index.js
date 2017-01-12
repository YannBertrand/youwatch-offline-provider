const should = require('should');
const path = require('path');

const OfflineProvider = require('../src/index');

const emptyFolderOptions = {
  config: {
    has: () => {},
    set: () => {},
    get: () => { return path.join(__dirname, 'fixtures', 'empty') },
  },
  app: {
    getPath: () => {},
  },
};

const videoFolderOptions = {
  config: {
    has: () => {},
    set: () => {},
    get: () => { return path.join(__dirname, 'fixtures', 'videos') },
  },
  app: {
    getPath: () => {},
  },
};

describe('OfflineProvider', () => {

  it('should exists', () => {
    should(OfflineProvider).not.be.null;
  });

  describe('#getName', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.getName).not.be.null;
      should(OfflineProvider.getName).be.a.Function();
    });

    describe('#getName()', () => {
      it('should be sync return a string', () => {
        const name = OfflineProvider.getName();

        should(name).be.a.String();
        should(name).not.containEql('.');
      });
    });
  });

  describe('#getConfigPrefix', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.getConfigPrefix).not.be.null;
      should(OfflineProvider.getConfigPrefix).be.a.Function();
    });

    describe('#getConfigPrefix()', () => {
      it('should be sync return a string', () => {
        const name = OfflineProvider.getConfigPrefix();

        should(name).be.a.String();
        should(name).startWith('providers.');
      });
    });
  });

  describe('#init', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.init).not.be.null;
      should(OfflineProvider.init).be.a.Function();
    });

    describe('#init()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.init).throw(Error);
      });
    });

    describe('#init(callback, options)', () => {
      it('should call the callback when arguments are present', (done) => {
        OfflineProvider.init(done, emptyFolderOptions);
      });
    });
  });

  describe('#refreshSubscriptions', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.refreshSubscriptions).not.be.null;
      should(OfflineProvider.refreshSubscriptions).be.a.Function();
    });

    describe('#refreshSubscriptions()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.refreshSubscriptions).throw(Error);
      });
    });

    describe('#refreshSubscriptions(callback)', () => {
      it('should call the callback', (done) => {
        OfflineProvider.refreshSubscriptions((err) => {
          should.not.exist(err);
          done();
        });
      });
    });
  });

  describe('#refreshVideos', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.refreshVideos).not.be.null;
      should(OfflineProvider.refreshVideos).be.a.Function();
    });

    describe('#refreshVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.refreshVideos).throw(Error);
      });
    });

    describe('#refreshVideos(callback)', () => {
      it('should call the callback', (done) => {
        OfflineProvider.refreshVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });
  });

  describe('#refreshVideos', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.refreshVideos).not.be.null;
      should(OfflineProvider.refreshVideos).be.a.Function();
    });

    describe('#refreshVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.refreshVideos).throw(Error);
      });
    });

    describe('#refreshVideos(callback)', () => {
      it('should call the callback', (done) => {
        OfflineProvider.refreshVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('#refreshVideos(callback, channel)', () => {
      it('should accept an optional channel parameter', (done) => {
        const channel = { id: 1 };
        OfflineProvider.refreshVideos((err) => {
          should.not.exist(err);
          done();
        }, channel);
      });
    });
  });

  describe('#getVideos', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.getVideos).not.be.null;
      should(OfflineProvider.getVideos).be.a.Function();
    });

    describe('#getVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.getVideos).throw(Error);
      });
    });

    describe('#getVideos(callback) with test/fixtures/empty folder', () => {
      before((done) => {
        OfflineProvider.init((err) => {
          should.not.exist(err);
          done();
        }, emptyFolderOptions);
      });

      it('should return an empty array', (done) => {
        OfflineProvider.getVideos((err, videos) => {
          should.not.exist(err);
          should(videos).be.an.Array();
          should(videos).be.empty();

          done();
        });
      });
    });

    describe('#getVideos(callback) with test/fixtures/videos folder', () => {
      before((done) => {
        OfflineProvider.init((err) => {
          should.not.exist(err);
          done();
        }, videoFolderOptions);
      });

      it('should return an array of 3 videos', (done) => {
        OfflineProvider.getVideos((err, videos) => {
          should.not.exist(err);
          should(videos).be.an.Array();
          should(videos).have.lengthOf(3);

          done();
        });
      });
    });

    describe('#getVideos(callback, channel) with test/fixtures/empty folder', () => {
      before((done) => {
        OfflineProvider.init((err) => {
          should.not.exist(err);
          done();
        }, emptyFolderOptions);
      });

      it('should return an empty array', (done) => {
        const channel = { id: 1 };

        OfflineProvider.getVideos((err, videos) => {
          should.not.exist(err);
          should(videos).be.an.Array();
          should(videos).be.empty();

          done();
        }, channel);
      });
    });

    describe('#getVideos(callback, channel) with test/fixtures/videos folder', () => {
      before((done) => {
        OfflineProvider.init((err) => {
          should.not.exist(err);
          done();
        }, videoFolderOptions);
      });

      it('should not care about the channel param', (done) => {
        const channel = { id: 1 };

        OfflineProvider.getVideos((err, videos) => {
          should.not.exist(err);
          should(videos).be.an.Array();
          should(videos).have.lengthOf(3);

          done();
        }, channel);
      });
    });
  });

  describe('#getOlderVideos', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.getOlderVideos).not.be.null;
      should(OfflineProvider.getOlderVideos).be.a.Function();
    });

    describe('#getOlderVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.getOlderVideos).throw(Error);
      });
    });

    describe('#getOlderVideos(callback)', () => {
      it('should call the callback', (done) => {
        OfflineProvider.getOlderVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('#getOlderVideos(callback, video)', () => {
      it('should accept an optional video parameter', (done) => {
        const video = { id: 1 };

        OfflineProvider.getOlderVideos((err) => {
          should.not.exist(err);
          done();
        }, video);
      });
    });
  });

  describe('#videoProgress', () => {
    it('should be defined and be a function', () => {
      should(OfflineProvider.videoProgress).not.be.null;
      should(OfflineProvider.videoProgress).be.a.Function();
    });

    describe('#videoProgress()', () => {
      it('should throw an error if no argument are passed', () => {
        should(OfflineProvider.videoProgress).throw(Error);
      });
    });

    describe('#videoProgress(callback)', () => {
      it('should throw an error if video or time are not passed', () => {
        const callback = (err) => {
          should.exist(err);
          done();
        };
        const video = { id: 1 };
        const time = '08:00';

        should(OfflineProvider.videoProgress.bind(null, callback)).throw(Error);
        should(OfflineProvider.videoProgress.bind(null, callback, video)).throw(Error);
        should(OfflineProvider.videoProgress.bind(null, callback, null, time)).throw(Error);
      });
    });

    describe('#videoProgress(callback, video, time)', () => {
      it('should only works with video and time parameters', (done) => {
        const video = { id: 1 };
        const time = '08:00';

        OfflineProvider.videoProgress((err) => {
          should.not.exist(err);
          done();
        }, video, time);
      });
    });
  });

});
