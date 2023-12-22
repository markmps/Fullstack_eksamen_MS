import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_MOVIE_TO_ACTOR from '../queries/AddMovieToActor';

const ActorAddMovie: React.FC = () => {
  const [actorId, setActorId] = useState('');
  const [movieId, setMovieId] = useState('');
  const [addMovieToActor, { loading, error, data }] = useMutation(ADD_MOVIE_TO_ACTOR);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addMovieToActor({ variables: 
        {
            movieId: movieId,
            actorId: actorId
            
    } });
      console.log('Movie added to Actor successfully');
    } catch (err) {
      console.error('Error adding actor to actor:', err);
    }
  };

  return (
    <div>
      <h2>Add Movie to actor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          placeholder="Movie ID"
          required
        />
      <br />
        <input
          type="text"
          value={actorId}
          onChange={(e) => setActorId(e.target.value)}
          placeholder="Actor ID"
          required
        />
      <br />
        <button type="submit" disabled={loading}>Add Movie</button>
        {loading && <p>Adding movie to actor...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Movie added to actor successfully</p>}
      </form>
    </div>
  );
};

export default ActorAddMovie;