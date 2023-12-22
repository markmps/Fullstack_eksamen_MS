import { Movie, IMovie } from '../models/movie.model';
import { Actor, IActor } from '../models/actor.model';
import { Review, IReview } from '../models/review.model';

export default {
    addMovie: async (_parent:never, {title, year}: {title: string, year: number}) => {
        const result = await Movie.create({
            title: title,
            year: year
        });
        return result;
    },
    deleteMovie: async (_parent:never, { id }:IMovie) => {
        const result = await Movie.findByIdAndDelete(id);
        return result ? true : false;
      },
    addActor: async (_parent:never, {name, age}: {name: string, age: number}) => {
        const result = await Actor.create({
            name: name,
            age: age
        });
        return result;
    },
    addReview: async (_parent:never, {description, rating}: {description: string, rating: number}) => {
        const result = await Review.create({
            description: description,
            rating: rating
        });
        return result;
    },
    createMovie: async (_parent:never, { title, year }:IMovie) => {
        const newMovie = new Movie({ title, year });
        await newMovie.save();
        return newMovie;
      },
      updateMovie: async (_parent:never, { id, title, year }:IMovie) => {
        const result = await Movie.findByIdAndUpdate(id, {title, year});
        return result;
      },
    addActorToMovie: async (_: any, args: { actorId: string; movieId: string }): Promise<IMovie | null> => {
        const movie = await Movie.findByIdAndUpdate(
          args.movieId,
          { $addToSet: { actors: args.actorId } },
          { new: true }
        ).populate('actors');
        return movie;
        },
    addReviewToMovie: async (_: any, args: { reviewId: string; movieId: string }): Promise<IMovie | null> => {
            const movie = await Movie.findByIdAndUpdate(
              args.movieId,
              { $addToSet: { reviews: args.reviewId } },
              { new: true }
            ).populate('reviews');
            return movie;
            },
    addMovieToActor: async (_: any, args: { movieId: string; actorId: string }): Promise<IActor | null> => {
                const actor = await Actor.findByIdAndUpdate(
                  args.actorId,
                  { $addToSet: { movies: args.movieId } },
                  { new: true }
                ).populate('movies');
                return actor;
                }

}