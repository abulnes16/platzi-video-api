const { moviesMocks } = require('../utils/mocks/movies');

const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ id }) {
    const movies = await this.mongoDB.get(this.collection, id);
    return movies || {};
  }

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  async updateMovie({ id, movie } = {}) {
    const updateMovieId = await this.mongoDB.update(this.collection, id, movie);
    return updateMovieId;
  }

  async parcialUpdateMovie() {
    const updateMovieId = await Promise.resolve(moviesMocks[0].id);
    return updateMovieId || [];
  }

  async deleteMovie({ id }) {
    const deleteMovieId = await this.mongoDB.delete(this.collection, id);
    return deleteMovieId || [];
  }
}

module.exports = MoviesService;
