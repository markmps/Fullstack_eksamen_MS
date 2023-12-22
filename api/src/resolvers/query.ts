import { Movie } from '../models/movie.model';
import { Actor } from '../models/actor.model';
import { Review } from '../models/review.model';

export default {
    moviesbytitle: async (_parent:never, _args: {title: string }) => {
        const query = { title: { $regex: _args.title, $options: 'i' } };
        const movies = await Movie.find(query).populate('actors');
        return movies;
    },
    movies: async () => await Movie.find({}),
    actors: async () => await Actor.find({}),
    reviews: async () => await Review.find({}),
    actorsbyname: async (_parent:never, _args: {name: string }) => {
        const query = { name: { $regex: _args.name, $options: 'i' } };
        const actors = await Actor.find(query);
        return actors;
    },
}