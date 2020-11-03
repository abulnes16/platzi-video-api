const assert = require('assert');

const proxyquire = require('proxyquire');

const { getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');
const { moviesMocks } = require('../utils/mocks/movies');

describe('services-movies', () => {
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock,
  });

  const moviesService = new MoviesService();
  describe('When getMovies method is called', async () => {
    it('should call the getAll MongoLib method', async () => {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async () => {
      const result = await moviesService.getMovies({});
      const expected = moviesMocks;
      assert.deepStrictEqual(result, expected);
    });
  });
});
