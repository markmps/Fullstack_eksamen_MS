import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import DELETE_MOVIE from '../queries/DeleteMovie';

const MovieDelete: React.FC = () => {
  const [movieId, setMovieId] = useState('');
  const [deleteMovie, { loading, error, data }] = useMutation(DELETE_MOVIE);

  const handleDelete = async () => {
    try {
      await deleteMovie({ variables: 
        { 
            id: movieId 
        } 
    });
    console.log('Movie deleted successfully');
    setMovieId('');
    } catch (err) {
      console.error('Error deleting movie:', err);
    }
  };

  return (
    <div>
      <h2>Delete Movie</h2>
      <input
        type="text"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
        placeholder="Enter Movie ID"
      />
      <br />
      <button onClick={handleDelete} disabled={loading || !movieId}>
        Delete Movie
      </button>
      {loading && <p>Deleting...</p>}
      {error && <p>Error deleting movie: {error.message}</p>}
      {data && <p>Movie deleted successfully</p>}
    </div>
  );
};

export default MovieDelete;
