const MoviesService = require('../services/movies');

const router = require('express').Router();
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

function moviesApi(app) {
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res, next) => {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;

    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'Movies listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:id',
    validationHandler({ id: movieIdSchema }, 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { id } = req.params;
      try {
        const movie = await moviesService.getMovie({ id });
        res.status(200).json({
          data: movie,
          message: 'Movie retrieved',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;

      try {
        const createdMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createdMovieId,
          message: 'Movie created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:id',
    validationHandler({ id: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { id } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({ id, movie });
        res.status(200).json({
          data: updatedMovieId,
          message: 'Movie updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.parcialUpdateMovie({
        id,
        movie,
      });
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete(
    '/:id',
    validationHandler({ id: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { id } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ id });
        res.status(200).json({
          data: deletedMovieId,
          message: 'Movie deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
