const should = require('should');

const BoilerplateProvider = require('../src/index');

describe('BoilerplateProvider', () => {

  it('should exists', () => {
    should(BoilerplateProvider).not.be.null;
  });

  describe('#init', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.init).not.be.null;
      should(BoilerplateProvider.init).be.a.Function;
    });

    describe('#init()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.init).throw(Error);
      });
    });

    describe('#init(callback, config)', () => {
      it('should call the callback when arguments are present', (done) => {
        const config = { get: () => {}, set: () => {} };

        BoilerplateProvider.init(done, config);
      });
    });
  });

  describe('#refreshSubscriptions', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.refreshSubscriptions).not.be.null;
      should(BoilerplateProvider.refreshSubscriptions).be.a.Function;
    });

    describe('#refreshSubscriptions()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.refreshSubscriptions).throw(Error);
      });
    });

    describe('#refreshSubscriptions(callback)', () => {
      it('should call the callback', (done) => {
        BoilerplateProvider.refreshSubscriptions((err) => {
          should(err).be.undefined;
          done();
        });
      });
    });
  });

  describe('#refreshVideos', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.refreshVideos).not.be.null;
      should(BoilerplateProvider.refreshVideos).be.a.Function;
    });

    describe('#refreshVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.refreshVideos).throw(Error);
      });
    });

    describe('#refreshVideos(callback)', () => {
      it('should call the callback', (done) => {
        BoilerplateProvider.refreshVideos((err) => {
          should(err).be.undefined;
          done();
        });
      });
    });
  });

  describe('#refreshVideos', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.refreshVideos).not.be.null;
      should(BoilerplateProvider.refreshVideos).be.a.Function;
    });

    describe('#refreshVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.refreshVideos).throw(Error);
      });
    });

    describe('#refreshVideos(callback)', () => {
      it('should call the callback', (done) => {
        BoilerplateProvider.refreshVideos((err) => {
          should(err).be.undefined;
          done();
        });
      });
    });

    describe('#refreshVideos(callback, channel)', () => {
      it('should accept an optional channel parameter', (done) => {
        const channel = { id: 1 };
        BoilerplateProvider.refreshVideos((err) => {
          should(err).be.undefined;
          done();
        }, channel);
      });
    });
  });

  describe('#getVideos', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.getVideos).not.be.null;
      should(BoilerplateProvider.getVideos).be.a.Function;
    });

    describe('#getVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.getVideos).throw(Error);
      });
    });

    describe('#getVideos(callback)', () => {
      it('should call the callback', (done) => {
        BoilerplateProvider.getVideos((err) => {
          should(err).be.undefined;
          done();
        });
      });
    });

    describe('#getVideos(callback, channel)', () => {
      it('should accept an optional channel parameter', (done) => {
        const channel = { id: 1 };

        BoilerplateProvider.getVideos((err) => {
          should(err).be.undefined;
          done();
        }, channel);
      });
    });
  });

  describe('#getOlderVideos', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.getOlderVideos).not.be.null;
      should(BoilerplateProvider.getOlderVideos).be.a.Function;
    });

    describe('#getOlderVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.getOlderVideos).throw(Error);
      });
    });

    describe('#getOlderVideos(callback)', () => {
      it('should call the callback', (done) => {
        BoilerplateProvider.getOlderVideos((err) => {
          should(err).be.undefined;
          done();
        });
      });
    });

    describe('#getOlderVideos(callback, video)', () => {
      it('should accept an optional video parameter', (done) => {
        const video = { id: 1 };

        BoilerplateProvider.getOlderVideos((err) => {
          should(err).be.undefined;
          done();
        }, video);
      });
    });
  });

  describe('#videoProgress', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.videoProgress).not.be.null;
      should(BoilerplateProvider.videoProgress).be.a.Function;
    });

    describe('#videoProgress()', () => {
      it('should throw an error if no argument are passed', () => {
        should(BoilerplateProvider.videoProgress).throw(Error);
      });
    });

    describe('#videoProgress(callback)', () => {
      it('should throw an error if video or time are not passed', () => {
        const callback = (err) => {
          should(err).exists;
          done();
        };
        const video = { id: 1 };
        const time = '08:00';

        should(BoilerplateProvider.videoProgress.bind(null, callback)).throw(Error);
        should(BoilerplateProvider.videoProgress.bind(null, callback, video)).throw(Error);
        should(BoilerplateProvider.videoProgress.bind(null, callback, null, time)).throw(Error);
      });
    });

    describe('#videoProgress(callback, video, time)', () => {
      it('should only works with video and time parameters', (done) => {
        const video = { id: 1 };
        const time = '08:00';

        BoilerplateProvider.videoProgress((err) => {
          should(err).be.undefined;
          done();
        }, video, time);
      });
    });
  });

});
