const MoviesService = require('../services/movies');

const router = require('express').Router();

function moviesApi(app) {
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res, next) => {
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

  router.get('/:id', async (req, res, next) => {
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
  });

  router.post('/', async (req, res, next) => {
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
  });

  router.put('/:id', async (req, res, next) => {
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
  });

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

  router.delete('/:id', async (req, res, next) => {
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
  });
}

module.exports = moviesApi;
