import './css/Grid.css'
import React from 'react';
import {useQuery} from '@apollo/client';
import GET_MOVIES_BY_TITLE from '../queries/GetMoviesByTitle';

interface Actor {
  _id: string;
  name: string;
}

interface Movie {
  _id: string;
  title: string;
  year: number;
  actors: Actor[]
}
interface MoviesGridProps {
  searchQuery: string;
}

const MoviesGrid: React.FC<MoviesGridProps> = ({searchQuery}) => {
    const  { loading, error, data } = useQuery(GET_MOVIES_BY_TITLE, {
      variables: {title: searchQuery}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>
    if (!data || data.moviesbytitle.length === 0) return <p>No movies found.</p>;

    return(
      <div>
      <table className="grid">
      <caption>Movies</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Actors</th>
          </tr>
        </thead>
        <tbody>
          {data.moviesbytitle.map((movie: Movie) => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>
                {movie.actors && movie.actors.length > 0
                  ? movie.actors.slice(0,3).map((actor: Actor) => actor.name).join(', ')
                  : 'No actors listed'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    

} 

export default MoviesGrid;

