import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_ACTOR_TO_MOVIE  from '../queries/AddActorToMovie';

const MovieAddActor: React.FC = () => {
  const [movieId, setMovieId] = useState('');
  const [actorId, setActorId] = useState('');
  const [addActorToMovie, { loading, error, data }] = useMutation(ADD_ACTOR_TO_MOVIE);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addActorToMovie({ variables: 
        {
            actorId: actorId,
            movieId: movieId
    } });
      console.log('Actor added to movie successfully');
    } catch (err) {
      console.error('Error adding actor to movie:', err);
    }
  };

  return (
    <div>
      <h2>Add Actor to Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={actorId}
          onChange={(e) => setActorId(e.target.value)}
          placeholder="Actor ID"
          required
        />
      <br />
        <input
          type="text"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          placeholder="Movie ID"
          required
        />
      <br />
        <button type="submit" disabled={loading}>Add Actor</button>
        {loading && <p>Adding actor to movie...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Actor added to movie successfully</p>}
      </form>
    </div>
  );
};

export default MovieAddActor;