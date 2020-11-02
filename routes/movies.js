const router = require('express').Router();
const { moviesMocks } = require('../utils/mocks/movies');

function moviesApi(app) {
  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMocks);
      res.status(200).json({
        data: movies,
        message: 'Movies listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(
        moviesMocks.find((movie) => movie.id === req.params.id)
      );
      res.status(200).json({
        data: movie,
        message: 'Movie retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createdMovieId = await Promise.resolve(moviesMocks[0].id);
      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:id', async (req, res, next) => {
    try {
      const updatedMovieId = await Promise.resolve(moviesMocks[0].id);
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    try {
      const deletedMovieId = await Promise.resolve(moviesMocks[0].id);
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
