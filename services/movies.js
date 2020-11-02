const { moviesMocks } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMocks);
    return movies || [];
  }

  async getMovie() {
    const movies = await Promise.resolve(moviesMocks[0]);
    return movies || [];
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(moviesMocks[0].id);
    return createMovieId || [];
  }

  async updateMovie() {
    const updateMovieId = await Promise.resolve(moviesMocks[0].id);
    return updateMovieId || [];
  }

  async parcialUpdateMovie() {
    const updateMovieId = await Promise.resolve(moviesMocks[0].id);
    return updateMovieId || [];
  }

  async deleteMovie() {
    const deleteMovieId = await Promise.resolve(moviesMocks[0].id);
    return deleteMovieId || [];
  }
}

module.exports = MoviesService;
