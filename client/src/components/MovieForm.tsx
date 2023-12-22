import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import CREATE_MOVIE  from '../queries/CreateMovie'

const CreateMovie: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [year, setYear] = useState<number >(0);
    const [movieCreated, setMovieCreated] = useState<boolean>(false);
    const [createMovie, { loading, error }] = useMutation(CREATE_MOVIE);
  
    const currentYear = new Date().getFullYear();

    const handleCreateMovie = async (e: React.FormEvent) => {
      e.preventDefault();
      setMovieCreated(false);
      try {
        console.log(title);
        console.log(year);

        await createMovie(
          {
            variables: {
              title: title,
              year: year
            },
          }
        );
        setMovieCreated(true);
      } catch (e) {
        console.error('Error creating movie:', e);
      }
    };
  
    return (
      <div>
        <h2>Create Movie</h2>
        {movieCreated && <p className="success-message">Movie successfully added!</p>}
        <form onSubmit={handleCreateMovie}>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          <br />

            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              placeholder="Year"
              min="1000"
              max={currentYear}
              required
            />
          <br />
          
          <br />
          <button type="submit" disabled={loading}>
            Create Movie
          </button>
          {loading && <p>Creating...</p>}
          {error && <p>Error: {error.message}</p>}
          </form>
      </div>
    );
  };
  
  export default CreateMovie;